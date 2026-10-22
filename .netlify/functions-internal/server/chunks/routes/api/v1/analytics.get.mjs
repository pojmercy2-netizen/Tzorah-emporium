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

const analytics_get = defineEventHandler(async (event) => {
  var _a, _b;
  await requireAdmin(event);
  const statsRes = await query(`
    SELECT 
      COALESCE(SUM(total_price), 0) AS total_revenue,
      COUNT(id) AS total_orders
    FROM orders
  `);
  const totalRevenue = parseFloat(((_a = statsRes.rows[0]) == null ? void 0 : _a.total_revenue) || "0");
  const totalOrders = parseInt(((_b = statsRes.rows[0]) == null ? void 0 : _b.total_orders) || "0", 10);
  const avgBasket = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const leaderRes = await query(`
    SELECT 
      p.id,
      p.name,
      COALESCE(c.name, 'PERFUMES') AS category,
      COALESCE(SUM(oi.quantity), 0) AS sales_count,
      COALESCE(SUM(oi.quantity * oi.unit_price), 0) AS revenue
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN order_items oi ON p.id = oi.product_id
    GROUP BY p.id, p.name, c.name
    ORDER BY revenue DESC, sales_count DESC
    LIMIT 6
  `);
  const leaderboard = leaderRes.rows.map((r) => ({
    id: r.id,
    name: r.name,
    category: r.category,
    salesCount: parseInt(r.sales_count || "0", 10),
    revenue: parseFloat(r.revenue || "0"),
    conversion: 3.5
  }));
  const catShareRes = await query(`
    SELECT 
      COALESCE(c.name, 'PERFUMES') AS category,
      COUNT(p.id) AS product_count
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    GROUP BY c.name
    ORDER BY product_count DESC
  `);
  const categoryDistribution = catShareRes.rows.map((r) => ({
    name: r.category,
    count: parseInt(r.product_count || "0", 10)
  }));
  return {
    totalRevenue,
    totalOrders,
    avgBasket,
    leaderboard,
    categoryDistribution
  };
});

export { analytics_get as default };
//# sourceMappingURL=analytics.get.mjs.map
