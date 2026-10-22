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

const role_put = defineEventHandler(async (event) => {
  var _a;
  const currentAdmin = await requireAdmin(event);
  const targetId = parseInt((_a = event.context.params) == null ? void 0 : _a.id, 10);
  if (isNaN(targetId)) {
    throw createError({ statusCode: 400, message: "Invalid customer ID" });
  }
  const body = await readBody(event);
  const { is_admin } = body || {};
  if (typeof is_admin !== "boolean") {
    throw createError({ statusCode: 400, message: "is_admin boolean is required" });
  }
  if (currentAdmin.id === targetId && !is_admin) {
    throw createError({ statusCode: 400, message: "You cannot revoke your own administrator status." });
  }
  const res = await query(
    "UPDATE users SET is_admin = ? WHERE id = ? RETURNING id, name, email, is_admin",
    [is_admin, targetId]
  );
  if (res.rows.length === 0) {
    throw createError({ statusCode: 404, message: "User not found" });
  }
  return {
    success: true,
    user: res.rows[0]
  };
});

export { role_put as default };
//# sourceMappingURL=role.put.mjs.map
