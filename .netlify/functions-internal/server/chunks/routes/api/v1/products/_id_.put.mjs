import { d as defineEventHandler, c as createError, r as readBody } from '../../../../_/nitro.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  var _a;
  await requireAdmin(event);
  const rawId = parseInt((_a = event.context.params) == null ? void 0 : _a.id, 10);
  if (isNaN(rawId)) {
    throw createError({ statusCode: 400, message: "Invalid product ID" });
  }
  const body = await readBody(event);
  const { name, category, subcategory, price, stock, image, color, description, size, collection_id } = body || {};
  let categoryId = void 0;
  if (category !== void 0) {
    const cleanCat = String(category).trim().toUpperCase();
    const catSlug = cleanCat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const catRes = await query("SELECT id FROM categories WHERE UPPER(name) = ? OR slug = ?", [cleanCat, catSlug]);
    if (catRes.rows.length > 0) {
      categoryId = catRes.rows[0].id;
    } else {
      const newCat = await query("INSERT INTO categories (name, slug) VALUES (?, ?) RETURNING id", [cleanCat, catSlug]);
      categoryId = newCat.rows[0].id;
    }
  }
  const updates = [];
  const values = [];
  if (name !== void 0) {
    updates.push("name = ?");
    values.push(name);
  }
  if (subcategory !== void 0) {
    updates.push("subcategory = ?");
    values.push(subcategory ? String(subcategory).trim() : null);
  }
  if (price !== void 0) {
    updates.push("price = ?");
    values.push(parseFloat(price));
  }
  if (stock !== void 0) {
    updates.push("stock = ?");
    values.push(parseInt(stock, 10));
  }
  if (image !== void 0) {
    updates.push("image = ?");
    values.push(image);
  }
  if (color !== void 0) {
    updates.push("color = ?");
    values.push(Array.isArray(color) ? JSON.stringify(color) : color);
  }
  if (description !== void 0) {
    updates.push("description = ?");
    values.push(description);
  }
  if (size !== void 0) {
    updates.push("size = ?");
    values.push(Array.isArray(size) ? size[0] || "Standard" : size);
  }
  if (categoryId !== void 0) {
    updates.push("category_id = ?");
    values.push(categoryId);
  }
  if (collection_id !== void 0) {
    updates.push("collection_id = ?");
    values.push(collection_id ? parseInt(collection_id, 10) : null);
  }
  if (updates.length === 0) {
    throw createError({ statusCode: 400, message: "No fields provided to update" });
  }
  values.push(rawId);
  const sql = `UPDATE products SET ${updates.join(", ")} WHERE id = ? RETURNING *`;
  const res = await query(sql, values);
  if (res.rows.length === 0) {
    throw createError({ statusCode: 404, message: "Product not found" });
  }
  const updated = res.rows[0];
  return {
    ...updated,
    cat_name: category ? String(category).trim().toUpperCase() : void 0,
    category: category ? String(category).trim().toUpperCase() : void 0,
    subcategory: updated.subcategory || ""
  };
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
