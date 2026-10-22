import { d as defineEventHandler, r as readBody, c as createError } from '../../../_/nitro.mjs';
import { q as query } from '../../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pg';

const orders_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { customer_name, email, phone, shipping_address, items, total_price: clientTotal } = body || {};
  if (!customer_name || !email || !items || !Array.isArray(items) || items.length === 0) {
    throw createError({
      statusCode: 400,
      message: "Customer name, email, and at least one item are required"
    });
  }
  let calculatedTotal = 0;
  const processedItems = [];
  for (const item of items) {
    const qty = Math.max(1, parseInt(item.quantity || 1, 10));
    let unitPrice = 0;
    let resolvedProductId = null;
    const numericId = parseInt(item.product_id, 10);
    if (!isNaN(numericId)) {
      const prodRes = await query("SELECT id, name, price FROM products WHERE id = ?", [numericId]);
      if (prodRes.rows.length > 0) {
        resolvedProductId = prodRes.rows[0].id;
        unitPrice = parseFloat(prodRes.rows[0].price || item.price || 0);
      }
    }
    if (!resolvedProductId && item.name) {
      const nameRes = await query("SELECT id, name, price FROM products WHERE LOWER(name) = LOWER(?) LIMIT 1", [item.name]);
      if (nameRes.rows.length > 0) {
        resolvedProductId = nameRes.rows[0].id;
        unitPrice = parseFloat(nameRes.rows[0].price || item.price || 0);
      }
    }
    if (unitPrice === 0 && item.price) {
      unitPrice = parseFloat(item.price);
    }
    calculatedTotal += unitPrice * qty;
    processedItems.push({
      productId: resolvedProductId,
      quantity: qty,
      unitPrice
    });
  }
  const finalTotal = clientTotal ? Math.max(parseFloat(clientTotal), calculatedTotal) : calculatedTotal;
  const reference = `TZR-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
  const orderRes = await query(
    `INSERT INTO orders (
      customer_name, email, phone, shipping_address, total_price, 
      status, payment_status, payment_reference, payment_channel
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING *`,
    [
      customer_name.trim(),
      email.toLowerCase().trim(),
      phone || null,
      shipping_address || null,
      finalTotal,
      "Pending",
      "Unpaid",
      reference,
      "Bank Transfer"
    ]
  );
  const newOrder = orderRes.rows[0];
  for (const item of processedItems) {
    await query(
      `INSERT INTO order_items (order_id, product_id, quantity, unit_price)
       VALUES (?, ?, ?, ?)`,
      [newOrder.id, item.productId, item.quantity, item.unitPrice]
    );
  }
  return {
    ...newOrder,
    total_price: parseFloat(newOrder.total_price),
    reference
  };
});

export { orders_post as default };
//# sourceMappingURL=orders.post.mjs.map
