import { query } from './db'
import { hashPassword } from './auth'

export interface SetupOptions {
  email?: string
  password?: string
  name?: string
}

export interface SetupResult {
  success: boolean
  message: string
  executedMigrations: number
  tables: string[]
  admin: {
    id: number
    name: string
    email: string
    is_admin: boolean
    created_at: string
  }
  defaultCredentialsNotice?: string
  timestamp: string
}

export async function runDatabaseSetup(options: SetupOptions = {}): Promise<SetupResult> {
  const email = (options.email || 'admin@tzorahemporium.com').trim().toLowerCase()
  const password = options.password || 'Admin@Tzorah2026!'
  const name = (options.name || 'Tzorah Administrator').trim()

  const migrationQueries = [
    // 1. Users table
    `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      hashed_password VARCHAR(255) NOT NULL,
      is_admin BOOLEAN DEFAULT false,
      phone VARCHAR(50),
      address TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(50)`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS address TEXT`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT false`,
    `ALTER TABLE users ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT NOW()`,

    // 2. Categories table
    `CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )`,

    // 3. Collections table
    `CREATE TABLE IF NOT EXISTS collections (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      image VARCHAR(500),
      created_at TIMESTAMP DEFAULT NOW()
    )`,
    `ALTER TABLE collections ADD COLUMN IF NOT EXISTS image VARCHAR(500)`,

    // 4. Products table
    `CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      price NUMERIC(12, 2) NOT NULL,
      category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
      collection_id INTEGER REFERENCES collections(id) ON DELETE SET NULL,
      image VARCHAR(500),
      stock INTEGER DEFAULT 50,
      size TEXT,
      color TEXT,
      subcategory VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    )`,
    `ALTER TABLE products ADD COLUMN IF NOT EXISTS category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL`,
    `ALTER TABLE products ADD COLUMN IF NOT EXISTS collection_id INTEGER REFERENCES collections(id) ON DELETE SET NULL`,
    `ALTER TABLE products ADD COLUMN IF NOT EXISTS image VARCHAR(500)`,
    `ALTER TABLE products ADD COLUMN IF NOT EXISTS stock INTEGER DEFAULT 50`,
    `ALTER TABLE products ADD COLUMN IF NOT EXISTS size TEXT`,
    `ALTER TABLE products ADD COLUMN IF NOT EXISTS color TEXT`,
    `ALTER TABLE products ADD COLUMN IF NOT EXISTS subcategory VARCHAR(255)`,

    // 5. Orders table
    `CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      customer_name VARCHAR(255),
      email VARCHAR(255),
      phone VARCHAR(50),
      shipping_address TEXT,
      total_price NUMERIC(12, 2),
      status VARCHAR(50) DEFAULT 'Pending',
      payment_status VARCHAR(50) DEFAULT 'Unpaid',
      payment_reference VARCHAR(255),
      payment_channel VARCHAR(100),
      payment_receipt TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS customer_name VARCHAR(255)`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS email VARCHAR(255)`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS phone VARCHAR(50)`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS shipping_address TEXT`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS total_price NUMERIC(12, 2)`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'Pending'`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_status VARCHAR(50) DEFAULT 'Unpaid'`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_reference VARCHAR(255)`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_channel VARCHAR(100)`,
    `ALTER TABLE orders ADD COLUMN IF NOT EXISTS payment_receipt TEXT`,

    // 6. Order items table
    `CREATE TABLE IF NOT EXISTS order_items (
      id SERIAL PRIMARY KEY,
      order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
      product_id INTEGER REFERENCES products(id) ON DELETE SET NULL,
      quantity INTEGER NOT NULL,
      unit_price NUMERIC(12, 2) NOT NULL
    )`,

    // 7. Settings table
    `CREATE TABLE IF NOT EXISTS settings (
      key VARCHAR(255) PRIMARY KEY,
      value TEXT NOT NULL
    )`,

    // 8. Lookbook table
    `CREATE TABLE IF NOT EXISTS lookbook (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      subtitle VARCHAR(255),
      image VARCHAR(500) NOT NULL,
      category VARCHAR(100),
      season VARCHAR(100),
      description TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )`
  ]

  // Execute all table migration statements
  for (const sql of migrationQueries) {
    await query(sql)
  }

  // Insert default categories if not present
  const defaultCategories = [
    { name: 'PERFUMES', slug: 'perfumes', description: 'Luxury designer and Arabian perfumes' },
    { name: 'OILS', slug: 'oils', description: 'Grade-A USA perfume oils and essential essences' },
    { name: 'CANDLES', slug: 'candles', description: 'Handcrafted luxury soy and botanical candles' },
    { name: 'PET CARE', slug: 'pet-care', description: 'Artisanal pet grooming and care essentials' },
    { name: 'INTIMATES', slug: 'intimates', description: 'Silk nightwear and luxury intimates' }
  ]

  for (const cat of defaultCategories) {
    await query(
      `INSERT INTO categories (name, slug, description) 
       VALUES (?, ?, ?) 
       ON CONFLICT (slug) DO NOTHING`,
      [cat.name, cat.slug, cat.description]
    )
  }

  // Insert default settings if not present
  const defaultSettings: [string, any][] = [
    ['storeName', 'TZORAH EMPORIUM'],
    ['tagline', 'The Alchemy of Scents, Pure Oils & Intimate Luxuries'],
    ['supportEmail', 'concierge@tzorahemporium.com'],
    ['telephone', '+234 (0) 800 TZORAH'],
    ['whatsappNumber', '+2348000000000'],
    ['businessHours', 'Mon – Sat, 9am – 8pm'],
    ['contactAddress', 'Port Harcourt, Rivers State, Nigeria'],
    ['freeShippingThreshold', 50000],
    ['standardShippingFee', 3500],
    ['expressShippingFee', 7500],
    ['currency', 'NGN'],
    ['announcementEnabled', true],
    ['announcementText', 'FREE EXPRESS NATIONWIDE SHIPPING ON ORDERS OVER ₦50,000 • 100% AUTHENTIC GUARANTEE']
  ]

  for (const [key, val] of defaultSettings) {
    await query(
      `INSERT INTO settings (key, value) 
       VALUES (?, ?) 
       ON CONFLICT (key) DO NOTHING`,
      [key, JSON.stringify(val)]
    )
  }

  // Create or update admin user
  const hashedPassword = hashPassword(password)
  const existingUserRes = await query(
    'SELECT id, name, email, is_admin FROM users WHERE LOWER(email) = LOWER(?)',
    [email]
  )

  let adminUser: any
  if (existingUserRes.rows.length > 0) {
    const existing = existingUserRes.rows[0]
    const updateRes = await query(
      `UPDATE users 
       SET is_admin = true, 
           hashed_password = ?, 
           name = COALESCE(?, name) 
       WHERE id = ? 
       RETURNING id, name, email, is_admin, created_at`,
      [hashedPassword, name, existing.id]
    )
    adminUser = updateRes.rows[0]
  } else {
    const insertRes = await query(
      `INSERT INTO users (name, email, hashed_password, is_admin) 
       VALUES (?, ?, ?, true) 
       RETURNING id, name, email, is_admin, created_at`,
      [name, email, hashedPassword]
    )
    adminUser = insertRes.rows[0]
  }

  const tablesRes = await query(
    `SELECT table_name 
     FROM information_schema.tables 
     WHERE table_schema = 'public' 
     ORDER BY table_name ASC`
  )
  const tables = (tablesRes.rows as any[]).map((r) => r.table_name)

  const wasDefaultPassword = !options.password
  return {
    success: true,
    message: 'PostgreSQL database setup and migration completed successfully.',
    executedMigrations: migrationQueries.length,
    tables,
    admin: {
      id: adminUser.id,
      name: adminUser.name,
      email: adminUser.email,
      is_admin: Boolean(adminUser.is_admin),
      created_at: adminUser.created_at
    },
    defaultCredentialsNotice: wasDefaultPassword
      ? `Admin user ready. Email: ${email} | Password: ${password}`
      : `Admin user updated with custom password for email: ${email}`,
    timestamp: new Date().toISOString()
  }
}
