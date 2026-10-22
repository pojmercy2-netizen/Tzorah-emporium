import { d as defineEventHandler, r as readBody, c as createError } from '../../../../_/nitro.mjs';
import { q as query } from '../../../../_/db.mjs';
import { v as verifyPassword, c as createAccessToken } from '../../../../_/auth.mjs';
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

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body || {};
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Email and password are required",
      data: {
        detail: "Email and password are required"
      }
    });
  }
  const cleanEmail = email.toLowerCase().trim();
  const res = await query("SELECT * FROM users WHERE LOWER(email) = LOWER(?)", [cleanEmail]);
  const user = res.rows[0];
  if (!user || !verifyPassword(password, user.hashed_password)) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Incorrect email or password",
      data: {
        detail: "Incorrect email or password"
      }
    });
  }
  const token = createAccessToken({ sub: user.email });
  return {
    access_token: token,
    token_type: "bearer"
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
