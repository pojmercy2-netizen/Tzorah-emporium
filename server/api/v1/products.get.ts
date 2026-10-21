import { getQuery } from 'h3'
import { query } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const q = getQuery(event)
  const categoryFilter = q.category as string | undefined
  const subcategoryFilter = q.subcategory as string | undefined
  const collectionIdFilter = q.collection_id as string | undefined
  const searchFilter = (q.search || q.q) as string | undefined

  let sql = `
    SELECT 
      p.id,
      p.name,
      p.slug,
      p.description,
      p.price,
      p.category_id,
      p.collection_id,
      p.image,
      p.stock,
      p.size,
      p.color,
      p.subcategory,
      p.created_at,
      c.name AS cat_name
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE 1=1
  `
  const params: any[] = []

  if (collectionIdFilter) {
    sql += ' AND p.collection_id = ?'
    params.push(parseInt(collectionIdFilter, 10))
  }

  if (searchFilter && searchFilter.trim()) {
    sql += ' AND (p.name ILIKE ? OR p.description ILIKE ? OR c.name ILIKE ? OR p.subcategory ILIKE ?)'
    const term = `%${searchFilter.trim()}%`
    params.push(term, term, term, term)
  }

  sql += ' ORDER BY p.id ASC'

  try {
    const res = await query(sql, params)
    let products = (res.rows as any[]).map(p => {
      let colors = ['black']
      if (Array.isArray(p.color)) {
        colors = p.color
      } else if (typeof p.color === 'string' && p.color.startsWith('[')) {
        try { colors = JSON.parse(p.color) } catch {}
      } else if (typeof p.color === 'string' && p.color) {
        colors = [p.color]
      }

      const cat = p.cat_name || 'PERFUMES'

      return {
        id: p.id,
        name: p.name,
        slug: p.slug,
        category: cat,
        cat_name: cat,
        subcategory: p.subcategory || '',
        price: parseFloat(p.price || 0),
        stock: p.stock !== null && p.stock !== undefined ? parseInt(p.stock, 10) : 10,
        image: p.image || '/images/products/perf_usa_1.png',
        description: p.description || '',
        size: p.size || 'Standard',
        color: colors,
        featured: true,
        inStock: (p.stock || 0) > 0
      }
    })

    if (categoryFilter && categoryFilter.toUpperCase() !== 'ALL') {
      if (categoryFilter.toUpperCase() === 'FRAGRANCE' || categoryFilter.toUpperCase() === 'FRAGRANCES') {
        products = products.filter(p => p.category.toUpperCase() !== 'ADULT SECTION')
      } else {
        products = products.filter(p => p.category.toUpperCase() === categoryFilter.toUpperCase())
      }
    }

    if (subcategoryFilter && subcategoryFilter.toUpperCase() !== 'ALL') {
      products = products.filter(p => p.subcategory.toUpperCase() === subcategoryFilter.toUpperCase())
    }

    if (searchFilter && searchFilter.trim()) {
      const term = searchFilter.trim().toLowerCase()
      products = products.filter(p =>
        (p.name || '').toLowerCase().includes(term) ||
        (p.description || '').toLowerCase().includes(term) ||
        (p.category || '').toLowerCase().includes(term) ||
        (p.subcategory || '').toLowerCase().includes(term)
      )
    }

    return products
  } catch (err) {
    console.error('Failed to query products from DB:', err)
    return []
  }
})
