import { getQuery, createError } from 'h3'
import { query } from '../../../utils/db'
import { getCurrentUser } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const user = await getCurrentUser(event)
  if (!user || !user.email) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: Valid user session required'
    })
  }

  const q = getQuery(event)
  const orderId = q.id ? parseInt(q.id as string, 10) : null

  if (orderId) {
    // Delete a single order for the authenticated user
    const res = await query(
      `DELETE FROM orders 
       WHERE id = ? AND LOWER(email) = LOWER(?) 
       RETURNING id`,
      [orderId, user.email.trim()]
    )

    if (res.rows.length === 0) {
      throw createError({
        statusCode: 404,
        message: `Order #${orderId} not found or you are not authorized to delete it.`
      })
    }

    return {
      success: true,
      message: `Order #${orderId} was removed from your history.`,
      deletedCount: 1,
      deletedId: orderId
    }
  }

  // Clear ALL orders for the authenticated user
  const res = await query(
    `DELETE FROM orders 
     WHERE LOWER(email) = LOWER(?) 
     RETURNING id`,
    [user.email.trim()]
  )

  return {
    success: true,
    message: 'All order history has been cleared successfully.',
    deletedCount: res.rows.length,
    deletedIds: res.rows.map(r => r.id)
  }
})
