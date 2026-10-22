import { d as defineEventHandler, c as createError, b as readMultipartFormData, r as readBody } from '../../../../../_/nitro.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { q as query } from '../../../../../_/db.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:crypto';
import 'pg';

const receipt_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const rawId = parseInt((_a = event.context.params) == null ? void 0 : _a.id, 10);
  if (isNaN(rawId)) {
    throw createError({ statusCode: 400, message: "Invalid order ID" });
  }
  const checkOrder = await query("SELECT id, email FROM orders WHERE id = ?", [rawId]);
  if (checkOrder.rows.length === 0) {
    throw createError({ statusCode: 404, message: "Order not found" });
  }
  const uploadDir = path.resolve(process.cwd(), "public", "uploads", "receipts");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  let fileBuffer = null;
  let fileExt = "png";
  const multiPart = await readMultipartFormData(event).catch(() => null);
  if (multiPart && multiPart.length > 0) {
    const filePart = multiPart.find((part) => {
      var _a2;
      return part.name === "receipt" || part.name === "file" || ((_a2 = part.type) == null ? void 0 : _a2.startsWith("image/"));
    });
    if (filePart && filePart.data) {
      fileBuffer = filePart.data;
      if (((_b = filePart.type) == null ? void 0 : _b.includes("jpeg")) || ((_c = filePart.type) == null ? void 0 : _c.includes("jpg"))) fileExt = "jpg";
      else if ((_d = filePart.type) == null ? void 0 : _d.includes("webp")) fileExt = "webp";
      else if ((_e = filePart.type) == null ? void 0 : _e.includes("pdf")) fileExt = "pdf";
      else if (filePart.filename) {
        const ext = path.extname(filePart.filename).replace(".", "").toLowerCase();
        if (ext) fileExt = ext;
      }
    }
  }
  if (!fileBuffer) {
    const body = await readBody(event).catch(() => null);
    if (body == null ? void 0 : body.receipt_base64) {
      const base64Data = body.receipt_base64;
      const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        const mimeType = matches[1];
        if (mimeType.includes("jpeg") || mimeType.includes("jpg")) fileExt = "jpg";
        else if (mimeType.includes("webp")) fileExt = "webp";
        else if (mimeType.includes("pdf")) fileExt = "pdf";
        fileBuffer = Buffer.from(matches[2], "base64");
      } else {
        fileBuffer = Buffer.from(base64Data, "base64");
      }
    }
  }
  if (!fileBuffer || fileBuffer.length === 0) {
    throw createError({
      statusCode: 400,
      message: "No receipt file or image provided. Please select an image of your payment confirmation."
    });
  }
  const fileName = `receipt-order-${rawId}-${Date.now()}.${fileExt}`;
  const filePath = path.join(uploadDir, fileName);
  fs.writeFileSync(filePath, fileBuffer);
  const publicUrl = `/uploads/receipts/${fileName}`;
  await query("UPDATE orders SET payment_receipt = ? WHERE id = ?", [publicUrl, rawId]);
  return {
    success: true,
    message: "Payment receipt uploaded successfully",
    payment_receipt: publicUrl,
    orderId: rawId
  };
});

export { receipt_post as default };
//# sourceMappingURL=receipt.post.mjs.map
