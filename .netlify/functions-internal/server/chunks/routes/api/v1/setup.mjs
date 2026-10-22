import { d as defineEventHandler, r as readBody, a as getQuery, c as createError } from '../../../_/nitro.mjs';
import { r as runDatabaseSetup } from '../../../_/setup-db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../../_/db.mjs';
import 'pg';
import '../../../_/auth.mjs';
import 'bcryptjs';
import 'jsonwebtoken';

const setupHandler = defineEventHandler(async (event) => {
  let body = {};
  if (event.method === "POST" || event.method === "PUT") {
    try {
      body = await readBody(event) || {};
    } catch {
      body = {};
    }
  }
  const queryParams = getQuery(event) || {};
  const email = body.email || queryParams.email;
  const password = body.password || queryParams.password;
  const name = body.name || queryParams.name;
  try {
    const result = await runDatabaseSetup({ email, password, name });
    return result;
  } catch (error) {
    console.error("Setup failed:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Database Setup Failed",
      message: (error == null ? void 0 : error.message) || "Unknown database setup error",
      data: {
        detail: error == null ? void 0 : error.message,
        stack: void 0
      }
    });
  }
});

export { setupHandler as default };
//# sourceMappingURL=setup.mjs.map
