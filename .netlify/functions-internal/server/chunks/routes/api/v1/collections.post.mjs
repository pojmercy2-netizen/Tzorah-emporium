import { d as defineEventHandler, r as readBody, c as createError } from '../../../_/nitro.mjs';
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

const collections_post = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const body = await readBody(event);
  const { name, slug, description } = body || {};
  if (!name || !slug) {
    throw createError({ statusCode: 400, message: "Collection name and slug are required" });
  }
  const existing = await query("SELECT * FROM collections WHERE slug = ?", [slug]);
  if (existing.rows.length > 0) {
    return existing.rows[0];
  }
  const res = await query(
    "INSERT INTO collections (name, slug, description) VALUES (?, ?, ?) RETURNING *",
    [name, slug, description || null]
  );
  return res.rows[0];
});

export { collections_post as default };
//# sourceMappingURL=collections.post.mjs.map
