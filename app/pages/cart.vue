<template>
  <div class="cart-page">

    <!-- ═══════════════════════════════════════════ -->
    <!-- MINI HEADER (Back + Logo + Cart)            -->
    <!-- ═══════════════════════════════════════════ -->
    <div class="cart-page__mini-header">
      <button class="mini-header__back" @click="$router.back()" aria-label="Go back">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <NuxtLink to="/" class="mini-header__logo">
        <img src="/logo.png" alt="TZORAH EMPORIUM" />
        <span class="mini-header__brand">TZORAH EMPORIUM</span>
      </NuxtLink>
      <button class="mini-header__bag" aria-label="Bag">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span v-if="cartCount > 0" class="mini-header__badge">{{ cartCount }}</span>
      </button>
    </div>

    <div class="cart-page__body">

      <!-- ════════════════════════════════════════ -->
      <!-- CART TITLE + SHIPPING PROGRESS           -->
      <!-- ════════════════════════════════════════ -->
      <div class="cart-top">
        <h1 class="cart-title">YOUR CART ({{ cartCount }})</h1>
      </div>

      <!-- ════════════════════════════════════════ -->
      <!-- CART ITEMS                               -->
      <!-- ════════════════════════════════════════ -->
      <div v-if="cartItems.length > 0" class="cart-items">
        <div v-for="item in cartItems" :key="item.id + item.selectedColor" class="cart-item">
          <div class="cart-item__img-wrap">
            <img :src="item.image" :alt="item.name" class="cart-item__img" />
          </div>

          <div class="cart-item__details">
            <div class="cart-item__top-row">
              <div>
                <h3 class="cart-item__name">{{ item.name }}</h3>
                <p class="cart-item__base-price">{{ currencySymbol }}{{ item.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
              </div>
              <button class="cart-item__remove" @click="removeItem(item)" aria-label="Remove item">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                  <path d="M9 6V4h6v2"></path>
                </svg>
              </button>
            </div>

            <!-- Color (if product has color options) -->
            <div class="cart-item__attr" v-if="item.colors && item.colors.length > 0">
              <span class="cart-item__attr-label">Color:</span>
              <span class="cart-item__attr-val">{{ item.selectedColor ? capitalize(item.selectedColor) : capitalize(item.colors[0]) }}</span>
            </div>
            <div class="cart-item__swatches" v-if="item.colors && item.colors.length > 0">
              <span
                v-for="c in item.colors"
                :key="c"
                class="item-swatch"
                :class="{ 'item-swatch--active': (item.selectedColor || item.colors[0]) === c }"
                :style="{ backgroundColor: getColorHex(c) }"
                @click="item.selectedColor = c"
              ></span>
            </div>

            <!-- Quantity + Line Total -->
            <div class="cart-item__bottom-row">
              <div class="qty-control">
                <button class="qty-btn" @click="decreaseQty(item)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <span class="qty-num">{{ item.quantity }}</span>
                <button class="qty-btn" @click="increaseQty(item)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
              <p class="cart-item__line-total">{{ currencySymbol }}{{ (item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="cart-empty">
        <div class="cart-empty__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h2 class="cart-empty__title">Your bag is empty</h2>
        <p class="cart-empty__sub">Add something from the shop to get started.</p>
        <NuxtLink to="/shop" class="cart-empty__cta">SHOP NOW</NuxtLink>
      </div>

      <!-- ════════════════════════════════════════ -->
      <!-- ORDER SUMMARY                            -->
      <!-- ════════════════════════════════════════ -->
      <div class="order-summary" v-if="cartItems.length > 0">
        <h3 class="order-summary__title">ORDER SUMMARY</h3>
        <div class="order-summary__row">
          <span>Subtotal</span>
          <span>{{ currencySymbol }}{{ subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
        </div>
        <div class="order-summary__row">
          <span>Shipping</span>
          <span style="color: #c8973a; font-weight: 600; font-size: 0.8rem; font-style: italic;">Determined by dispatch rider</span>
        </div>
        <div class="order-summary__row order-summary__row--total">
          <span>Estimated Total</span>
          <span>{{ currencySymbol }}{{ estimatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</span>
        </div>
      </div>

      <!-- ════════════════════════════════════════ -->
      <!-- YOU MAY ALSO LIKE                        -->
      <!-- ════════════════════════════════════════ -->
      <div class="also-like">
        <div class="also-like__header">
          <h3 class="also-like__title">YOU MAY ALSO LIKE</h3>
          <NuxtLink to="/shop" class="also-like__view-all">VIEW ALL →</NuxtLink>
        </div>
        <div class="also-like__grid">
          <div v-for="rec in recommendations" :key="rec.id" class="rec-card">
            <div class="rec-card__img-wrap">
              <img :src="rec.image" :alt="rec.name" class="rec-card__img" />
              <button class="rec-card__add" @click="quickAdd(rec)" aria-label="Add to bag">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <p class="rec-card__name">{{ rec.name }}</p>
            <p class="rec-card__price">{{ rec.priceFormatted }}</p>
          </div>
        </div>
      </div>

      <!-- ════════════════════════════════════════ -->
      <!-- CTA BUTTONS                              -->
      <!-- ════════════════════════════════════════ -->
      <div class="cart-ctas" v-if="cartItems.length > 0">
        <button class="btn-checkout" @click="handleCheckout">PROCEED TO CHECKOUT →</button>
        <NuxtLink to="/shop" class="btn-continue">CONTINUE SHOPPING</NuxtLink>
      </div>

      <!-- ════════════════════════════════════════ -->
      <!-- AUTH GATE MODAL                          -->
      <!-- ════════════════════════════════════════ -->
      <Teleport to="body">
        <div v-if="showAuthGate" class="auth-gate-overlay" @click.self="showAuthGate = false">
          <div class="auth-gate-modal">
            <button class="auth-gate-close" @click="showAuthGate = false" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div class="auth-gate-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3 class="auth-gate-title">SIGN IN TO CONTINUE</h3>
            <p class="auth-gate-desc">Please sign in or create an account to proceed with your order.</p>
            <div class="auth-gate-actions">
              <button class="auth-gate-btn auth-gate-btn--primary" @click="goToLogin">SIGN IN</button>
              <button class="auth-gate-btn auth-gate-btn--secondary" @click="goToRegister">CREATE ACCOUNT</button>
            </div>
            <p class="auth-gate-note">Your bag will be saved while you sign in.</p>
          </div>
        </div>
      </Teleport>

      <!-- ════════════════════════════════════════ -->
      <!-- TRUST BADGES                             -->
      <!-- ════════════════════════════════════════ -->
      <div class="trust-badges">
        <div class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <div>
            <strong>SECURE CHECKOUT</strong>
            <span>Safe & encrypted payments</span>
          </div>
        </div>
        <div class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
          <div>
            <strong>EASY RETURNS</strong>
            <span>30-day return policy</span>
          </div>
        </div>
        <div class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.46-.46a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18z"></path>
          </svg>
          <div>
            <strong>24/7 SUPPORT</strong>
            <span>We're here to help</span>
          </div>
        </div>
        <div class="trust-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <div>
            <strong>PRIVACY PROTECTED</strong>
            <span>Your data is safe with us</span>
          </div>
        </div>
      </div>

    </div><!-- end .cart-page__body -->
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const { isLoggedIn, authModalOpen, authModalMode } = useAuth()
const showAuthGate = ref(false)

const handleCheckout = () => {
  if (isLoggedIn.value) {
    navigateTo('/checkout')
  } else {
    showAuthGate.value = true
  }
}

const goToLogin = () => {
  showAuthGate.value = false
  authModalMode.value = 'login'
  authModalOpen.value = true
}

const goToRegister = () => {
  showAuthGate.value = false
  authModalMode.value = 'signup'
  authModalOpen.value = true
}

useHead({
  title: 'Your Cart | TZORAH EMPORIUM',
  meta: [{ name: 'description', content: 'Review your bag and proceed to checkout.' }]
})

const cartCount = useState('cartCount', () => 0)
const cartItems = useState('cartItems', () => [])
const toasts   = useState('toasts', () => [])

const { storeSettings, fetchStoreSettings } = useStoreSettings()

onMounted(fetchStoreSettings)

const freeShippingThreshold = computed(() => Number(storeSettings.value.freeShippingThreshold || 150))
const standardShippingFee = computed(() => Number(storeSettings.value.standardShippingFee || 15))

const currencySymbol = computed(() => {
  const c = storeSettings.value?.currency || 'NGN'
  if (c === 'NGN') return '₦'
  if (c === 'EUR') return '€'
  if (c === 'GBP') return '£'
  return '₦'
})

// ─── Computed Financials ──────────────────────────
const subtotal = computed(() =>
  cartItems.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
)
const estimatedTotal = computed(() => subtotal.value)

// ─── Helpers ─────────────────────────────────────
const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : ''

const getColorHex = (name) => {
  const map = {
    black: '#121212', white: '#f8f9fa', cream: '#ebe7e0',
    tan: '#d2b48c', grey: '#8e8e93', navy: '#1a233d',
    beige: '#e1d5c2', brown: '#5c4033', olive: '#556b2f',
    camel: '#c19a6b', 'dusty-rose': '#cca4a4', charcoal: '#3a3a3a',
    burgundy: '#7d1f2a', teal: '#3d7a7a'
  }
  return map[(name || '').toLowerCase()] || '#cccccc'
}

// ─── Cart Actions ─────────────────────────────────
const removeItem = (item) => {
  cartCount.value -= item.quantity
  cartItems.value = cartItems.value.filter(i => !(i.id === item.id && i.selectedColor === item.selectedColor))
  showToast('Item removed from bag.')
}

const decreaseQty = (item) => {
  if (item.quantity <= 1) { removeItem(item); return }
  item.quantity--
  cartCount.value--
}

const increaseQty = (item) => {
  item.quantity++
  cartCount.value++
}

const showToast = (msg) => {
  toasts.value.push({ id: Date.now(), message: msg })
}

const quickAdd = (rec) => {
  cartCount.value++
  const existing = cartItems.value.find(i => i.id === rec.id)
  if (existing) { existing.quantity++; return }
  const selectedColor = (rec.colors && rec.colors.length > 0) ? rec.colors[0] : ''
  cartItems.value.push({ ...rec, quantity: 1, selectedColor })
  showToast(`"${rec.name}" added to bag.`)
}

// ─── Recommendations (First 4 products across all shop categories) ───
const defaultRecommendations = [
  { id: 'rec1', name: 'CLASSIC HOODIE', price: 89, image: '/images/product_hoodie.png', colors: ['cream', 'black'] },
  { id: 'rec2', name: 'OVERSIZE SWEATSHIRT', price: 79, image: '/images/product_sweatshirt.png', colors: ['grey', 'black'] },
  { id: 'rec3', name: 'KNIT POLO', price: 89, image: '/images/product_polo.png', colors: ['navy', 'black'] },
  { id: 'rec4', name: 'SIGNATURE TEE', price: 59, image: '/images/product_tee.png', colors: ['white', 'black'] }
]

const liveRecommendations = ref([])

const mapRecProduct = (p) => ({
  id: p.id,
  name: p.name,
  price: parseFloat(p.price),
  priceFormatted: `${currencySymbol.value}${parseFloat(p.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
  image: p.image || '/images/product_tee.png',
  colors: p.colors || ['black']
})

const { data: recProductsData } = await useAsyncData('cartRecommendationsPageData', () => $fetch('/api/v1/products'))

if (recProductsData.value && recProductsData.value.length > 0) {
  liveRecommendations.value = recProductsData.value.map(mapRecProduct)
}

const loadLiveRecommendations = async () => {
  try {
    const data = await $fetch('/api/v1/products')
    if (data && data.length > 0) {
      liveRecommendations.value = data.map(mapRecProduct)
    }
  } catch (err) {
    console.error('Failed to fetch recommendations:', err)
  }
}

onMounted(loadLiveRecommendations)

const recommendations = computed(() => {
  let list = liveRecommendations.value.length > 0 ? liveRecommendations.value : defaultRecommendations.map(mapRecProduct)
  if (list.length < 4) {
    const pad = defaultRecommendations.slice(list.length, 4).map(mapRecProduct)
    list = [...list, ...pad]
  }
  return list.slice(0, 4)
})
</script>

<style scoped>
/* ─── Page Base ─────────────────────────────────── */
.cart-page {
  background-color: #f5f1eb;
  min-height: 100vh;
  font-family: var(--font-sans);
}

/* ─── Mini Header ────────────────────────────────── */
.cart-page__mini-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: #f5f1eb;
  border-bottom: 1px solid rgba(0,0,0,0.07);
  position: sticky;
  top: 0;
  z-index: 50;
}
.mini-header__back,
.mini-header__bag {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-dark);
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.25rem;
}
.mini-header__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  gap: 0.15rem;
}
.mini-header__logo img {
  height: 32px;
  width: auto;
}
.mini-header__brand {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: var(--color-text-dark);
}
.mini-header__badge {
  position: absolute;
  top: -4px;
  right: -6px;
  background: var(--color-text-dark);
  color: #fff;
  font-size: 0.55rem;
  font-weight: 700;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Body ────────────────────────────────────── */
.cart-page__body {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* ─── Title & Shipping Progress ──────────────── */
.cart-title {
  font-family: var(--font-sans);
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
}
.shipping-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.shipping-progress__wrap { flex: 1; }
.shipping-progress__label {
  font-size: 0.8rem;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}
.shipping-progress__label strong { font-weight: 700; }
.shipping-progress__bar {
  height: 4px;
  background: #d9d0c5;
  border-radius: 99px;
  overflow: hidden;
}
.shipping-progress__fill {
  height: 100%;
  background: linear-gradient(90deg, #c8973a, #e4b65a);
  border-radius: 99px;
  transition: width 0.5s ease;
}
.shipping-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
  min-width: 150px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.shipping-badge svg { opacity: 0.7; flex-shrink: 0; }
.shipping-badge div { display: flex; flex-direction: column; }
.shipping-badge strong { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.05em; }
.shipping-badge span { font-size: 0.65rem; color: var(--color-text-muted); }

/* ─── Cart Item Card ─────────────────────────── */
.cart-items { display: flex; flex-direction: column; gap: 1rem; }
.cart-item {
  background: #fff;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.cart-item__img-wrap {
  flex-shrink: 0;
  width: 110px;
  height: 130px;
  border-radius: 8px;
  overflow: hidden;
  background: #ebe7e0;
}
.cart-item__img { width: 100%; height: 100%; object-fit: cover; }
.cart-item__details { flex: 1; display: flex; flex-direction: column; gap: 0.55rem; }
.cart-item__top-row { display: flex; align-items: flex-start; justify-content: space-between; }
.cart-item__name {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--color-text-dark);
  text-transform: uppercase;
  margin-bottom: 0.15rem;
}
.cart-item__base-price { font-size: 0.82rem; color: var(--color-text-muted); }
.cart-item__remove {
  background: none;
  border: 1px solid #e0dbd3;
  border-radius: 6px;
  padding: 0.35rem;
  cursor: pointer;
  color: var(--color-text-muted);
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.cart-item__remove:hover { border-color: #c0392b; color: #c0392b; }

/* Color & Size attrs */
.cart-item__attr { font-size: 0.75rem; color: var(--color-text-dark); }
.cart-item__attr-label { color: var(--color-text-muted); margin-right: 0.35rem; }
.cart-item__attr-val { font-weight: 600; }
.cart-item__swatches { display: flex; gap: 0.35rem; }
.item-swatch {
  width: 18px; height: 18px; border-radius: 50%;
  border: 1.5px solid rgba(0,0,0,0.1);
  cursor: pointer; position: relative;
}
.item-swatch--active::after {
  content: '';
  position: absolute;
  inset: -3px;
  border: 1.5px solid var(--color-text-dark);
  border-radius: 50%;
}
.cart-item__sizes { display: flex; gap: 0.4rem; flex-wrap: wrap; }
.size-btn {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.3rem 0.65rem;
  border: 1.5px solid #d8d3cc;
  background: #fff;
  color: var(--color-text-dark);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-family: var(--font-sans);
}
.size-btn:hover { border-color: var(--color-text-dark); }
.size-btn--active { background: var(--color-text-dark); color: #fff; border-color: var(--color-text-dark); }

/* Quantity + Line Total */
.cart-item__bottom-row { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
.qty-control {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1.5px solid #d8d3cc;
  border-radius: 6px;
  overflow: hidden;
}
.qty-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-dark);
  transition: background 0.2s ease;
}
.qty-btn:hover { background: #f0ede8; }
.qty-num {
  font-size: 0.88rem;
  font-weight: 700;
  min-width: 32px;
  text-align: center;
  color: var(--color-text-dark);
}
.cart-item__line-total { font-size: 1rem; font-weight: 800; color: var(--color-text-dark); }

/* ─── Empty State ─────────────────────────────── */
.cart-empty {
  text-align: center;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.cart-empty__icon { opacity: 0.3; }
.cart-empty__title { font-size: 1.3rem; font-weight: 700; color: var(--color-text-dark); }
.cart-empty__sub { font-size: 0.88rem; color: var(--color-text-muted); }
.cart-empty__cta {
  margin-top: 1rem;
  background: var(--color-text-dark);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 0.9rem 2rem;
  text-decoration: none;
  display: inline-block;
}

/* ─── Order Summary ───────────────────────────── */
.order-summary {
  background: #fff;
  border-radius: 12px;
  padding: 1.25rem 1.25rem 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}
.order-summary__title {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #ece8e2;
}
.order-summary__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  padding: 0.45rem 0;
}
.order-summary__row:not(:last-child) { border-bottom: 1px solid #f0ede8; }
.order-summary__row--total {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--color-text-dark);
  margin-top: 0.25rem;
  padding-top: 0.75rem;
  border-top: 1.5px solid #d8d3cc !important;
  border-bottom: none !important;
}
.tax-label { display: flex; align-items: center; gap: 0.4rem; }
.tax-info { background: none; border: none; cursor: pointer; font-size: 0.85rem; color: var(--color-text-muted); }
.free-text { color: #2d8a4e; font-weight: 700; }

/* ─── Recommendations ─────────────────────────── */
.also-like { }
.also-like__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.also-like__title { font-size: 0.78rem; font-weight: 800; letter-spacing: 0.1em; color: var(--color-text-dark); }
.also-like__view-all {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-text-dark);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.also-like__view-all:hover { text-decoration: underline; }
.also-like__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}
.rec-card { }
.rec-card__img-wrap {
  position: relative;
  aspect-ratio: 3/4;
  border-radius: 8px;
  overflow: hidden;
  background: #ebe7e0;
  margin-bottom: 0.5rem;
}
.rec-card__img { width: 100%; height: 100%; object-fit: cover; }
.rec-card__add {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 28px;
  height: 28px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}
.rec-card__add:hover { background: var(--color-text-dark); color: #fff; }
.rec-card__name { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; color: var(--color-text-dark); text-transform: uppercase; margin-bottom: 0.2rem; line-height: 1.3; }
.rec-card__price { font-size: 0.72rem; color: var(--color-text-muted); }

/* ─── CTA Buttons ─────────────────────────────── */
.cart-ctas { display: flex; flex-direction: column; gap: 0.75rem; }
.btn-checkout {
  width: 100%;
  background: var(--color-text-dark);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 1.1rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: opacity 0.2s ease;
}
.btn-checkout:hover { opacity: 0.88; }
.btn-continue {
  display: block;
  width: 100%;
  background: transparent;
  color: var(--color-text-dark);
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 1.05rem 1rem;
  border: 1.5px solid var(--color-text-dark);
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
}
.btn-continue:hover { background: var(--color-text-dark); color: #fff; }

/* ─── Trust Badges ────────────────────────────── */
.trust-badges {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.trust-badge svg { flex-shrink: 0; opacity: 0.65; }
.trust-badge div { display: flex; flex-direction: column; }
.trust-badge strong { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.05em; color: var(--color-text-dark); text-transform: uppercase; }
.trust-badge span { font-size: 0.62rem; color: var(--color-text-muted); margin-top: 0.1rem; }

/* ─── Responsive ──────────────────────────────── */
@media (max-width: 480px) {
  .shipping-badge { display: none; }
  .also-like__grid { grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
  .trust-badges { grid-template-columns: repeat(2, 1fr); }
}

/* ─── Auth Gate Modal ─────────────────────────── */
.auth-gate-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

.auth-gate-modal {
  position: relative;
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  padding: 3rem 2.5rem 2.5rem;
  max-width: 420px;
  width: 100%;
  text-align: center;
  animation: slideUp 0.3s ease;
}

.auth-gate-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
}
.auth-gate-close:hover { color: #fff; }

.auth-gate-icon {
  color: var(--color-accent, #c9a96e);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.auth-gate-title {
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #fff;
  margin-bottom: 0.85rem;
}

.auth-gate-desc {
  font-family: var(--font-serif, serif);
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(255,255,255,0.55);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.auth-gate-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.auth-gate-btn {
  width: 100%;
  padding: 0.9rem 1.5rem;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.15s ease;
}
.auth-gate-btn:hover { opacity: 0.88; transform: translateY(-1px); }

.auth-gate-btn--primary {
  background: var(--color-accent, #c9a96e);
  color: #111;
}

.auth-gate-btn--secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.75);
}
.auth-gate-btn--secondary:hover { border-color: rgba(255,255,255,0.5); }

.auth-gate-note {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  color: rgba(255,255,255,0.3);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
