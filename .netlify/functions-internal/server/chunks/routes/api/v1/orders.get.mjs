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

const orders_get = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const ordersRes = await query(`
    SELECT * FROM orders
    ORDER BY created_at DESC
  `);
  const orders = ordersRes.rows;
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
      customer_name: order.customer_name || "Customer",
      email: order.email,
      phone: order.phone,
      shipping_address: order.shipping_address,
      total_price: parseFloat(order.total_price || 0),
      status: order.status || "Pending",
      payment_status: order.payment_status || "Unpaid",
      payment_reference: order.payment_reference,
      payment_channel: order.payment_channel,
      payment_receipt: order.payment_receipt || null,
      created_at: order.created_at,
      items: itemsRes.rows.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        unit_price: parseFloat(item.unit_price || 0),
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
