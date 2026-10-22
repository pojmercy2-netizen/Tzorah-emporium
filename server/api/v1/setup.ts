import { readBody, getQuery } from 'h3'
import { runDatabaseSetup } from '../../utils/setup-db'

export default defineEventHandler(async (event) => {
  let body: any = {}
  if (event.method === 'POST' || event.method === 'PUT') {
    try {
      body = (await readBody(event)) || {}
    } catch {
      body = {}
    }
  }

  const queryParams = getQuery(event) || {}

  const email = (body.email || queryParams.email) as string | undefined
  const password = (body.password || queryParams.password) as string | undefined
  const name = (body.name || queryParams.name) as string | undefined

  try {
    const result = await runDatabaseSetup({ email, password, name })
    return result
  } catch (error: any) {
    console.error('Setup failed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Database Setup Failed',
      message: error?.message || 'Unknown database setup error',
      data: {
        detail: error?.message,
        stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined
      }
    })
  }
})
