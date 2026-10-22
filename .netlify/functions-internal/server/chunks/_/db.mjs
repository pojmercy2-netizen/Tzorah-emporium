import pg from 'pg';

function createPool() {
  const connectionString = process.env.DATABASE_URL || "postgresql://postgres:Ebimene0812%3F%3F@localhost:5432/tzorah_emporium";
  const isNeon = connectionString.includes("neon.tech") || connectionString.includes("sslmode=require") || connectionString.includes("sslmode=no-verify");
  const pool = new pg.Pool({
    connectionString,
    // Neon (and most cloud Postgres) requires SSL. On localhost it is optional.
    ssl: isNeon ? { rejectUnauthorized: false } : void 0,
    // Serverless-friendly settings: small pool, short idle timeout so connections
    // are released quickly between Lambda invocations.
    max: 3,
    idleTimeoutMillis: 1e4,
    connectionTimeoutMillis: 1e4
  });
  pool.on("error", (err) => {
    console.error("[pg] Unexpected error on idle client:", err);
  });
  return pool;
}
let _pgPool = null;
function getPgPool() {
  if (!_pgPool) {
    _pgPool = createPool();
  }
  return _pgPool;
}
async function query(text, params) {
  const pool = getPgPool();
  let paramIdx = 1;
  const pgSql = text.replace(/\?/g, () => `$${paramIdx++}`);
  const res = await pool.query(pgSql, params || []);
  return { rows: res.rows };
}

export { query as q };
//# sourceMappingURL=db.mjs.map
