import { d as defineEventHandler, c as createError, r as readBody } from '../../../../../_/nitro.mjs';
import { q as query } from '../../../../../_/db.mjs';
import { r as requireAdmin } from '../../../../../_/auth.mjs';
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

const status_put = defineEventHandler(async (event) => {
  var _a;
  await requireAdmin(event);
  const rawId = parseInt((_a = event.context.params) == null ? void 0 : _a.id, 10);
  if (isNaN(rawId)) {
    throw createError({ statusCode: 400, message: "Invalid order ID" });
  }
  const body = await readBody(event);
  const { status, payment_status } = body || {};
  const updates = [];
  const values = [];
  if (status) {
    updates.push("status = ?");
    values.push(status);
  }
  if (payment_status) {
    updates.push("payment_status = ?");
    values.push(payment_status);
  }
  if (updates.length === 0) {
    throw createError({ statusCode: 400, message: "No status or payment_status provided" });
  }
  values.push(rawId);
  const sql = `UPDATE orders SET ${updates.join(", ")} WHERE id = ? RETURNING *`;
  const res = await query(sql, values);
  if (res.rows.length === 0) {
    throw createError({ statusCode: 404, message: "Order not found" });
  }
  return {
    success: true,
    order: res.rows[0]
  };
});

export { status_put as default };
//# sourceMappingURL=status.put.mjs.map
