import { d as defineEventHandler, c as createError, a as getQuery } from '../../../../_/nitro.mjs';
import { q as query } from '../../../../_/db.mjs';
import { g as getCurrentUser } from '../../../../_/auth.mjs';
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

const orders_delete = defineEventHandler(async (event) => {
  const user = await getCurrentUser(event);
  if (!user || !user.email) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized: Valid user session required"
    });
  }
  const q = getQuery(event);
  const orderId = q.id ? parseInt(q.id, 10) : null;
  if (orderId) {
    const res2 = await query(
      `DELETE FROM orders 
       WHERE id = ? AND LOWER(email) = LOWER(?) 
       RETURNING id`,
      [orderId, user.email.trim()]
    );
    if (res2.rows.length === 0) {
      throw createError({
        statusCode: 404,
        message: `Order #${orderId} not found or you are not authorized to delete it.`
      });
    }
    return {
      success: true,
      message: `Order #${orderId} was removed from your history.`,
      deletedCount: 1,
      deletedId: orderId
    };
  }
  const res = await query(
    `DELETE FROM orders 
     WHERE LOWER(email) = LOWER(?) 
     RETURNING id`,
    [user.email.trim()]
  );
  return {
    success: true,
    message: "All order history has been cleared successfully.",
    deletedCount: res.rows.length,
    deletedIds: res.rows.map((r) => r.id)
  };
});

export { orders_delete as default };
//# sourceMappingURL=orders.delete.mjs.map
