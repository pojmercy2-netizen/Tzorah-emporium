<template>
  <div class="coll-page">

    <!-- ═══════════════════════════════════════════ -->
    <!-- HERO HEADER                                 -->
    <!-- ═══════════════════════════════════════════ -->
    <header class="coll-hero">
      <img src="/images/brand_bg.png" alt="TZORAH EMPORIUM Curated Collections" class="coll-hero__bg" />
      <div class="coll-hero__overlay"></div>
      <div class="coll-hero__content">
        <span class="coll-hero__eyebrow">THE CURATED EDITS</span>
        <h1 class="coll-hero__title">Our Collections</h1>
        <p class="coll-hero__sub">Explore our dedicated sanctuaries: perfumes, rare oils, artisan candle supplies &amp; discreet intimates.</p>
      </div>
      <div class="img-logo-overlay img-logo-overlay--br">
        <img src="/logo.png" alt="TZORAH EMPORIUM" />
      </div>
    </header>

    <!-- ═══════════════════════════════════════════ -->
    <!-- PILLAR SWITCHER                             -->
    <!-- ═══════════════════════════════════════════ -->
    <section class="coll-gender-bar">
      <div class="container">
        <div class="gender-tabs">
          <button
            v-for="pillar in pillars"
            :key="pillar"
            :class="['gender-tab', { 'gender-tab--active': activePillar === pillar }]"
            @click="selectPillar(pillar)"
          >
            {{ pillar }}
          </button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════ -->
    <!-- CATEGORY FILTER BAR                         -->
    <!-- ═══════════════════════════════════════════ -->
    <section class="coll-category-bar">
      <div class="container">
        <div class="category-filters">
          <button
            v-for="cat in currentSubcategories"
            :key="cat"
            :class="['cat-btn', { 'cat-btn--active': activeCategory === cat }]"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="coll-count">
          {{ activeProducts.length }} ITEMS
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════ -->
    <!-- PRODUCT GRID                                -->
    <!-- ═══════════════════════════════════════════ -->
    <main class="container coll-main">
      <transition-group name="fade" tag="div" class="product-grid">
        <div v-for="product in activeProducts" :key="product.id" class="product-card">
          <div class="product-card__image-container">
            <img :src="product.image" :alt="product.name" class="product-card__img" />

            <!-- Category Tag -->
            <span class="product-card__tag">{{ product.subcategory || product.category }}</span>

            <!-- Size Pill -->
            <span class="product-card__size" v-if="product.size">{{ product.size }}</span>

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

            <!-- Quick Add Overlay -->
            <div class="product-card__overlay">
              <button class="product-card__quick-add" @click="addToCart(product)">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
            <p class="product-card__desc" v-if="product.description">{{ product.description }}</p>
            <p class="product-card__price">{{ product.priceFormatted }}</p>
          </div>
        </div>
      </transition-group>

      <!-- Empty State -->
      <div v-if="activeProducts.length === 0" class="coll-empty">
        <p>No items found in this section.</p>
      </div>
    </main>

    <FooterFeatures />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

useHead({
  title: 'Our Collections | TZORAH EMPORIUM',
  meta: [{ name: 'description', content: 'Explore curated collections of authentic perfumes, botanical oils, candlecraft, pet care, and private adult wellness from TZORAH EMPORIUM.' }]
})

const { isWishlisted, toggleWishlist, loadWishlist } = useWishlist()
onMounted(loadWishlist)

const cartCount = useState('cartCount', () => 0)
const cartItems = useState('cartItems', () => [])
const toasts = useState('toasts', () => [])

// ─── Pillars & Subcategories ─────────────────────
const pillars = [
  'PERFUMES & SCENTS',
  'THE OILS BAR',
  'CANDLECRAFT & CARE',
  'PRIVATE BOUDOIR (18+)'
]

const activePillar = ref('PERFUMES & SCENTS')
const activeCategory = ref('ALL')

const currentSubcategories = computed(() => {
  if (activePillar.value === 'PERFUMES & SCENTS') {
    return ['ALL', 'USA OIL PERFUMES', 'MIDDLE EASTERN', 'DESIGNER PERFUMES', 'NICHE PRODUCTS']
  }
  if (activePillar.value === 'THE OILS BAR') {
    return ['ALL', 'FRAGRANCE OILS', 'ESSENTIAL OILS', 'NATURAL OILS']
  }
  if (activePillar.value === 'CANDLECRAFT & CARE') {
    return ['ALL', 'CANDLE ACCESSORIES', 'UNSCENTED PRODUCTS', 'PET BODY CARE']
  }
  if (activePillar.value === 'PRIVATE BOUDOIR (18+)') {
    return ['ALL', 'ADULT TOYS', 'LINGERIES']
  }
  return ['ALL']
})

const selectPillar = (p) => {
  activePillar.value = p
  activeCategory.value = 'ALL'
}


const showToast = (message) => {
  toasts.value.push({ id: Date.now(), message })
}

// ─── Complete Collection Catalog ─────────────────
const collectionProducts = [
  // ─── PERFUMES & SCENTS
  {
    id: 'perf_usa_1',
    pillar: 'PERFUMES & SCENTS',
    subcat: 'USA OIL PERFUMES',
    name: 'Baccarat Rouge 540 Pure Oil (USA)',
    price: 38500,
    priceFormatted: '₦38,500.00',
    image: '/images/products/perf_usa_1.png',
    size: '50ml',
    description: '100% pure undiluted perfume oil imported from USA fragrance houses.'
  },
  {
    id: 'perf_usa_2',
    pillar: 'PERFUMES & SCENTS',
    subcat: 'USA OIL PERFUMES',
    name: 'Aventus Imperial Undiluted Oil (USA)',
    price: 32000,
    priceFormatted: '₦32,000.00',
    image: '/images/products/perf_usa_2.png',
    size: '30ml',
    description: 'Crisp bergamot, birch smoke, patchouli and oakmoss in concentrated oil.'
  },
  {
    id: 'perf_me_1',
    pillar: 'PERFUMES & SCENTS',
    subcat: 'MIDDLE EASTERN',
    name: 'Lattafa Khamrah Royale EDP',
    price: 48000,
    priceFormatted: '₦48,000.00',
    image: '/images/products/perf_me_1.png',
    size: '100ml',
    description: 'Warm cinnamon, praline, dates and smoky vanilla tonka bean.'
  },
  {
    id: 'perf_me_2',
    pillar: 'PERFUMES & SCENTS',
    subcat: 'MIDDLE EASTERN',
    name: 'Swiss Arabian Shaghaf Oud Gold Extrait',
    price: 55000,
    priceFormatted: '₦55,000.00',
    image: '/images/products/perf_me_2.png',
    size: '75ml',
    description: 'Decadent agarwood (oud), rich golden praline and warm vanilla.'
  },
  {
    id: 'perf_des_1',
    pillar: 'PERFUMES & SCENTS',
    subcat: 'DESIGNER PERFUMES',
    name: 'Bleu de Chanel Eau de Parfum (Original)',
    price: 185000,
    priceFormatted: '₦185,000.00',
    image: '/images/products/perf_des_1.png',
    size: '100ml',
    description: 'Aromatic-woody elegance. Guaranteed authentic original.'
  },
  {
    id: 'perf_des_2',
    pillar: 'PERFUMES & SCENTS',
    subcat: 'DESIGNER PERFUMES',
    name: 'Tom Ford Tobacco Vanille (Authentic)',
    price: 245000,
    priceFormatted: '₦245,000.00',
    image: '/images/products/perf_des_2.png',
    size: '50ml',
    description: 'Tobacco leaf, aromatic spices, cocoa, tonka bean and sweet sap.'
  },
  {
    id: 'perf_niche_1',
    pillar: 'PERFUMES & SCENTS',
    subcat: 'NICHE PRODUCTS',
    name: 'Maison Francis Kurkdjian Grand Soir',
    price: 280000,
    priceFormatted: '₦280,000.00',
    image: '/images/products/perf_niche_1.png',
    size: '70ml',
    description: 'Deep labdanum cistus, Brazilian tonka bean and rich amber vanilla.'
  },

  // ─── THE OILS BAR
  {
    id: 'oil_frag_1',
    pillar: 'THE OILS BAR',
    subcat: 'FRAGRANCE OILS',
    name: 'Golden Amber & Musk Fragrance Oil',
    price: 18500,
    priceFormatted: '₦18,500.00',
    image: '/images/products/oil_frag_1.png',
    size: '100ml',
    description: 'Cosmetic & candle grade fragrance oil for diffusers and body application.'
  },
  {
    id: 'oil_frag_2',
    pillar: 'THE OILS BAR',
    subcat: 'FRAGRANCE OILS',
    name: 'French Vanilla Blossom Fragrance Oil',
    price: 16000,
    priceFormatted: '₦16,000.00',
    image: '/images/products/oil_frag_2.png',
    size: '100ml',
    description: 'Sensuous warm vanilla bean for body oils and candle crafts.'
  },
  {
    id: 'oil_ess_1',
    pillar: 'THE OILS BAR',
    subcat: 'ESSENTIAL OILS',
    name: '100% Pure French Lavender Essential Oil',
    price: 12500,
    priceFormatted: '₦12,500.00',
    image: '/images/products/oil_ess_1.png',
    size: '30ml',
    description: 'Steam-distilled pure botanical essence from Provence. Calming aromatherapy.'
  },
  {
    id: 'oil_ess_2',
    pillar: 'THE OILS BAR',
    subcat: 'ESSENTIAL OILS',
    name: 'Australian Organic Tea Tree Essential Oil',
    price: 11000,
    priceFormatted: '₦11,000.00',
    image: '/images/products/oil_ess_2.png',
    size: '30ml',
    description: 'Therapeutic grade Melaleuca alternifolia. Clarifying and purifying.'
  },
  {
    id: 'oil_nat_1',
    pillar: 'THE OILS BAR',
    subcat: 'NATURAL OILS',
    name: 'Cold-Pressed Golden Jojoba Natural Oil',
    price: 15000,
    priceFormatted: '₦15,000.00',
    image: '/images/products/oil_nat_1.png',
    size: '200ml',
    description: 'Virgin unrefined cold-pressed carrier oil. Deeply hydrating.'
  },
  {
    id: 'oil_nat_2',
    pillar: 'THE OILS BAR',
    subcat: 'NATURAL OILS',
    name: 'Organic Moroccan Argan Natural Oil',
    price: 19500,
    priceFormatted: '₦19,500.00',
    image: '/images/products/oil_nat_2.png',
    size: '100ml',
    description: 'Rich in vitamin E and antioxidants. 100% cold-pressed purity.'
  },

  // ─── CANDLECRAFT & CARE
  {
    id: 'candle_1',
    pillar: 'CANDLECRAFT & CARE',
    subcat: 'CANDLE ACCESSORIES',
    name: 'Golden Soy Wax Flakes (1kg Bag)',
    price: 16500,
    priceFormatted: '₦16,500.00',
    image: '/images/products/candle_1.png',
    size: '1kg',
    description: '100% natural, biodegradable soy wax for container candles.'
  },
  {
    id: 'candle_2',
    pillar: 'CANDLECRAFT & CARE',
    subcat: 'CANDLE ACCESSORIES',
    name: 'Pre-Waxed Cotton Wicks & Sustainer Kit',
    price: 7500,
    priceFormatted: '₦7,500.00',
    image: '/images/products/candle_2.png',
    size: '100 Pcs',
    description: '100 natural lead-free cotton wicks with metal base sustainers.'
  },
  {
    id: 'unscented_1',
    pillar: 'CANDLECRAFT & CARE',
    subcat: 'UNSCENTED PRODUCTS',
    name: 'Raw Whipped Unscented Shea & Mango Butter',
    price: 14500,
    priceFormatted: '₦14,500.00',
    image: '/images/products/unscented_1.png',
    size: '250g',
    description: 'Silky whipped body butter crafted without fragrance. 100% hypoallergenic.'
  },
  {
    id: 'pet_1',
    pillar: 'CANDLECRAFT & CARE',
    subcat: 'PET BODY CARE',
    name: 'Calming Oatmeal & Chamomile Pet Coat Wash',
    price: 13500,
    priceFormatted: '₦13,500.00',
    image: '/images/products/pet_1.png',
    size: '350ml',
    description: 'pH balanced soothing shampoo for dogs and cats.'
  },
  {
    id: 'pet_2',
    pillar: 'CANDLECRAFT & CARE',
    subcat: 'PET BODY CARE',
    name: 'Organic Herbal Paw & Nose Protection Balm',
    price: 8500,
    priceFormatted: '₦8,500.00',
    image: '/images/products/pet_2.png',
    size: '60g',
    description: 'Lick-safe formula to soothe dry cracked paws and snouts.'
  },

  // ─── PRIVATE BOUDOIR (18+)
  {
    id: 'adult_toy_1',
    pillar: 'PRIVATE BOUDOIR (18+)',
    subcat: 'ADULT TOYS',
    name: 'Whisper Luxe Ergonomic Silicone Pulse Wand',
    price: 38000,
    priceFormatted: '₦38,000.00',
    image: '/images/products/adult_toy_1.png',
    size: 'Standard',
    description: 'Medical-grade velvety soft silicone intimate wellness massager.'
  },
  {
    id: 'adult_toy_2',
    pillar: 'PRIVATE BOUDOIR (18+)',
    subcat: 'ADULT TOYS',
    name: 'Rose Petal Dual-Action Precision Stimulator',
    price: 42000,
    priceFormatted: '₦42,000.00',
    image: '/images/products/adult_toy_2.png',
    size: 'Compact',
    description: 'Gentle air-pulse and magnetic vibration technology in rose design.'
  },
  {
    id: 'adult_ling_1',
    pillar: 'PRIVATE BOUDOIR (18+)',
    subcat: 'LINGERIES',
    name: 'Midnight Mulberry Silk & Lace Chemise',
    price: 32000,
    priceFormatted: '₦32,000.00',
    image: '/images/products/adult_ling_1.png',
    size: 'S / M / L / XL',
    description: '100% pure Mulberry silk slip adorned with French Chantilly lace.'
  },
  {
    id: 'adult_ling_2',
    pillar: 'PRIVATE BOUDOIR (18+)',
    subcat: 'LINGERIES',
    name: 'Ethereal Satin Robe with Chantilly Lace Trim',
    price: 36000,
    priceFormatted: '₦36,000.00',
    image: '/images/products/adult_ling_2.png',
    size: 'Free Size',
    description: 'Fluid satin dressing gown with eyelash lace cuffs and sash tie belt.'
  }
]

// ─── Live Products Sync ───────────────────────────
const { data: liveData } = await useAsyncData('collectionLiveProducts', () => $fetch('/api/v1/products'))

const mapPillar = (cat) => {
  const c = String(cat || '').toUpperCase()
  if (c === 'PERFUMES' || c === 'OILS') return 'PERFUMES & SCENTS'
  if (c === 'ADULT SECTION') return 'ADULT & PRIVATE'
  return 'LIFESTYLE & LIVING'
}

const allProducts = computed(() => {
  if (liveData.value && Array.isArray(liveData.value) && liveData.value.length > 0) {
    return liveData.value.map(p => ({
      id: p.id,
      pillar: mapPillar(p.category || p.cat_name),
      subcat: (p.subcategory || p.category || '').toUpperCase(),
      name: p.name,
      price: parseFloat(p.price || 0),
      priceFormatted: `₦${parseFloat(p.price || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      image: p.image || '/images/products/perf_usa_1.png',
      size: p.size || 'Standard',
      description: p.description || ''
    }))
  }
  return collectionProducts
})

// Filter products based on active pillar and category
const activeProducts = computed(() => {
  return allProducts.value.filter(p => {
    const matchPillar = p.pillar === activePillar.value
    if (!matchPillar) return false
    if (activeCategory.value === 'ALL') return true
    return p.subcat?.toUpperCase() === activeCategory.value.toUpperCase()
  })
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
.coll-page {
  background-color: var(--color-bg-light);
  min-height: 100vh;
}

/* ─── Hero Header ─────────────────────────────── */
.coll-hero {
  position: relative;
  width: 100%;
  height: 44vh;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: var(--color-bg-dark);
}

.coll-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.coll-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(17, 17, 17, 0.4) 0%, rgba(17, 17, 17, 0.85) 100%);
}

.coll-hero__content {
  position: relative;
  z-index: 2;
  color: var(--color-text-light);
  max-width: 650px;
  padding: 0 1.5rem;
}

.coll-hero__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  color: var(--color-accent);
  margin-bottom: 0.75rem;
  display: inline-block;
  font-weight: 600;
}

.coll-hero__title {
  font-size: 3.25rem;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.coll-hero__sub {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
}

/* ─── Pillar Bar ──────────────────────────────── */
.coll-gender-bar {
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.gender-tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  overflow-x: auto;
}

.gender-tab {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 1.25rem 2rem;
  color: var(--color-text-muted);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
}

.gender-tab:hover {
  color: var(--color-text-dark);
}

.gender-tab--active {
  color: var(--color-text-dark);
  border-bottom-color: var(--color-accent);
}

/* ─── Category Bar ────────────────────────────── */
.coll-category-bar {
  background-color: var(--color-bg-light);
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.coll-category-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cat-btn {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 0.45rem 1rem;
  background-color: transparent;
  color: var(--color-text-muted);
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cat-btn:hover {
  color: var(--color-text-dark);
  border-color: rgba(0, 0, 0, 0.25);
}

.cat-btn--active {
  background-color: var(--color-text-dark);
  color: #ffffff;
  border-color: var(--color-text-dark);
}

.coll-count {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
}

/* ─── Main Grid ───────────────────────────────── */
.coll-main {
  padding-top: 3rem;
  padding-bottom: 6rem;
}

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

.product-card__tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(18, 18, 18, 0.85);
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

.product-card__size {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--color-text-dark);
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  z-index: 2;
}

.product-card__wishlist {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
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
  padding: 0.7rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-text-dark);
  cursor: pointer;
  transform: translateY(10px);
  transition: var(--transition-smooth);
}

.product-card:hover .product-card__quick-add {
  transform: translateY(0);
}

.product-card__quick-add:hover {
  background-color: #ffffff;
  color: var(--color-text-dark);
}

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

.product-card__desc {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  margin-bottom: 0.4rem;
}

.product-card__price {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--color-accent);
  font-weight: 600;
}

.coll-empty {
  text-align: center;
  padding: 5rem 0;
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 1rem;
  }
  .coll-hero__title {
    font-size: 2.4rem;
  }
  .gender-tab {
    padding: 1rem 1.2rem;
    font-size: 0.72rem;
  }
}
</style>
