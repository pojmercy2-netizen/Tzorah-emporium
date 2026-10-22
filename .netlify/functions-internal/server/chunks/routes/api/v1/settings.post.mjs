import { d as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
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

const settings_post = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event) || {};
  for (const [key, value] of Object.entries(body)) {
    const valString = typeof value === "string" ? JSON.stringify(value) : JSON.stringify(value);
    await query(
      `INSERT INTO settings (key, value)
       VALUES (?, ?)
       ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
      [key, valString]
    );
  }
  return { success: true, message: "Settings saved successfully" };
});

export { settings_post as default };
//# sourceMappingURL=settings.post.mjs.map
