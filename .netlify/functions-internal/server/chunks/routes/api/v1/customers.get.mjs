import { d as defineEventHandler } from '../../../_/nitro.mjs';
import { q as query } from '../../../_/db.mjs';
import { r as requireAdmin } from '../../../_/auth.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pg';
import 'bcryptjs';
import 'jsonwebtoken';

const customers_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const usersRes = await query(`
    SELECT 
      u.id,
      u.name,
      u.email,
      u.is_admin,
      u.created_at,
      COUNT(o.id) AS order_count,
      COALESCE(SUM(CASE WHEN o.total_price IS NOT NULL THEN o.total_price ELSE 0 END), 0) AS total_spend,
      MAX(o.phone) AS phone,
      MAX(o.shipping_address) AS shipping_address,
      true AS is_registered
    FROM users u
    LEFT JOIN orders o ON LOWER(u.email) = LOWER(o.email)
    GROUP BY u.id, u.name, u.email, u.is_admin, u.created_at

    UNION ALL

    SELECT 
      (-1 * MIN(o.id)) AS id,
      COALESCE(MAX(o.customer_name), 'Guest Client') AS name,
      LOWER(o.email) AS email,
      false AS is_admin,
      MIN(o.created_at) AS created_at,
      COUNT(o.id) AS order_count,
      COALESCE(SUM(CASE WHEN o.total_price IS NOT NULL THEN o.total_price ELSE 0 END), 0) AS total_spend,
      MAX(o.phone) AS phone,
      MAX(o.shipping_address) AS shipping_address,
      false AS is_registered
    FROM orders o
    WHERE LOWER(o.email) NOT IN (SELECT LOWER(email) FROM users)
    GROUP BY LOWER(o.email)

    ORDER BY created_at DESC
  `);
  const customers = [];
  for (const row of usersRes.rows) {
    const ordersRes = await query(`
      SELECT id, total_price, status, created_at
      FROM orders
      WHERE LOWER(email) = LOWER(?)
      ORDER BY created_at DESC
      LIMIT 5
    `, [row.email]);
    const recentOrders = ordersRes.rows.map((o) => ({
      id: `EK-${o.id}`,
      rawId: o.id,
      total: parseFloat(o.total_price || 0),
      status: o.status || "Pending",
      date: new Date(o.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    }));
    const joinDate = row.created_at ? new Date(row.created_at).toISOString().split("T")[0] : "2026-01-01";
    customers.push({
      id: row.id,
      name: row.name || "Valued Client",
      email: row.email,
      phone: row.phone || null,
      shippingAddress: row.shipping_address || null,
      isAdmin: Boolean(row.is_admin),
      is_admin: Boolean(row.is_admin),
      isRegistered: Boolean(row.is_registered),
      joinDate,
      orderCount: parseInt(row.order_count || "0", 10),
      totalSpend: parseFloat(row.total_spend || "0"),
      recentOrders
    });
  }
  return customers;
});

export { customers_get as default };
//# sourceMappingURL=customers.get.mjs.map
