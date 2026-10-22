import { d as defineEventHandler, r as readBody, c as createError } from '../../../../_/nitro.mjs';
import { q as query } from '../../../../_/db.mjs';
import { h as hashPassword } from '../../../../_/auth.mjs';
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

const register_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, password } = body || {};
  if (!name || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Name, email, and password are required",
      data: {
        detail: "Name, email, and password are required"
      }
    });
  }
  const cleanEmail = email.toLowerCase().trim();
  const cleanName = name.trim();
  const existingRes = await query("SELECT id FROM users WHERE LOWER(email) = LOWER(?)", [cleanEmail]);
  if (existingRes.rows.length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Email is already registered. Please sign in instead.",
      data: {
        detail: "Email is already registered. Please sign in instead."
      }
    });
  }
  const countRes = await query("SELECT COUNT(*) as count FROM users");
  const userCount = parseInt(countRes.rows[0].count, 10);
  const isFirstUser = userCount === 0;
  const hashedPassword = hashPassword(password);
  const insertRes = await query(
    "INSERT INTO users (name, email, hashed_password, is_admin) VALUES (?, ?, ?, ?) RETURNING id, name, email, is_admin, created_at",
    [cleanName, cleanEmail, hashedPassword, isFirstUser]
  );
  const newUser = insertRes.rows[0];
  return {
    ...newUser,
    is_admin: Boolean(newUser.is_admin)
  };
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
