import { d as defineEventHandler, a as getQuery } from '../../../../_/nitro.mjs';
import { q as query } from '../../../../_/db.mjs';
import { g as getCurrentUser } from '../../../../_/auth.mjs';
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

const orders_get = defineEventHandler(async (event) => {
  const user = await getCurrentUser(event);
  const q = getQuery(event);
  const skip = q.skip ? parseInt(q.skip, 10) : 0;
  const limit = q.limit ? parseInt(q.limit, 10) : 50;
  const res = await query(`
    SELECT * FROM orders
    WHERE LOWER(email) = LOWER(?)
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `, [user.email, limit, skip]);
  const orders = res.rows;
  const result = [];
  for (const order of orders) {
    const itemsRes = await query(`
      SELECT oi.*, p.name, p.slug, p.image, p.price
      FROM order_items oi
      LEFT JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `, [order.id]);
    result.push({
      id: order.id,
      customer_name: order.customer_name,
      email: order.email,
      phone: order.phone,
      shipping_address: order.shipping_address,
      total_price: parseFloat(order.total_price),
      status: order.status,
      payment_status: order.payment_status,
      payment_reference: order.payment_reference,
      payment_receipt: order.payment_receipt || null,
      created_at: order.created_at,
      items: itemsRes.rows.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        unit_price: parseFloat(item.unit_price),
        product: {
          id: item.product_id,
          name: item.name || `Item #${item.product_id}`,
          slug: item.slug || "",
          image: item.image || "/images/products/perf_usa_1.png",
          price: item.price ? parseFloat(item.price) : parseFloat(item.unit_price)
        }
      }))
    });
  }
  return result;
});

export { orders_get as default };
//# sourceMappingURL=orders.get.mjs.map
