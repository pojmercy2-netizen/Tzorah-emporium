<template>
  <div class="shop-page">

    <!-- ═══════════════════════════════════════════ -->
    <!-- HERO HEADER                                 -->
    <!-- ═══════════════════════════════════════════ -->
    <header class="shop-hero">
      <img src="/hero_fragrances.jpg" alt="TZORAH EMPORIUM Shop Banner" class="shop-hero__bg" />
      <div class="shop-hero__overlay"></div>
      <div class="shop-hero__content">
        <h1 class="shop-hero__headline">
          SHOP ON <span class="shop-hero__highlight">TZORAH EMPORIUM</span> WITH CONFIDENCE
        </h1>
      </div>
      <!-- Logo watermark overlay -->
      <div class="img-logo-overlay img-logo-overlay--br">
        <img src="/logo.png" alt="TZORAH EMPORIUM" />
      </div>
    </header>

    <!-- ═══════════════════════════════════════════ -->
    <!-- SHOP BODY & INTERACTIVE GRID                -->
    <!-- ═══════════════════════════════════════════ -->
    <main class="container shop-main">
      
      <!-- Filters and Toolbar -->
      <div class="shop-toolbar">
        <!-- Search Input -->
        <div class="shop-filter-group shop-filter-group--search">
          <label for="shop-search-input" class="shop-filter-label">SEARCH PRODUCTS</label>
          <div class="shop-search-wrapper">
            <svg class="shop-search-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              id="shop-search-input"
              v-model="searchQuery"
              type="text"
              placeholder="Search by product name, oil, fragrance..."
              class="shop-search-input"
              @input="onSearchInput"
            />
            <button
              v-if="searchQuery"
              class="shop-search-clear-btn"
              @click="clearSearch"
              aria-label="Clear search"
              type="button"
            >
              &times;
            </button>
          </div>
        </div>

        <!-- Main Categories Dropdown -->
        <div class="shop-filter-group">
          <label for="category-select" class="shop-filter-label">CATEGORY</label>
          <div class="shop-select-wrapper">
            <select
              id="category-select"
              v-model="activeCategory"
              class="shop-custom-select"
              @change="onCategoryChange"
            >
              <option v-for="cat in categories" :key="cat" :value="cat">
                {{ cat === 'ALL' ? 'ALL CATEGORIES' : cat }}
              </option>
            </select>
            <svg class="shop-select-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <!-- Subcategories Dropdown -->
        <div class="shop-filter-group">
          <label for="subcategory-select" class="shop-filter-label">SUB-CATEGORY</label>
          <div class="shop-select-wrapper">
            <select
              id="subcategory-select"
              v-model="activeSubcategory"
              class="shop-custom-select"
            >
              <option v-for="sub in subcategoriesForActiveCat" :key="sub" :value="sub">
                {{ sub === 'ALL' ? (activeCategory === 'ALL' ? 'ALL SUB-CATEGORIES' : 'ALL ' + activeCategory) : sub }}
              </option>
            </select>
            <svg class="shop-select-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <!-- Sorting Dropdown -->
        <div class="shop-filter-group shop-filter-group--sort">
          <label for="sort-select" class="shop-filter-label">SORT BY</label>
          <div class="shop-select-wrapper">
            <select id="sort-select" v-model="sortBy" class="shop-custom-select">
              <option value="featured">FEATURED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
            </select>
            <svg class="shop-select-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <!-- Adult Section Discretion Notice -->
      <div v-if="activeCategory === 'ADULT SECTION'" class="adult-notice animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <span>100% DISCREET &amp; CONFIDENTIAL PACKAGING GUARANTEED. SHIPPED IN PLAIN UNBRANDED BOXES. 18+ ONLY.</span>
      </div>

      <!-- Active Filters Summary -->
      <div class="shop-active-filters" v-if="activeCategory !== 'ALL' || activeSubcategory !== 'ALL' || searchQuery">
        <span class="shop-active-tag" v-if="searchQuery">
          SEARCH: "{{ searchQuery }}"
          <button class="shop-active-tag__close" @click="clearSearch">&times;</button>
        </span>
        <span class="shop-active-tag" v-if="activeCategory !== 'ALL'">
          {{ activeCategory }}
          <span v-if="activeSubcategory !== 'ALL'"> &bull; {{ activeSubcategory }}</span>
          <button class="shop-active-tag__close" @click="resetCategoryFilters">&times;</button>
        </span>
        <button class="shop-clear-all" @click="resetFilters">Reset All</button>
      </div>

      <!-- Products Grid -->
      <div class="product-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <div class="product-card__image-container">
            <img :src="product.image" :alt="product.name" class="product-card__img" />
            
            <!-- Category / Subcategory Badge -->
            <span class="product-card__subcat-tag" v-if="product.subcategory || product.category">
              {{ product.subcategory || product.category }}
            </span>

            <!-- Size / Volume Badge -->
            <span class="product-card__size-badge" v-if="product.size">
              {{ product.size }}
            </span>

            <!-- Heart Wishlist Toggle -->
            <button
              class="product-card__wishlist"
              :class="{ 'product-card__wishlist--active': isWishlisted(product.id) }"
              @click="toggleWishlist(product)"
              aria-label="Add to Wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            <!-- Quick Add Button -->
            <div class="product-card__overlay">
              <button class="product-card__quick-add" @click="addToCart(product)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="quick-add-icon">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                QUICK ADD
              </button>
            </div>
          </div>
          
          <div class="product-card__details">
            <h3 class="product-card__title">{{ product.name }}</h3>
            <p class="product-card__desc-snippet" v-if="product.description">{{ product.description }}</p>
            <p class="product-card__price">{{ product.priceFormatted }}</p>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="shop-empty">
        <p v-if="searchQuery">No products found matching "<strong>{{ searchQuery }}</strong>"<span v-if="activeCategory !== 'ALL'"> in {{ activeCategory }}</span>.</p>
        <p v-else>No products found under this selection.</p>
        <div class="shop-empty__buttons">
          <button v-if="searchQuery && activeCategory !== 'ALL'" class="btn btn-secondary empty-action-btn" @click="activeCategory = 'ALL'; activeSubcategory = 'ALL'">
            SEARCH ACROSS ALL CATEGORIES
          </button>
          <button v-if="searchQuery" class="btn btn-secondary empty-action-btn" @click="clearSearch">
            CLEAR SEARCH
          </button>
          <button class="btn btn-primary empty-action-btn" @click="resetFilters">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>

    </main>

    <!-- Footer feature pillars -->
    <FooterFeatures />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

useHead({
  title: 'Shop All | TZORAH EMPORIUM',
  meta: [{ name: 'description', content: 'Shop authentic USA perfume oils, Middle Eastern scents, designer fragrances, pure essential & natural oils, candle supplies, and private intimates.' }]
})

const route = useRoute()
const router = useRouter()
const cartCount = useState('cartCount', () => 0)
const cartItems = useState('cartItems', () => [])
const toasts = useState('toasts', () => [])

const categories = [
  'ALL',
  'FRAGRANCE',
  'PERFUMES',
  'OILS',
  'UNSCENTED PRODUCTS',
  'CANDLE MAKING ACCESSORIES',
  'PET BODY CARE PRODUCTS',
  'ADULT SECTION'
]

const searchQuery = ref('')
const activeCategory = ref('ALL')
const activeSubcategory = ref('ALL')
const sortBy = ref('featured')

// Subcategories mapping
const subcategoriesForActiveCat = computed(() => {
  if (activeCategory.value === 'FRAGRANCE') {
    return [
      'ALL',
      'USA Oil Perfumes',
      'Middle Eastern Perfumes',
      'Authentic Designer Perfumes',
      'Niche Products',
      'Fragrance Oils',
      'Essential Oils',
      'Natural Oils',
      'Waxes & Bases',
      'Grooming & Washes'
    ]
  }
  if (activeCategory.value === 'PERFUMES') {
    return ['ALL', 'USA Oil Perfumes', 'Middle Eastern Perfumes', 'Authentic Designer Perfumes', 'Niche Products']
  }
  if (activeCategory.value === 'OILS') {
    return ['ALL', 'Fragrance Oils', 'Essential Oils', 'Natural Oils']
  }
  if (activeCategory.value === 'CANDLE MAKING ACCESSORIES') {
    return ['ALL', 'Waxes & Bases', 'Wicks & Hardware', 'Tools & Vessels']
  }
  if (activeCategory.value === 'PET BODY CARE PRODUCTS') {
    return ['ALL', 'Grooming & Washes', 'Balms & Salves']
  }
  if (activeCategory.value === 'UNSCENTED PRODUCTS') {
    return ['ALL', 'Unscented Body Care', 'Unscented Skincare']
  }
  if (activeCategory.value === 'ADULT SECTION') {
    return ['ALL', 'Adult Toys', 'Lingeries']
  }
  // When ALL is active, list all available subcategories across collections
  return [
    'ALL',
    'USA Oil Perfumes',
    'Middle Eastern Perfumes',
    'Authentic Designer Perfumes',
    'Niche Products',
    'Fragrance Oils',
    'Essential Oils',
    'Natural Oils',
    'Waxes & Bases',
    'Wicks & Hardware',
    'Tools & Vessels',
    'Grooming & Washes',
    'Balms & Salves',
    'Unscented Body Care',
    'Unscented Skincare',
    'Adult Toys',
    'Lingeries'
  ]
})

const onCategoryChange = () => {
  activeSubcategory.value = 'ALL'
}

const setCategory = (cat) => {
  activeCategory.value = cat
  activeSubcategory.value = 'ALL'
}

const onSearchInput = () => {
  const qVal = searchQuery.value.trim() ? searchQuery.value.trim() : undefined
  router.replace({
    query: {
      ...route.query,
      q: qVal
    }
  })
}

const clearSearch = () => {
  searchQuery.value = ''
  onSearchInput()
}

const resetCategoryFilters = () => {
  activeCategory.value = 'ALL'
  activeSubcategory.value = 'ALL'
  router.replace({
    query: {
      ...route.query,
      cat: undefined,
      sub: undefined
    }
  })
}

const resetFilters = () => {
  activeCategory.value = 'ALL'
  activeSubcategory.value = 'ALL'
  searchQuery.value = ''
  router.replace({ query: {} })
}

// Wishlist composable
const { isWishlisted, toggleWishlist, loadWishlist } = useWishlist()

const showToast = (message) => {
  toasts.value.push({
    id: Date.now(),
    message
  })
}

// Currency Symbol
const { storeSettings, fetchStoreSettings } = useStoreSettings()
const currencySymbol = computed(() => {
  const c = storeSettings.value?.currency || 'NGN'
  if (c === 'NGN') return '₦'
  if (c === 'USD') return '$'
  return '₦'
})

const mapProductData = (list) => {
  if (!Array.isArray(list)) return []
  return list.map(p => {
    const priceVal = parseFloat(p.price) || 0
    return {
      id: p.id,
      name: p.name,
      category: p.category || p.cat_name || 'PERFUMES',
      subcategory: p.subcategory || '',
      price: priceVal,
      priceFormatted: `${currencySymbol.value}${priceVal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      image: p.image || '/images/products/placeholder.png',
      description: p.description || '',
      size: p.size || ''
    }
  })
}

const products = ref([])

// Fetch live products from Nitro server
const { data: liveProductsData } = await useAsyncData('shopProductsData', () => $fetch('/api/v1/products'))

if (Array.isArray(liveProductsData.value)) {
  products.value = mapProductData(liveProductsData.value)
}

const fetchLiveProducts = async () => {
  try {
    await fetchStoreSettings()
    const data = await $fetch('/api/v1/products')
    if (Array.isArray(data)) {
      products.value = mapProductData(data)
    }
  } catch (err) {
    console.error('Failed to load products from API:', err)
  }
}

const syncWithRoute = (query) => {
  if (query.q || query.search) {
    searchQuery.value = String(query.q || query.search)
  } else {
    searchQuery.value = ''
  }

  if (query.cat) {
    const queryCat = String(query.cat).toUpperCase()
    const match = categories.find(c => c.toUpperCase() === queryCat)
    if (match) {
      activeCategory.value = match
    }
  }

  if (query.sub) {
    activeSubcategory.value = String(query.sub)
  }
}

onMounted(() => {
  loadWishlist()
  fetchLiveProducts()
  syncWithRoute(route.query)
})

// Watch route changes
watch(() => route.query, (newQ) => {
  syncWithRoute(newQ)
})

// Filtered and Sorted Products
const filteredProducts = computed(() => {
  let list = [...products.value]

  // Filter search query across name, description, category, and subcategory
  const q = searchQuery.value.toLowerCase().trim()
  if (q) {
    list = list.filter(p => {
      const name = (p.name || '').toLowerCase()
      const desc = (p.description || '').toLowerCase()
      const cat = (p.category || '').toLowerCase()
      const sub = (p.subcategory || '').toLowerCase()
      return name.includes(q) || desc.includes(q) || cat.includes(q) || sub.includes(q)
    })
  }

  // Filter category
  if (activeCategory.value !== 'ALL') {
    if (activeCategory.value.toUpperCase() === 'FRAGRANCE') {
      list = list.filter(p => p.category?.toUpperCase() !== 'ADULT SECTION')
    } else {
      list = list.filter(p => p.category?.toUpperCase() === activeCategory.value.toUpperCase())
    }
  }

  // Filter subcategory
  if (activeSubcategory.value !== 'ALL') {
    list = list.filter(p => p.subcategory?.toUpperCase() === activeSubcategory.value.toUpperCase())
  }

  // Sorting
  if (sortBy.value === 'price-low') {
    list.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-high') {
    list.sort((a, b) => b.price - a.price)
  }

  return list
})

const addToCart = (product) => {
  cartCount.value++
  const existingItem = cartItems.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cartItems.value.push({
      ...product,
      quantity: 1
    })
  }

  showToast(`Added "${product.name}" to your bag.`)
}
</script>

<style scoped>
.shop-page {
  background-color: var(--color-bg-light);
  min-height: 100vh;
}

/* ─── Screen Reader Only (Accessibility & SEO) ── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* ─── Hero Header ─────────────────────────────── */
.shop-hero {
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: var(--color-bg-dark);
}

.shop-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.shop-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(17, 17, 17, 0.45) 0%, rgba(17, 17, 17, 0.75) 100%);
}

.shop-hero__content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.shop-hero__headline {
  font-family: var(--font-sans);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  line-height: 1.3;
  width: 100%;
}

.shop-hero__highlight {
  color: var(--color-accent);
}

.img-logo-overlay {
  position: absolute;
  pointer-events: none;
  opacity: 0.35;
  z-index: 1;
  width: 60px;
}

.img-logo-overlay--br {
  right: 1.25rem;
  bottom: 0.6rem;
}

.img-logo-overlay img {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0) invert(1);
}

/* ─── Shop Main Content ───────────────────────── */
.shop-main {
  padding-top: 1.25rem;
  padding-bottom: 4rem;
}

/* Toolbar & Filters */
.shop-toolbar {
  display: flex;
  align-items: flex-end;
  flex-wrap: nowrap;
  gap: 1.25rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;
}

.shop-filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1 1 0;
  min-width: 0;
  max-width: 320px;
}

.shop-filter-group--search {
  flex: 1.4 1 0;
  max-width: 380px;
}

.shop-search-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
}

.shop-search-icon {
  position: absolute;
  left: 0.75rem;
  color: var(--color-accent);
  pointer-events: none;
  width: 14px;
  height: 14px;
}

.shop-search-input {
  width: 100%;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.65rem 2rem 0.65rem 2.2rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  color: var(--color-text-dark);
  outline: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.shop-search-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px rgba(201, 168, 106, 0.25);
}

.shop-search-input::placeholder {
  color: #999;
  font-size: 0.72rem;
}

.shop-search-clear-btn {
  position: absolute;
  right: 0.6rem;
  background: rgba(0, 0, 0, 0.06);
  border: none;
  color: #666;
  font-size: 1rem;
  line-height: 1;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.shop-search-clear-btn:hover {
  background: rgba(0, 0, 0, 0.15);
  color: #000;
}

.shop-empty__buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.empty-action-btn {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

.shop-filter-label {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shop-select-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
}

.shop-custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.65rem 2.2rem 0.65rem 0.85rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  color: var(--color-text-dark);
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.shop-custom-select:hover {
  border-color: rgba(0, 0, 0, 0.35);
}

.shop-custom-select:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 2px rgba(201, 168, 106, 0.25);
}

.shop-select-arrow {
  position: absolute;
  right: 0.85rem;
  pointer-events: none;
  color: var(--color-text-muted);
  transition: transform 0.2s ease;
}

.shop-custom-select:focus + .shop-select-arrow {
  color: var(--color-accent);
}

/* Adult Notice Banner */
.adult-notice {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #1a1618;
  color: #dfb2c4;
  padding: 0.85rem 1.25rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  border: 1px solid rgba(223, 178, 196, 0.3);
}

/* Active Tags */
.shop-active-filters {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.shop-active-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.05);
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.85rem;
  text-transform: uppercase;
}

.shop-active-tag__close {
  font-size: 1.1rem;
  line-height: 1;
  color: var(--color-text-muted);
  cursor: pointer;
}

.shop-clear-all {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  color: var(--color-accent);
  text-decoration: underline;
  cursor: pointer;
}

.shop-results-count {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 1.75rem;
}

.product-card {
  display: flex;
  flex-direction: column;
  transition: var(--transition-smooth);
}

.product-card__image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background-color: #1a1917;
}

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.product-card:hover .product-card__img {
  transform: scale(1.05);
}

.product-card__subcat-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(4px);
  color: var(--color-accent);
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.6rem;
  border-radius: 2px;
  text-transform: uppercase;
  z-index: 2;
  border: 1px solid rgba(218, 178, 126, 0.3);
}

.product-card__size-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--color-text-dark);
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.55rem;
  border-radius: 2px;
  z-index: 2;
}

.product-card__wishlist {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-text-dark);
  z-index: 3;
  transition: all 0.25s ease;
}

.product-card__wishlist:hover {
  background-color: #ffffff;
  color: #e63946;
  transform: scale(1.1);
}

.product-card__wishlist--active {
  background-color: #ffffff;
  color: #e63946;
}

.product-card__wishlist--active svg {
  fill: #e63946;
}

.product-card__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1.5rem;
  opacity: 0;
  transition: var(--transition-smooth);
}

.product-card:hover .product-card__overlay {
  opacity: 1;
}

.product-card__quick-add {
  background-color: var(--color-text-dark);
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-text-dark);
  cursor: pointer;
  transform: translateY(12px);
  transition: var(--transition-smooth);
}

.product-card:hover .product-card__quick-add {
  transform: translateY(0);
}

.product-card__quick-add:hover {
  background-color: #ffffff;
  color: var(--color-text-dark);
}

/* Details */
.product-card__details {
  padding-top: 1rem;
}

.product-card__title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  letter-spacing: 0.03em;
  margin-bottom: 0.35rem;
  color: var(--color-text-dark);
}

.product-card__desc-snippet {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card__price {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--color-accent);
  font-weight: 600;
}

/* Empty State */
.shop-empty {
  text-align: center;
  padding: 5rem 0;
}

.shop-empty p {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-muted);
}

/* Responsive */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.25rem;
  }
}

@media (max-width: 768px) {
  .shop-toolbar {
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 0.65rem 0.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
  .shop-filter-group {
    flex: 1 1 calc(33.333% - 0.5rem);
    min-width: 0;
    max-width: 100%;
    gap: 0.3rem;
  }
  .shop-filter-group--search {
    flex: 1 1 100%;
    max-width: 100%;
  }
  .shop-filter-label {
    font-size: 0.58rem;
    letter-spacing: 0.05em;
  }
  .shop-custom-select {
    font-size: 0.62rem;
    padding: 0.5rem 1.35rem 0.5rem 0.45rem;
    letter-spacing: 0.02em;
  }
  .shop-search-input {
    font-size: 0.72rem;
    padding: 0.55rem 1.8rem 0.55rem 2rem;
  }
  .shop-select-arrow {
    right: 0.35rem;
    width: 10px;
    height: 10px;
  }
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 1rem;
  }
  .shop-hero {
    height: 85px;
  }
  .shop-hero__headline {
    font-size: 0.88rem;
    letter-spacing: 0.08em;
  }
  .shop-main {
    padding-top: 1rem;
  }
  .product-card__overlay {
    opacity: 1;
    background-color: transparent;
  }
  .product-card__quick-add {
    transform: translateY(0);
    padding: 0.6rem 1rem;
    font-size: 0.65rem;
  }
}

@media (max-width: 480px) {
  .shop-hero__headline {
    font-size: 0.74rem;
    letter-spacing: 0.04em;
    line-height: 1.3;
  }
  .shop-toolbar {
    gap: 0.35rem;
  }
  .shop-filter-label {
    font-size: 0.54rem;
  }
  .shop-custom-select {
    font-size: 0.58rem;
    padding: 0.45rem 1.2rem 0.45rem 0.35rem;
  }
  .shop-select-arrow {
    right: 0.25rem;
    width: 9px;
    height: 9px;
  }
  .product-card__title {
    font-size: 0.95rem;
  }
}
</style>
