import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { H3Event, createError, getHeader, getCookie } from 'h3'
import { query } from './db'

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10)
}

export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash)
}

export function createAccessToken(data: { sub: string }): string {
  const config = useRuntimeConfig()
  const secretKey = (config.secretKey as string) || 'tzorah-emporium-secret-key-development-2026-secure'
  const expireMinutes = parseInt((config.accessTokenExpireMinutes as string) || '1440', 10)

  return jwt.sign(data, secretKey, {
    expiresIn: `${expireMinutes}m`
  })
}

export function decodeToken(token: string): { sub: string } | null {
  const config = useRuntimeConfig()
  const secretKey = (config.secretKey as string) || 'tzorah-emporium-secret-key-development-2026-secure'
  try {
    return jwt.verify(token, secretKey) as { sub: string }
  } catch {
    return null
  }
}

export async function getCurrentUser(event: H3Event) {
  let token: string | null = null
  const authHeader = getHeader(event, 'Authorization') || getHeader(event, 'authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7)
  } else {
    // Cookie fallback
    token = getCookie(event, 'adminToken') || getCookie(event, 'userToken') || null
  }

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Could not validate credentials',
      data: {
        detail: 'Could not validate credentials'
      }
    })
  }
  const decoded = decodeToken(token)
  if (!decoded || !decoded.sub) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Could not validate credentials',
      data: {
        detail: 'Could not validate credentials'
      }
    })
  }

  const res = await query('SELECT id, name, email, is_admin, created_at FROM users WHERE LOWER(email) = LOWER(?)', [decoded.sub])
  const user = res.rows[0]

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Could not validate credentials',
      data: {
        detail: 'User not found or session expired'
      }
    })
  }

  return {
    ...user,
    is_admin: Boolean(user.is_admin)
  }
}

export async function requireAdmin(event: H3Event) {
  const user = await getCurrentUser(event)
  if (!user.is_admin) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
      message: 'Admin access required',
      data: {
        detail: 'Admin access required'
      }
    })
  }
  return user
}
