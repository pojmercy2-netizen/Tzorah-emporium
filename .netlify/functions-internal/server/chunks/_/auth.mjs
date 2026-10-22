import { e as getHeader, f as getCookie, c as createError, h as useRuntimeConfig } from './nitro.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { q as query } from './db.mjs';

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}
function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
function createAccessToken(data) {
  const config = useRuntimeConfig();
  const secretKey = config.secretKey || "tzorah-emporium-secret-key-development-2026-secure";
  const expireMinutes = parseInt(config.accessTokenExpireMinutes || "1440", 10);
  return jwt.sign(data, secretKey, {
    expiresIn: `${expireMinutes}m`
  });
}
function decodeToken(token) {
  const config = useRuntimeConfig();
  const secretKey = config.secretKey || "tzorah-emporium-secret-key-development-2026-secure";
  try {
    return jwt.verify(token, secretKey);
  } catch {
    return null;
  }
}
async function getCurrentUser(event) {
  let token = null;
  const authHeader = getHeader(event, "Authorization") || getHeader(event, "authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7);
  } else {
    token = getCookie(event, "adminToken") || getCookie(event, "userToken") || null;
  }
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Could not validate credentials",
      data: {
        detail: "Could not validate credentials"
      }
    });
  }
  const decoded = decodeToken(token);
  if (!decoded || !decoded.sub) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Could not validate credentials",
      data: {
        detail: "Could not validate credentials"
      }
    });
  }
  const res = await query("SELECT id, name, email, is_admin, created_at FROM users WHERE LOWER(email) = LOWER(?)", [decoded.sub]);
  const user = res.rows[0];
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Could not validate credentials",
      data: {
        detail: "User not found or session expired"
      }
    });
  }
  return {
    ...user,
    is_admin: Boolean(user.is_admin)
  };
}
async function requireAdmin(event) {
  const user = await getCurrentUser(event);
  if (!user.is_admin) {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden",
      message: "Admin access required",
      data: {
        detail: "Admin access required"
      }
    });
  }
  return user;
}

export { createAccessToken as c, getCurrentUser as g, hashPassword as h, requireAdmin as r, verifyPassword as v };
//# sourceMappingURL=auth.mjs.map
