import { d as defineEventHandler, c as createError } from '../../../../_/nitro.mjs';
import { q as query } from '../../../../_/db.mjs';
import { r as requireAdmin } from '../../../../_/auth.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  await requireAdmin(event);
  const rawId = parseInt((_a = event.context.params) == null ? void 0 : _a.id, 10);
  if (isNaN(rawId)) {
    throw createError({ statusCode: 400, message: "Invalid product ID" });
  }
  await query("UPDATE order_items SET product_id = NULL WHERE product_id = ?", [rawId]);
  const res = await query("DELETE FROM products WHERE id = ? RETURNING id", [rawId]);
  if (res.rows.length === 0) {
    throw createError({ statusCode: 404, message: "Product not found" });
  }
  return { success: true, id: rawId };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
