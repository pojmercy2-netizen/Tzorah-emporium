import { d as defineEventHandler } from '../../../_/nitro.mjs';
import { q as query } from '../../../_/db.mjs';
import { r as requireAdmin } from '../../../_/auth.mjs';
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

const dashboard_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  await requireAdmin(event);
  const revRes = await query("SELECT COALESCE(SUM(total_price), 0) AS total_revenue FROM orders");
  const totalRevenue = parseFloat(((_a = revRes.rows[0]) == null ? void 0 : _a.total_revenue) || "0");
  const ordRes = await query("SELECT COUNT(*) AS total_orders FROM orders");
  const totalOrders = parseInt(((_b = ordRes.rows[0]) == null ? void 0 : _b.total_orders) || "0", 10);
  const prodRes = await query("SELECT COUNT(*) AS total_products FROM products");
  const totalProducts = parseInt(((_c = prodRes.rows[0]) == null ? void 0 : _c.total_products) || "0", 10);
  const custRes = await query("SELECT COUNT(*) AS total_customers FROM users");
  const totalCustomers = parseInt(((_d = custRes.rows[0]) == null ? void 0 : _d.total_customers) || "0", 10);
  const latestOrdersRes = await query(`
    SELECT * FROM orders
    ORDER BY created_at DESC
    LIMIT 5
  `);
  const latestOrders = [];
  for (const order of latestOrdersRes.rows) {
    const itemsRes = await query(`
      SELECT oi.*, p.name
      FROM order_items oi
      LEFT JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `, [order.id]);
    latestOrders.push({
      id: order.id,
      customer_name: order.customer_name || "Customer",
      email: order.email,
      created_at: order.created_at,
      total_price: parseFloat(order.total_price || 0),
      status: order.status || "Pending",
      items: itemsRes.rows
    });
  }
  const topProdRes = await query(`
    SELECT 
      p.id,
      p.name,
      p.image,
      COALESCE(SUM(oi.quantity), 0) AS sales_count,
      COALESCE(SUM(oi.quantity * oi.unit_price), 0) AS revenue
    FROM products p
    JOIN order_items oi ON p.id = oi.product_id
    GROUP BY p.id, p.name, p.image
    ORDER BY sales_count DESC
    LIMIT 4
  `);
  let topProducts = topProdRes.rows.map((p) => ({
    id: p.id,
    name: p.name,
    image: p.image || "/images/products/perf_usa_1.png",
    salesCount: parseInt(p.sales_count || "0", 10),
    revenue: parseFloat(p.revenue || "0")
  }));
  if (topProducts.length === 0) {
    const fallbackProd = await query("SELECT id, name, image, price FROM products LIMIT 4");
    topProducts = fallbackProd.rows.map((p) => ({
      id: p.id,
      name: p.name,
      image: p.image || "/images/products/perf_usa_1.png",
      salesCount: 0,
      revenue: 0
    }));
  }
  return {
    total_revenue: totalRevenue,
    total_orders: totalOrders,
    total_products: totalProducts,
    total_customers: totalCustomers,
    latest_orders: latestOrders,
    top_products: topProducts
  };
});

export { dashboard_get as default };
//# sourceMappingURL=dashboard.get.mjs.map
