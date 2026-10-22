import {
  pgTable,
  serial,
  varchar,
  text,
  numeric,
  boolean,
  timestamp,
  integer,
} from 'drizzle-orm/pg-core'

// ─── Users ────────────────────────────────────────────────────────────────────
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  hashed_password: varchar('hashed_password', { length: 255 }).notNull(),
  is_admin: boolean('is_admin').default(false),
  phone: varchar('phone', { length: 50 }),
  address: text('address'),
  created_at: timestamp('created_at').defaultNow(),
})

// ─── Categories ───────────────────────────────────────────────────────────────
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  created_at: timestamp('created_at').defaultNow(),
})

// ─── Collections ──────────────────────────────────────────────────────────────
export const collections = pgTable('collections', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  created_at: timestamp('created_at').defaultNow(),
})

// ─── Products ─────────────────────────────────────────────────────────────────
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  price: numeric('price', { precision: 12, scale: 2 }).notNull(),
  category_id: integer('category_id').references(() => categories.id),
  collection_id: integer('collection_id').references(() => collections.id),
  image: varchar('image', { length: 500 }),
  stock: integer('stock').default(50),
  size: text('size'),
  color: text('color'),
  subcategory: varchar('subcategory', { length: 255 }),
  created_at: timestamp('created_at').defaultNow(),
})

// ─── Orders ───────────────────────────────────────────────────────────────────
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  customer_name: varchar('customer_name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  shipping_address: text('shipping_address'),
  total_price: numeric('total_price', { precision: 12, scale: 2 }),
  status: varchar('status', { length: 50 }).default('Pending'),
  payment_status: varchar('payment_status', { length: 50 }).default('Unpaid'),
  payment_reference: varchar('payment_reference', { length: 255 }),
  payment_channel: varchar('payment_channel', { length: 100 }),
  payment_receipt: text('payment_receipt'),
  created_at: timestamp('created_at').defaultNow(),
})

// ─── Order Items ──────────────────────────────────────────────────────────────
export const order_items = pgTable('order_items', {
  id: serial('id').primaryKey(),
  order_id: integer('order_id').references(() => orders.id),
  product_id: integer('product_id').references(() => products.id),
  quantity: integer('quantity').notNull(),
  unit_price: numeric('unit_price', { precision: 12, scale: 2 }).notNull(),
})

// ─── Settings ─────────────────────────────────────────────────────────────────
export const settings = pgTable('settings', {
  key: varchar('key', { length: 255 }).primaryKey(),
  value: text('value').notNull(),
})
