import pg from 'pg'

/**
 * Returns a pg.Pool configured for serverless environments (Netlify, Vercel, etc.)
 * Neon and other hosted Postgres providers require SSL – this is handled automatically
 * by passing `ssl: true` when the connection string contains 'neon.tech' or 'sslmode=require',
 * and gracefully for all other providers.
 */
function createPool(): pg.Pool {
  // Always prefer the runtime environment variable; nuxt runtimeConfig is a build-time fallback
  const connectionString =
    process.env.DATABASE_URL ||
    'postgresql://postgres:Ebimene0812%3F%3F@localhost:5432/tzorah_emporium'

  const isNeon =
    connectionString.includes('neon.tech') ||
    connectionString.includes('sslmode=require') ||
    connectionString.includes('sslmode=no-verify')

  const pool = new pg.Pool({
    connectionString,
    // Neon (and most cloud Postgres) requires SSL. On localhost it is optional.
    ssl: isNeon ? { rejectUnauthorized: false } : undefined,
    // Serverless-friendly settings: small pool, short idle timeout so connections
    // are released quickly between Lambda invocations.
    max: 3,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 10000,
  })

  pool.on('error', (err) => {
    console.error('[pg] Unexpected error on idle client:', err)
  })

  return pool
}

// In serverless environments the module may be re-evaluated on each cold start,
// so this singleton helps reuse connections within a warm invocation but won't
// persist stale connections across cold starts.
let _pgPool: pg.Pool | null = null

export function getPgPool(): pg.Pool {
  if (!_pgPool) {
    _pgPool = createPool()
  }
  return _pgPool
}

export async function query(text: string, params?: any[]): Promise<{ rows: any[] }> {
  const pool = getPgPool()
  // Replace MySQL-style '?' placeholders with Postgres positional '$1, $2, ...'
  let paramIdx = 1
  const pgSql = text.replace(/\?/g, () => `$${paramIdx++}`)
  const res = await pool.query(pgSql, params || [])
  return { rows: res.rows }
}

export async function getConnection() {
  const pool = getPgPool()
  const client = await pool.connect()
  return {
    execute: async (sql: string, params?: any[]) => {
      let paramIdx = 1
      const pgSql = sql.replace(/\?/g, () => `$${paramIdx++}`)
      const res = await client.query(pgSql, params || [])
      return [res.rows, res.fields]
    },
    release: () => client.release()
  }
}

export function getPool() {
  return getPgPool()
}
