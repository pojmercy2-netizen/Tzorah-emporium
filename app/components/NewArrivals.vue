<template>
  <section id="shop" class="new-arrivals section-padding">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">TZORAH EMPORIUM ESSENTIALS</h2>
        <NuxtLink to="/shop" class="section-link hover-underline">
          VIEW ALL PRODUCTS
          <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </NuxtLink>
      </div>
      
      <!-- Product Grid (Always displays 8 items) -->
      <div class="product-grid">
        <div v-for="product in displayProducts" :key="product.id" class="product-card">
          <div class="product-card__image-container">
            <img :src="product.image" :alt="product.name" class="product-card__img" />
            
            <!-- Category / Subcategory Badge -->
            <span class="product-card__badge" v-if="product.subcategory || product.category">
              {{ product.subcategory || product.category }}
            </span>

            <!-- Heart Wishlist Toggle -->
            <button
              class="product-card__wishlist"
              :class="{ 'product-card__wishlist--active': isWishlisted(product.id) }"
              @click.stop="toggleWishlist(product)"
              aria-label="Add to Wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            <div class="product-card__overlay">
              <button class="product-card__quick-add" @click="addToCart(product)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="quick-add-icon">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                ADD TO CART
              </button>
            </div>
          </div>
          
          <div class="product-card__details">
            <h3 class="product-card__title">{{ product.name }}</h3>
            <p class="product-card__price">{{ product.priceFormatted }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { isWishlisted, toggleWishlist, loadWishlist } = useWishlist()

const cartCount = useState('cartCount', () => 0)
const cartItems = useState('cartItems', () => [])
const { storeSettings } = useStoreSettings()

const currencySymbol = computed(() => storeSettings.value.currency === 'NGN' ? '₦' : '$')

const liveProducts = ref([])

const mapProduct = (p) => ({
  id: p.id,
  name: p.name,
  price: parseFloat(p.price),
  priceFormatted: `${currencySymbol.value}${parseFloat(p.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
  image: p.image || '/images/products/perf_usa_1.png',
  category: p.category,
  subcategory: p.subcategory
})

// Async data fetch on server & client
const { data: fetchedProductsData } = await useAsyncData('homeNewArrivalsData', () => $fetch('/api/v1/products'))

if (fetchedProductsData.value && fetchedProductsData.value.length > 0) {
  liveProducts.value = fetchedProductsData.value.map(mapProduct)
}

const loadLiveProducts = async () => {
  try {
    const data = await $fetch('/api/v1/products')
    if (data && data.length > 0) {
      liveProducts.value = data.map(mapProduct)
    }
  } catch (err) {
    console.error('Failed to load home new arrivals:', err)
  }
}

onMounted(() => {
  loadWishlist()
  loadLiveProducts()
})

// Computed list displaying 40% of all shop products (rounded to nearest whole number)
const displayProducts = computed(() => {
  const count = Math.max(1, Math.round(liveProducts.value.length * 0.4))
  return liveProducts.value.slice(0, count)
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

  const toasts = useState('toasts', () => [])
  toasts.value.push({
    id: Date.now(),
    message: `Added "${product.name}" to your bag.`
  })
}
</script>

<style scoped>
.new-arrivals {
  background-color: var(--color-bg-light);
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.section-link:hover .arrow-icon {
  transform: translateX(6px);
}

/* Product Grid (4 items per row on desktop) */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
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
  background-color: #ebe7e0;
}

.product-card__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(18, 18, 18, 0.78);
  backdrop-filter: blur(4px);
  color: var(--color-accent);
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 0.35rem 0.65rem;
  border-radius: 2px;
  text-transform: uppercase;
  z-index: 2;
  border: 1px solid rgba(218, 178, 126, 0.3);
}

.product-card__wishlist {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-text-dark);
  z-index: 3;
  border: none;
  cursor: pointer;
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

.product-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.product-card:hover .product-card__img {
  transform: scale(1.06);
}

.product-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 2rem;
  opacity: 0;
  transition: var(--transition-smooth);
}

.product-card:hover .product-card__overlay {
  opacity: 1;
}

.product-card__quick-add {
  background-color: var(--color-text-dark);
  color: var(--color-text-light);
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  padding: 0.85rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(15px);
  transition: var(--transition-smooth);
  border: 1px solid var(--color-text-dark);
  cursor: pointer;
}

.product-card__quick-add:hover {
  background-color: var(--color-text-light);
  color: var(--color-text-dark);
}

.product-card:hover .product-card__quick-add {
  transform: translateY(0);
}

.quick-add-icon {
  margin-top: -2px;
}

/* Details */
.product-card__details {
  padding-top: 1.25rem;
  text-align: center;
}

.product-card__title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  letter-spacing: 0.05em;
  margin-bottom: 0.4rem;
  color: var(--color-text-dark);
  text-transform: uppercase;
}

.product-card__price {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: 500;
}

/* Responsive Grid */
@media (max-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.25rem;
  }
  
  .product-card__overlay {
    opacity: 1;
    background-color: transparent;
    pointer-events: auto;
  }
  
  .product-card__quick-add {
    transform: translateY(0);
    padding: 0.75rem 1.25rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 576px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 0.75rem;
  }

  .product-card__title {
    font-size: 0.85rem;
  }

  .product-card__price {
    font-size: 0.78rem;
  }

  .product-card__quick-add {
    font-size: 0.6rem;
    padding: 0.6rem 0.85rem;
  }
}
</style>
