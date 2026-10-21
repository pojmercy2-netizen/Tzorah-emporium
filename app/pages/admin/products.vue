<template>
  <div class="admin-products">
    <!-- Header -->
    <div class="products-header animate-fade-in">
      <div>
        <h1 class="page-title">Catalog Inventory</h1>
        <p class="page-subtitle">Manage store products, categories, subcategories, pricing, stock and images.</p>
      </div>
      <button class="btn-primary-admin" @click="openAddModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        ADD NEW PRODUCT
      </button>
    </div>

    <!-- Quick Stats Cards -->
    <div class="stats-row animate-fade-in">
      <div class="stat-card">
        <span class="stat-label">TOTAL PRODUCTS</span>
        <span class="stat-value">{{ adminProducts.length }}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">CATEGORIES</span>
        <span class="stat-value">{{ uniqueCategoriesCount }}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">IN STOCK</span>
        <span class="stat-value text-emerald">{{ inStockCount }}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">LOW / OUT OF STOCK</span>
        <span class="stat-value" :class="lowOrOutCount > 0 ? 'text-amber' : ''">{{ lowOrOutCount }}</span>
      </div>
    </div>

    <!-- Category Pill Tabs -->
    <div class="category-pills-bar animate-fade-in">
      <button
        class="category-pill"
        :class="{ active: selectedCategory === 'ALL' }"
        @click="selectCategoryTab('ALL')"
      >
        ALL ({{ adminProducts.length }})
      </button>
      <button
        v-for="cat in availableCategories"
        :key="cat"
        class="category-pill"
        :class="{ active: selectedCategory === cat }"
        @click="selectCategoryTab(cat)"
      >
        {{ cat }} ({{ getCategoryCount(cat) }})
      </button>
    </div>

    <!-- Filters Bar -->
    <div class="filters-bar animate-fade-in">
      <div class="search-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input v-model="searchQuery" type="text" placeholder="Search by name, category, or subcategory..." class="search-input" />
        <button v-if="searchQuery" class="search-clear-admin" @click="searchQuery = ''" aria-label="Clear search" type="button">&times;</button>
      </div>

      <div class="filter-dropdowns">
        <!-- Subcategory filter (reactive to selected category) -->
        <select v-if="subcategoriesForSelectedCategory.length > 0" v-model="selectedSubcategory" class="filter-select">
          <option value="ALL">ALL SUBCATEGORIES</option>
          <option v-for="sub in subcategoriesForSelectedCategory" :key="sub" :value="sub">{{ sub }}</option>
        </select>

        <select v-model="selectedStockFilter" class="filter-select">
          <option value="ALL">ALL STOCK STATUS</option>
          <option value="IN_STOCK">IN STOCK</option>
          <option value="LOW_STOCK">LOW STOCK (≤10)</option>
          <option value="OUT_OF_STOCK">OUT OF STOCK (0)</option>
        </select>

        <button v-if="hasActiveFilters" class="btn-reset-filters" @click="resetFilters" title="Reset Filters">
          Reset
        </button>
      </div>
    </div>

    <!-- Products Table -->
    <div class="admin-card animate-fade-in">
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading catalog inventory...</p>
      </div>

      <div v-else class="table-responsive">
        <table class="admin-table">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>CATEGORY</th>
              <th>SUBCATEGORY</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filteredProducts.length === 0">
              <td colspan="8" class="text-center-cell">
                <div class="empty-box">
                  <p v-if="searchQuery">
                    No products found matching "<strong>{{ searchQuery }}</strong>"<span v-if="selectedCategory !== 'ALL'"> in {{ selectedCategory }}</span>.
                  </p>
                  <p v-else>No products found matching the criteria.</p>

                  <div v-if="otherCategoryMatchesCount > 0" class="empty-suggestion">
                    <p class="text-amber">
                      Found {{ otherCategoryMatchesCount }} product(s) matching "{{ searchQuery }}" in other categories!
                    </p>
                    <button class="btn-secondary-admin" @click="selectCategoryTab('ALL')">
                      View In All Categories &rarr;
                    </button>
                  </div>

                  <div class="empty-actions-row">
                    <button v-if="hasActiveFilters" class="btn-secondary-admin" @click="resetFilters">
                      Clear Search &amp; Filters
                    </button>
                    <button class="btn-primary-admin empty-add-btn" @click="openAddModal">
                      Add Product Now
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr v-for="product in filteredProducts" :key="product.id" class="table-row">
              <td>
                <div class="product-thumb">
                  <img :src="product.image || '/images/products/perf_usa_1.png'" :alt="product.name" @error="onImageError" />
                </div>
              </td>
              <td>
                <div class="product-info-cell">
                  <span class="product-name">{{ product.name }}</span>
                  <div class="product-meta-sub">
                    <span v-if="product.size" class="meta-tag">{{ product.size }}</span>
                    <span v-if="product.colors && product.colors.length" class="color-dots-inline">
                      <span
                        v-for="color in product.colors.slice(0, 4)"
                        :key="color"
                        class="color-dot"
                        :style="{ backgroundColor: getColorHex(color) }"
                        :title="color"
                      ></span>
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <span :class="['badge-category', getCategoryBadgeClass(product.category)]">
                  {{ product.category }}
                </span>
              </td>
              <td>
                <span class="subcategory-text">{{ product.subcategory || '—' }}</span>
              </td>
              <td class="font-semibold text-white">
                ₦{{ product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
              </td>
              <td class="font-mono text-center-nums">{{ product.stock }} pcs</td>
              <td>
                <span :class="['badge-stock', getStockBadgeClass(product.stock)]">
                  {{ getStockStatusLabel(product.stock) }}
                </span>
              </td>
              <td style="min-width: 90px;">
                <div class="action-buttons">
                  <button class="btn-action btn-edit" @click="editProduct(product)" title="Edit Product">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button class="btn-action btn-delete" @click="confirmDelete(product)" title="Delete Product">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add/Edit Drawer Modal Overlay -->
    <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="drawer-modal animate-slide-in">
        <div class="drawer-header">
          <div>
            <h2 class="drawer-title">{{ isEditing ? 'Edit Product Details' : 'Add New Product to Shop' }}</h2>
            <p class="drawer-subtitle">
              {{ isEditing ? `Editing product #${form.id}` : 'Fill in the product details and category classification.' }}
            </p>
          </div>
          <button class="btn-close" @click="closeModal" aria-label="Close modal">&times;</button>
        </div>

        <form @submit.prevent="saveProduct" class="drawer-form">
          <!-- Product Name -->
          <div class="form-group">
            <label class="form-label">PRODUCT NAME *</label>
            <input
              v-model="form.name"
              type="text"
              class="form-input"
              required
              placeholder="e.g. Baccarat Rouge 540 Pure Oil (USA)"
            />
          </div>

          <!-- Category & Subcategory -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">CATEGORY *</label>
              <select v-model="form.category" class="form-input" required @change="onFormCategoryChange">
                <option v-for="cat in availableCategories" :key="cat" :value="cat">{{ cat }}</option>
                <option value="__CUSTOM__">+ New Custom Category...</option>
              </select>
              <input
                v-if="form.category === '__CUSTOM__'"
                v-model="form.customCategory"
                type="text"
                class="form-input form-input-sub"
                placeholder="Type custom category name..."
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">SUBCATEGORY</label>
              <select v-model="form.subcategory" class="form-input" @change="onFormSubcategoryChange">
                <option value="">None / General</option>
                <option v-for="sub in modalSubcategories" :key="sub" :value="sub">{{ sub }}</option>
                <option value="__CUSTOM__">+ Custom Subcategory...</option>
              </select>
              <input
                v-if="form.subcategory === '__CUSTOM__'"
                v-model="form.customSubcategory"
                type="text"
                class="form-input form-input-sub"
                placeholder="Type subcategory name..."
              />
            </div>
          </div>

          <!-- Price & Stock -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">PRICE (₦) *</label>
              <input
                v-model.number="form.price"
                type="number"
                step="0.01"
                min="0"
                class="form-input"
                required
                placeholder="38500"
              />
            </div>
            <div class="form-group">
              <label class="form-label">STOCK QTY (PCS) *</label>
              <input
                v-model.number="form.stock"
                type="number"
                min="0"
                class="form-input"
                required
                placeholder="25"
              />
            </div>
          </div>

          <!-- Size / Volume & Variants -->
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">SIZE / PACKAGING</label>
              <input
                v-model="form.size"
                type="text"
                class="form-input"
                placeholder="e.g. 50ml, 100ml, 1kg, 100 Pieces"
              />
            </div>
            <div class="form-group">
              <label class="form-label">COLOR / ACCENT</label>
              <input
                v-model="form.colorsInput"
                type="text"
                class="form-input"
                placeholder="e.g. black, gold, amber"
              />
            </div>
          </div>

          <!-- Product Image -->
          <div class="form-group">
            <div class="image-label-row">
              <label class="form-label">PRODUCT IMAGE URL *</label>
              <label class="btn-upload-file">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                Upload File
                <input type="file" accept="image/*" class="sr-only" @change="handleFileUpload" />
              </label>
            </div>
            <input
              v-model="form.image"
              type="text"
              class="form-input"
              required
              placeholder="/images/products/perf_usa_1.png or https://..."
            />

            <!-- Image Preview & Quick Presets -->
            <div class="image-picker-section">
              <div class="image-preview-box">
                <img :src="form.image || '/images/products/perf_usa_1.png'" alt="Preview" @error="onPreviewError" />
                <span class="preview-caption">Live Preview</span>
              </div>
              <div class="image-presets-box">
                <span class="presets-title">Quick Preset Images:</span>
                <div class="preset-thumbnails">
                  <button
                    v-for="preset in presetImages"
                    :key="preset.path"
                    type="button"
                    class="preset-thumb-btn"
                    :class="{ active: form.image === preset.path }"
                    @click="form.image = preset.path"
                    :title="preset.label"
                  >
                    <img :src="preset.path" :alt="preset.label" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="form-group">
            <label class="form-label">DESCRIPTION</label>
            <textarea
              v-model="form.description"
              rows="3"
              class="form-input form-textarea"
              placeholder="Detailed product scent profile, formulation, notes, or usage instructions..."
            ></textarea>
          </div>

          <!-- Error Alert if any -->
          <div v-if="formError" class="form-error-banner">
            {{ formError }}
          </div>

          <!-- Drawer Footer -->
          <div class="drawer-footer">
            <button type="button" class="btn-cancel" @click="closeModal" :disabled="saving">Cancel</button>
            <button type="submit" class="btn-save" :disabled="saving">
              <span v-if="saving" class="spinner-small"></span>
              {{ saving ? 'Saving Product...' : (isEditing ? 'Save Changes' : 'Create Product') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="deleteModalOpen" class="modal-overlay" @click.self="closeDeleteModal">
      <div class="confirm-modal animate-pop-in">
        <div class="confirm-icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e25c5c" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </div>
        <h3 class="confirm-title">Delete Product?</h3>
        <p class="confirm-desc">
          Are you sure you want to permanently delete <strong>{{ productToDelete?.name }}</strong>?
        </p>

        <div v-if="productToDelete" class="delete-product-card">
          <img :src="productToDelete.image || '/images/products/perf_usa_1.png'" :alt="productToDelete.name" />
          <div class="delete-product-info">
            <span class="delete-name">{{ productToDelete.name }}</span>
            <span class="delete-cat">{{ productToDelete.category }} • {{ productToDelete.subcategory || 'General' }}</span>
            <span class="delete-price">₦{{ productToDelete.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
          </div>
        </div>

        <p class="delete-warning-note">
          This product will be immediately removed from your store inventory and the customer shop page.
        </p>

        <div class="confirm-actions">
          <button class="btn-cancel" @click="closeDeleteModal" :disabled="deleting">Keep Product</button>
          <button class="btn-danger" @click="deleteProduct" :disabled="deleting">
            <span v-if="deleting" class="spinner-small"></span>
            {{ deleting ? 'Deleting...' : 'Confirm Delete' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="toastMessage" class="admin-toast animate-slide-up">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

useHead({
  title: 'Manage Products | TZORAH EMPORIUM Admin',
  meta: [{ name: 'description', content: 'Catalogue inventory and stock management console.' }]
})

// Store Standard Categories
const STORE_CATEGORIES = [
  'PERFUMES',
  'OILS',
  'UNSCENTED PRODUCTS',
  'CANDLE MAKING ACCESSORIES',
  'PET BODY CARE PRODUCTS',
  'ADULT SECTION'
]

// Category-to-Subcategories Map
const SUBCATEGORIES_MAP = {
  'PERFUMES': [
    'USA Oil Perfumes',
    'Middle Eastern Perfumes',
    'Authentic Designer Perfumes',
    'Niche Products'
  ],
  'OILS': [
    'Fragrance Oils',
    'Essential Oils',
    'Natural Oils'
  ],
  'UNSCENTED PRODUCTS': [
    'Unscented Body Care',
    'Unscented Skincare'
  ],
  'CANDLE MAKING ACCESSORIES': [
    'Waxes & Bases',
    'Wicks & Hardware',
    'Tools & Vessels'
  ],
  'PET BODY CARE PRODUCTS': [
    'Grooming & Washes',
    'Balms & Salves'
  ],
  'ADULT SECTION': [
    'Adult Toys',
    'Lingeries'
  ]
}

// Preset Quick Images
const presetImages = [
  { path: '/images/products/perf_usa_1.png', label: 'USA Perfume 1' },
  { path: '/images/products/perf_usa_2.png', label: 'USA Perfume 2' },
  { path: '/images/products/perf_me_1.png', label: 'Middle Eastern' },
  { path: '/images/products/oil_nat_1.png', label: 'Natural Oil 1' },
  { path: '/images/products/oil_nat_2.png', label: 'Natural Oil 2' },
  { path: '/images/products/oil_frag_1.png', label: 'Fragrance Oil' },
  { path: '/images/products/candle_1.png', label: 'Candle Soy Wax' },
  { path: '/images/products/candle_2.png', label: 'Candle Wicks' },
  { path: '/images/products/candle_3.png', label: 'Melting Pitcher' },
  { path: '/images/products/pet_1.png', label: 'Pet Coat Wash' },
  { path: '/images/products/pet_2.png', label: 'Pet Balm' },
  { path: '/images/products/unscented_1.png', label: 'Shea Butter' },
  { path: '/images/products/adult_toy_1.png', label: 'Adult Toy' },
  { path: '/images/products/adult_ling_1.png', label: 'Silk Lingerie' }
]

const adminToken = useCookie('adminToken')
const rawProducts = ref([])
const loading = ref(true)
const toastMessage = ref('')

const showToast = (msg) => {
  toastMessage.value = msg
  setTimeout(() => {
    toastMessage.value = ''
  }, 3500)
}

const fetchProducts = async () => {
  loading.value = true
  try {
    const data = await $fetch('/api/v1/products')
    rawProducts.value = data || []
  } catch (err) {
    console.error('Failed to fetch admin products:', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchProducts)

// Normalized Products List
const adminProducts = computed(() => {
  return rawProducts.value.map(p => {
    const cat = (p.cat_name || p.category || 'PERFUMES').toUpperCase()
    return {
      id: p.id,
      name: p.name,
      category: cat,
      subcategory: p.subcategory || '',
      price: parseFloat(p.price || 0),
      stock: p.stock !== null && p.stock !== undefined ? parseInt(p.stock, 10) : 0,
      image: p.image || '/images/products/perf_usa_1.png',
      description: p.description || '',
      size: p.size || '',
      colors: Array.isArray(p.color) ? p.color : (typeof p.color === 'string' && p.color.startsWith('[') ? JSON.parse(p.color) : ['black'])
    }
  })
})

// Categories dynamically derived from STORE_CATEGORIES + any existing products
const availableCategories = computed(() => {
  const cats = new Set(STORE_CATEGORIES)
  adminProducts.value.forEach(p => {
    if (p.category && !['T-SHIRTS', 'HOODIES', 'SWEATSHIRTS', 'POLOS', 'PANTS', 'JACKETS'].includes(p.category)) {
      cats.add(p.category)
    }
  })
  return Array.from(cats)
})

const uniqueCategoriesCount = computed(() => {
  return new Set(adminProducts.value.map(p => p.category)).size
})

const inStockCount = computed(() => {
  return adminProducts.value.filter(p => p.stock > 10).length
})

const lowOrOutCount = computed(() => {
  return adminProducts.value.filter(p => p.stock <= 10).length
})

const getCategoryCount = (cat) => {
  return adminProducts.value.filter(p => p.category === cat).length
}

// Search and filters
const searchQuery = ref('')
const selectedCategory = ref('ALL')
const selectedSubcategory = ref('ALL')
const selectedStockFilter = ref('ALL')

const selectCategoryTab = (cat) => {
  selectedCategory.value = cat
  selectedSubcategory.value = 'ALL'
}

// Subcategories list for the selected category filter
const subcategoriesForSelectedCategory = computed(() => {
  if (selectedCategory.value === 'ALL') {
    // Show all existing subcategories
    const subs = new Set()
    adminProducts.value.forEach(p => {
      if (p.subcategory) subs.add(p.subcategory)
    })
    return Array.from(subs)
  }
  const defined = SUBCATEGORIES_MAP[selectedCategory.value] || []
  const customFromProducts = adminProducts.value
    .filter(p => p.category === selectedCategory.value && p.subcategory)
    .map(p => p.subcategory)
  return Array.from(new Set([...defined, ...customFromProducts]))
})

const hasActiveFilters = computed(() => {
  return selectedCategory.value !== 'ALL' || selectedSubcategory.value !== 'ALL' || selectedStockFilter.value !== 'ALL' || searchQuery.value.trim() !== ''
})

const resetFilters = () => {
  selectedCategory.value = 'ALL'
  selectedSubcategory.value = 'ALL'
  selectedStockFilter.value = 'ALL'
  searchQuery.value = ''
}

const otherCategoryMatchesCount = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()
  if (!q || selectedCategory.value === 'ALL') return 0
  return adminProducts.value.filter(p => {
    const name = (p.name || '').toLowerCase()
    const cat = (p.category || '').toLowerCase()
    const sub = (p.subcategory || '').toLowerCase()
    return name.includes(q) || cat.includes(q) || sub.includes(q)
  }).length
})

// Computed Filtered List
const filteredProducts = computed(() => {
  return adminProducts.value.filter(p => {
    const q = searchQuery.value.toLowerCase().trim()
    const nameMatch = (p.name || '').toLowerCase().includes(q)
    const catMatch = (p.category || '').toLowerCase().includes(q)
    const subMatch = (p.subcategory || '').toLowerCase().includes(q)
    const matchesSearch = !q || nameMatch || catMatch || subMatch

    const matchesCategory = selectedCategory.value === 'ALL' || p.category === selectedCategory.value

    const matchesSubcategory = selectedSubcategory.value === 'ALL' ||
      (p.subcategory && p.subcategory.toUpperCase() === selectedSubcategory.value.toUpperCase())

    let matchesStock = true
    if (selectedStockFilter.value === 'OUT_OF_STOCK') matchesStock = p.stock === 0
    else if (selectedStockFilter.value === 'LOW_STOCK') matchesStock = p.stock > 0 && p.stock <= 10
    else if (selectedStockFilter.value === 'IN_STOCK') matchesStock = p.stock > 10

    return matchesSearch && matchesCategory && matchesSubcategory && matchesStock
  })
})

// Modals
const modalOpen = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const deleting = ref(false)
const deleteModalOpen = ref(false)
const productToDelete = ref(null)
const formError = ref('')

// Form State
const form = ref({
  id: '',
  name: '',
  category: 'PERFUMES',
  customCategory: '',
  subcategory: '',
  customSubcategory: '',
  price: 35000,
  stock: 25,
  size: '50ml',
  image: '/images/products/perf_usa_1.png',
  description: '',
  colorsInput: ''
})

// Dynamic Subcategories for modal based on currently selected form category
const modalSubcategories = computed(() => {
  const cat = form.value.category === '__CUSTOM__' ? form.value.customCategory.trim().toUpperCase() : form.value.category
  return SUBCATEGORIES_MAP[cat] || []
})

const onFormCategoryChange = () => {
  if (form.value.category !== '__CUSTOM__') {
    const subs = SUBCATEGORIES_MAP[form.value.category]
    form.value.subcategory = (subs && subs.length > 0) ? subs[0] : ''
  }
}

const onFormSubcategoryChange = () => {
  // handled reactively
}

// Add/Edit Actions
const openAddModal = () => {
  isEditing.value = false
  formError.value = ''
  const defaultCat = selectedCategory.value !== 'ALL' ? selectedCategory.value : 'PERFUMES'
  const defaultSubs = SUBCATEGORIES_MAP[defaultCat] || []

  form.value = {
    id: '',
    name: '',
    category: defaultCat,
    customCategory: '',
    subcategory: defaultSubs[0] || '',
    customSubcategory: '',
    price: 25000,
    stock: 20,
    size: defaultCat === 'PERFUMES' ? '50ml' : (defaultCat === 'OILS' ? '100ml' : (defaultCat === 'CANDLE MAKING ACCESSORIES' ? '1kg' : 'Standard')),
    image: '/images/products/perf_usa_1.png',
    description: '',
    colorsInput: ''
  }
  modalOpen.value = true
}

const editProduct = (product) => {
  isEditing.value = true
  formError.value = ''

  const isCustomCat = !availableCategories.value.includes(product.category)
  const catSubs = SUBCATEGORIES_MAP[product.category] || []
  const isCustomSub = product.subcategory && !catSubs.includes(product.subcategory)

  form.value = {
    id: product.id,
    name: product.name,
    category: isCustomCat ? '__CUSTOM__' : product.category,
    customCategory: isCustomCat ? product.category : '',
    subcategory: isCustomSub ? '__CUSTOM__' : (product.subcategory || ''),
    customSubcategory: isCustomSub ? product.subcategory : '',
    price: product.price,
    stock: product.stock,
    size: product.size || '',
    image: product.image || '/images/products/perf_usa_1.png',
    description: product.description || '',
    colorsInput: product.colors ? product.colors.join(', ') : ''
  }
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
  formError.value = ''
}

// Handle Image File Upload
const handleFileUpload = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  const formData = new FormData()
  formData.append('file', file)

  try {
    const res = await $fetch('/api/v1/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${adminToken.value}` },
      body: formData
    })
    if (res?.url) {
      form.value.image = res.url
      showToast('Image uploaded successfully!')
    }
  } catch (err) {
    console.error('Failed to upload image:', err)
    alert('Failed to upload image. Please try pasting a direct image URL instead.')
  }
}

// Save Product
const saveProduct = async () => {
  if (saving.value) return
  formError.value = ''

  const finalCategory = form.value.category === '__CUSTOM__'
    ? form.value.customCategory.trim().toUpperCase()
    : form.value.category

  if (!finalCategory) {
    formError.value = 'Please select or provide a category name.'
    return
  }

  const finalSubcategory = form.value.subcategory === '__CUSTOM__'
    ? form.value.customSubcategory.trim()
    : form.value.subcategory

  const finalColors = form.value.colorsInput
    ? form.value.colorsInput.split(',').map(c => c.trim().toLowerCase()).filter(Boolean)
    : ['black']

  const payload = {
    name: form.value.name.trim(),
    category: finalCategory,
    subcategory: finalSubcategory || null,
    price: Number(form.value.price),
    stock: Number(form.value.stock),
    size: form.value.size?.trim() || 'Standard',
    image: form.value.image?.trim() || '/images/products/perf_usa_1.png',
    description: form.value.description?.trim() || '',
    color: finalColors
  }

  saving.value = true

  try {
    if (isEditing.value && form.value.id) {
      await $fetch(`/api/v1/products/${form.value.id}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${adminToken.value}` },
        body: payload
      })
      showToast(`Product "${payload.name}" updated successfully!`)
    } else {
      await $fetch('/api/v1/products', {
        method: 'POST',
        headers: { Authorization: `Bearer ${adminToken.value}` },
        body: payload
      })
      showToast(`Product "${payload.name}" added to category ${finalCategory}!`)
    }
    await fetchProducts()
    closeModal()
  } catch (err) {
    console.error('Failed to save product:', err)
    formError.value = err?.data?.message || err?.message || 'Failed to save product. Ensure you have admin privileges.'
  } finally {
    saving.value = false
  }
}

// Delete Actions
const confirmDelete = (product) => {
  productToDelete.value = product
  deleteModalOpen.value = true
}

const closeDeleteModal = () => {
  deleteModalOpen.value = false
  productToDelete.value = null
}

const deleteProduct = async () => {
  if (!productToDelete.value || deleting.value) return
  deleting.value = true

  const deletedName = productToDelete.value.name

  try {
    await $fetch(`/api/v1/products/${productToDelete.value.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${adminToken.value}` }
    })
    await fetchProducts()
    showToast(`Product "${deletedName}" was deleted successfully.`)
    closeDeleteModal()
  } catch (err) {
    console.error('Failed to delete product:', err)
    alert(err?.data?.message || err?.message || 'Failed to delete product. Please try again.')
  } finally {
    deleting.value = false
  }
}

// Helpers
const onImageError = (e) => {
  e.target.src = '/images/products/perf_usa_1.png'
}

const onPreviewError = (e) => {
  e.target.src = '/images/products/perf_usa_1.png'
}

const getColorHex = (name) => {
  const colors = {
    'black': '#121212',
    'white': '#f8f9fa',
    'gold': '#d4af37',
    'amber': '#b89874',
    'cream': '#ebe7e0',
    'tan': '#d2b48c',
    'grey': '#8e8e93',
    'navy': '#1a233d',
    'beige': '#e1d5c2',
    'brown': '#5c4033',
    'olive': '#556b2f'
  }
  return colors[name?.toLowerCase()] || '#b89874'
}

const getStockStatusLabel = (stock) => {
  if (stock === 0) return 'OUT OF STOCK'
  if (stock <= 10) return 'LOW STOCK'
  return 'IN STOCK'
}

const getStockBadgeClass = (stock) => {
  if (stock === 0) return 'stock-out'
  if (stock <= 10) return 'stock-low'
  return 'stock-in'
}

const getCategoryBadgeClass = (cat) => {
  const c = String(cat).toUpperCase()
  if (c === 'PERFUMES') return 'cat-badge-perfume'
  if (c === 'OILS') return 'cat-badge-oil'
  if (c === 'ADULT SECTION') return 'cat-badge-adult'
  if (c === 'CANDLE MAKING ACCESSORIES') return 'cat-badge-candle'
  if (c === 'PET BODY CARE PRODUCTS') return 'cat-badge-pet'
  return 'cat-badge-default'
}
</script>

<style scoped>
.admin-products {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

/* Header */
.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.page-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
}

.btn-primary-admin {
  background-color: #b89874;
  color: #000000;
  border: none;
  padding: 0.65rem 1.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
  border-radius: 2px;
}

.btn-primary-admin:hover {
  background-color: #ffffff;
  transform: translateY(-1px);
}

/* Stats Row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.stat-card {
  background-color: #141414;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-radius: 2px;
}

.stat-label {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  font-family: monospace;
}

.text-emerald {
  color: #10b981;
}

.text-amber {
  color: #f59e0b;
}

/* Category Pill Tabs */
.category-pills-bar {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.35rem;
  scrollbar-width: thin;
}

.category-pill {
  background-color: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.6);
  padding: 0.45rem 0.9rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.category-pill:hover {
  border-color: rgba(184, 152, 116, 0.4);
  color: #ffffff;
}

.category-pill.active {
  background-color: #b89874;
  color: #000000;
  border-color: #b89874;
  font-weight: 700;
}

/* Filters Bar */
.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-wrapper {
  position: relative;
  flex: 1;
  min-width: 260px;
  max-width: 420px;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.3);
}

.search-input {
  width: 100%;
  background-color: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 0.55rem 1rem 0.55rem 2.5rem;
  font-size: 0.8rem;
  outline: none;
  border-radius: 2px;
  transition: all 0.25s ease;
}

.search-input:focus {
  border-color: rgba(184, 152, 116, 0.5);
  background-color: #161616;
}

.search-clear-admin {
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  line-height: 1;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.search-clear-admin:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

.filter-dropdowns {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.filter-select {
  background-color: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 0.55rem 1.25rem 0.55rem 0.75rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 2px;
}

.btn-reset-filters {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.5);
  padding: 0.55rem 0.85rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.btn-reset-filters:hover {
  color: #ffffff;
  border-color: #ffffff;
}

/* Table Area */
.admin-card {
  background-color: #111111;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: visible;
  width: 100%;
  box-sizing: border-box;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.5);
}

.spinner {
  width: 28px;
  height: 28px;
  border: 2px solid rgba(184, 152, 116, 0.2);
  border-top-color: #b89874;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.spinner-small {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-top-color: #000000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 0.35rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.table-responsive {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  box-sizing: border-box;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.8rem;
}

.admin-table th {
  background-color: #141414;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  white-space: nowrap;
}

.admin-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  vertical-align: middle;
}

.table-row:hover {
  background-color: rgba(255, 255, 255, 0.015);
}

.product-thumb {
  width: 44px;
  height: 48px;
  background-color: #181818;
  overflow: hidden;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.product-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info-cell {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-name {
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.product-meta-sub {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-tag {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.1rem 0.35rem;
  border-radius: 2px;
  font-family: monospace;
}

.color-dots-inline {
  display: flex;
  gap: 0.2rem;
}

.color-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Category Badges */
.badge-category {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.6rem;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}

.cat-badge-perfume {
  background-color: rgba(184, 152, 116, 0.12);
  color: #d4af37;
  border: 1px solid rgba(184, 152, 116, 0.25);
}

.cat-badge-oil {
  background-color: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.cat-badge-adult {
  background-color: rgba(236, 72, 153, 0.12);
  color: #f472b6;
  border: 1px solid rgba(236, 72, 153, 0.25);
}

.cat-badge-candle {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.cat-badge-pet {
  background-color: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.cat-badge-default {
  background-color: rgba(255, 255, 255, 0.06);
  color: #e5e5e5;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.subcategory-text {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: monospace;
}

/* Stock Badges */
.badge-stock {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  display: inline-block;
  white-space: nowrap;
}

.stock-in {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.stock-low {
  background-color: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.stock-out {
  background-color: rgba(226, 92, 92, 0.1);
  color: #e25c5c;
  border: 1px solid rgba(226, 92, 92, 0.25);
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn-action {
  width: 30px;
  height: 30px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-edit:hover {
  background-color: rgba(184, 152, 116, 0.15);
  color: #b89874;
  border-color: rgba(184, 152, 116, 0.4);
}

.btn-delete:hover {
  background-color: rgba(226, 92, 92, 0.15);
  color: #e25c5c;
  border-color: rgba(226, 92, 92, 0.4);
}

.text-center-cell {
  text-align: center;
  padding: 4rem 1rem !important;
}

.empty-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.4);
}

.empty-suggestion {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  background-color: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.25);
  padding: 0.85rem 1.5rem;
  border-radius: 4px;
}

.empty-actions-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-secondary-admin {
  background: transparent;
  color: #b89874;
  border: 1px solid #b89874;
  padding: 0.6rem 1.2rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary-admin:hover {
  background: rgba(184, 152, 116, 0.15);
  color: #fff;
}

.empty-add-btn {
  margin: 0;
}

/* Modals & Drawers */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  backdrop-filter: blur(2px);
}

.drawer-modal {
  width: 100%;
  max-width: 520px;
  height: 100vh;
  background-color: #111111;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.drawer-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.drawer-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.drawer-subtitle {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
}

.btn-close {
  background: transparent;
  border: none;
  font-size: 1.75rem;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s ease;
}

.btn-close:hover {
  color: #ffffff;
}

.drawer-form {
  flex: 1;
  padding: 1.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow-y: auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.5);
}

.form-input {
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  padding: 0.7rem 0.9rem;
  font-size: 0.82rem;
  outline: none;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.form-input-sub {
  margin-top: 0.35rem;
  border-color: rgba(184, 152, 116, 0.4);
}

.form-input:focus {
  border-color: rgba(184, 152, 116, 0.5);
  background-color: #1c1c1c;
}

.form-textarea {
  resize: vertical;
  min-height: 70px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.image-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-upload-file {
  font-size: 0.68rem;
  font-weight: 700;
  color: #b89874;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.btn-upload-file:hover {
  color: #ffffff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* Image Picker Section */
.image-picker-section {
  display: flex;
  gap: 1rem;
  background-color: #141414;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.75rem;
  border-radius: 2px;
  margin-top: 0.35rem;
}

.image-preview-box {
  width: 65px;
  height: 75px;
  background-color: #1c1c1c;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
}

.image-preview-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 0.55rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  text-align: center;
  padding: 1px 0;
}

.image-presets-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.presets-title {
  font-size: 0.62rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.preset-thumbnails {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.preset-thumb-btn {
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #181818;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
}

.preset-thumb-btn:hover {
  border-color: #b89874;
}

.preset-thumb-btn.active {
  border-color: #b89874;
  outline: 2px solid #b89874;
}

.preset-thumb-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-error-banner {
  background-color: rgba(226, 92, 92, 0.15);
  border: 1px solid rgba(226, 92, 92, 0.3);
  color: #e25c5c;
  padding: 0.65rem 0.85rem;
  font-size: 0.75rem;
  border-radius: 2px;
}

.drawer-footer {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.25rem 0 0;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-cancel {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  padding: 0.65rem 1.25rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.btn-cancel:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.btn-save {
  background-color: #b89874;
  color: #000000;
  border: none;
  padding: 0.65rem 1.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
}

.btn-save:hover:not(:disabled) {
  background-color: #ffffff;
}

.btn-save:disabled,
.btn-cancel:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Delete Confirm Modal Specifics */
.confirm-modal {
  background-color: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  width: 90%;
  max-width: 440px;
  padding: 2rem;
  margin: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.confirm-icon-box {
  width: 44px;
  height: 44px;
  background-color: rgba(226, 92, 92, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.confirm-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.confirm-desc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  margin-bottom: 1.25rem;
}

.delete-product-card {
  display: flex;
  gap: 0.85rem;
  background-color: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.75rem;
  border-radius: 2px;
  margin-bottom: 1rem;
}

.delete-product-card img {
  width: 48px;
  height: 52px;
  object-fit: cover;
  border-radius: 2px;
  background-color: #222;
}

.delete-product-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
}

.delete-name {
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
}

.delete-cat {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
}

.delete-price {
  font-size: 0.8rem;
  font-weight: 700;
  color: #b89874;
}

.delete-warning-note {
  font-size: 0.72rem;
  color: rgba(226, 92, 92, 0.8);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.btn-danger {
  background-color: #e25c5c;
  color: #ffffff;
  border: none;
  padding: 0.65rem 1.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
}

.btn-danger:hover:not(:disabled) {
  background-color: #ef4444;
}

.btn-danger:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Toast */
.admin-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #1e1e1e;
  border: 1px solid rgba(184, 152, 116, 0.4);
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 3px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.admin-toast svg {
  color: #10b981;
}

@media (max-width: 768px) {
  .products-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .filters-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .search-wrapper {
    max-width: none;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
