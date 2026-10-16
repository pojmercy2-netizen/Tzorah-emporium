<template>
  <header :class="['header', { 'header--scrolled': isScrolled, 'header--mobile-open': mobileMenuOpen }]" :style="{ top: headerTop }">
    <div class="container header__container">
      <!-- Hamburger (mobile left slot) -->
      <button class="header__mobile-toggle" aria-label="Toggle Menu" @click="toggleMobileMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Logo (desktop left / mobile centre) -->
      <NuxtLink to="/" class="header__logo-link">
        <img src="/logo.png" alt="TZORAH EMPORIUM Logo" class="header__logo" />
      </NuxtLink>

      <!-- Nav Links (Desktop) -->
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li>
            <NuxtLink to="/" class="header__nav-link hover-underline">HOME</NuxtLink>
          </li>

          <!-- Shop Link -->
          <li>
            <NuxtLink to="/shop" class="header__nav-link hover-underline">SHOP</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about" class="header__nav-link hover-underline">ABOUT US</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Icons / Actions -->
      <div class="header__actions">
        <!-- Search Trigger -->
        <button class="header__action-btn" aria-label="Search" @click="toggleSearch">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <!-- Account Profile → navigates to /profile or opens AuthModal -->
        <a href="/profile" class="header__action-btn header__action-btn--desktop" aria-label="Account" @click.prevent="handleProfileClick" style="position:relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span v-if="currentUser?.isAdmin" class="header__admin-dot" title="Admin"></span>
        </a>
        <!-- Cart Button → navigates to /cart page -->
        <NuxtLink to="/cart" class="header__action-btn header__cart-btn" aria-label="Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span class="header__cart-count" :class="{ 'header__cart-count--pop': animateCart }">{{ cartCount }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Navigation Slide-out -->
    <Transition name="fade">
      <div v-if="mobileMenuOpen" class="mobile-drawer__overlay" @click="closeMobileMenu"></div>
    </Transition>
    <div :class="['mobile-drawer', { 'mobile-drawer--open': mobileMenuOpen }]">
      <div class="mobile-drawer__content">
        <div class="mobile-drawer__header">
          <img src="/logo.png" alt="TZORAH EMPORIUM Logo" class="mobile-drawer__logo" />
          <button class="mobile-drawer__close" @click="closeMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav class="mobile-drawer__nav">
          <ul class="mobile-drawer__list">
            <li class="mobile-drawer__item mobile-drawer__item--visible">
              <NuxtLink to="/" class="mobile-drawer__link" @click="closeMobileMenu">HOME</NuxtLink>
            </li>

            <!-- Mobile Shop Link -->
            <li class="mobile-drawer__item mobile-drawer__item--visible">
              <NuxtLink to="/shop" class="mobile-drawer__link" @click="closeMobileMenu">SHOP</NuxtLink>
            </li>

            <li class="mobile-drawer__item mobile-drawer__item--visible">
              <NuxtLink to="/about" class="mobile-drawer__link" @click="closeMobileMenu">ABOUT US</NuxtLink>
            </li>

            <li class="mobile-drawer__item mobile-drawer__item--visible">
              <a href="/profile" class="mobile-drawer__link" @click.prevent="handleProfileClickMobile">ACCOUNT</a>
            </li>

            <li v-if="currentUser?.isAdmin" class="mobile-drawer__item mobile-drawer__item--visible">
              <NuxtLink to="/admin/dashboard" class="mobile-drawer__link mobile-drawer__link--admin" @click="closeMobileMenu">ADMIN CONSOLE</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Social Links -->
        <div class="mobile-drawer__socials">
          <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener" aria-label="WhatsApp" class="mobile-drawer__social">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@tzorahemporium" target="_blank" rel="noopener" aria-label="TikTok" class="mobile-drawer__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/tzorah_emporium?mdxt=MWh1ZWZoaXNraWw2Mw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="mobile-drawer__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://x.com/tzorahemporium" target="_blank" rel="noopener" aria-label="X (Twitter)" class="mobile-drawer__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733-16z"/>
            <path d="M4 20l6.768-6.768M20 4l-6.768 6.768"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Search Overlay -->
  <Transition name="fade-slide">
    <div v-if="searchOpen" class="search-overlay">
      <div class="container search-overlay__container">
        <div class="search-overlay__search-box">
          <input type="text" placeholder="Search USA oils, perfumes, essential oils, candle craft, adult section..." class="search-overlay__input" ref="searchInput" @keyup.enter="performSearch" />
          <button class="search-overlay__close" @click="toggleSearch">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '~/composables/useAuth'

const route = useRoute()
const { handleProfileClick, currentUser } = useAuth()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const searchOpen = ref(false)
const animateCart = ref(false)
const searchInput = ref(null)


// Close on route change
watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})

const handleProfileClickMobile = (e) => {
  closeMobileMenu()
  handleProfileClick(e)
}

const cartCount = useState('cartCount', () => 0)

// Listen to scroll to add background and shadow
const handleScroll = () => {
  if (window.scrollY > 20) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

// Click outside and keydown listeners
const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    searchOpen.value = false
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeyDown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeyDown)
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleSearch = () => {
  searchOpen.value = !searchOpen.value
  if (searchOpen.value) {
    setTimeout(() => {
      searchInput.value?.focus()
    }, 100)
  }
}

const performSearch = (e) => {
  showToast(`Searching for: "${e.target.value}"`)
  searchOpen.value = false
}

const toasts = useState('toasts', () => [])

const showToast = (message) => {
  toasts.value.push({
    id: Date.now(),
    message
  })
}

const { storeSettings } = useStoreSettings()
const headerTop = computed(() => storeSettings.value.announcementEnabled ? '36px' : '0px')

// Watch cart count to trigger micro-animation
watch(cartCount, () => {
  animateCart.value = true
  setTimeout(() => {
    animateCart.value = false
  }, 300)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 36px; /* Sit just below the announcement bar */
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-bg-light);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  z-index: 100;
  transition: var(--transition-smooth);
  overflow: visible;
}

.header--scrolled {
  height: 70px;
  background-color: var(--color-bg-header);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
  backdrop-filter: blur(10px);
  border-bottom-color: rgba(0, 0, 0, 0.05);
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo-link {
  display: flex;
  align-items: center;
}

.header__logo {
  height: 60px;
  width: auto;
  object-fit: contain;
  transition: var(--transition-smooth);
  position: relative;
}

.header--scrolled .header__logo {
  height: 50px;
}

/* Nav Styles */
.header__nav {
  display: block;
}

.header__nav-list {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;
}

.header__nav-link {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: var(--color-text-dark);
  padding: 0.5rem 0;
  transition: color var(--transition-fast);
}

/* Shop Nav Item & Dropdown Trigger */
.header__nav-item--shop {
  position: relative;
}

.header__shop-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.header__shop-btn:hover,
.header__shop-btn--active {
  color: var(--color-accent);
}

.header__shop-chevron {
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.header__shop-chevron--open {
  transform: rotate(180deg);
  stroke: var(--color-accent);
}

/* Actions Styles */
.header__actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Hide the account icon on mobile to keep the right slot clean */
@media (max-width: 992px) {
  .header__action-btn--desktop {
    display: none;
  }
}

.header__action-btn {
  color: var(--color-text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
  position: relative;
}

.header__action-btn:hover {
  color: var(--color-accent);
}

.header__cart-btn {
  position: relative;
}

.header__cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--color-text-dark);
  color: var(--color-text-light);
  font-size: 0.65rem;
  font-weight: 600;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.header__cart-count--pop {
  transform: scale(1.3);
  background-color: var(--color-accent);
}

.header__admin-dot {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 8px;
  height: 8px;
  background: #b89874;
  border-radius: 50%;
  border: 1.5px solid #fff;
}

/* Hamburger — hidden on desktop, shown on mobile */
.header__mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 14px;
  flex-shrink: 0;
}

.hamburger-line {
  width: 100%;
  height: 1.5px;
  background-color: var(--color-text-dark);
  transition: var(--transition-smooth);
}

/* Animate to X when menu is open */
.header--mobile-open .header__mobile-toggle .hamburger-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.header--mobile-open .header__mobile-toggle .hamburger-line:nth-child(2) {
  opacity: 0;
}

.header--mobile-open .header__mobile-toggle .hamburger-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ══════════════════════════════════════════════════════ */
/* DESKTOP SHOP MEGA MENU                                 */
/* ══════════════════════════════════════════════════════ */
.shop-mega-menu__overlay {
  position: fixed;
  top: calc(var(--header-height) + 36px);
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(3px);
  z-index: 95;
}

.shop-mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid rgba(184, 152, 116, 0.25);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  z-index: 98;
}

.shop-mega-menu__container {
  display: grid;
  grid-template-columns: 1.45fr 1px 1fr;
  gap: 2.5rem;
  padding: 2.2rem 1rem 1.8rem 1rem;
}

.shop-mega-divider {
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(184, 152, 116, 0.35), transparent);
}

.shop-mega-col {
  display: flex;
  flex-direction: column;
}

.shop-mega-col__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.4rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.shop-mega-col__title-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.shop-mega-badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
  background: rgba(184, 152, 116, 0.12);
  padding: 2px 7px;
  border-radius: 3px;
}

.shop-mega-badge--adult {
  color: #b82b2b;
  background: rgba(184, 43, 43, 0.1);
}

.shop-mega-title {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: #111;
  line-height: 1;
}

.shop-mega-all-link {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
  transition: all 0.2s ease;
}

.shop-mega-all-link:hover {
  color: #111;
  transform: translateX(3px);
}

.shop-mega-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.shop-mega-grid--adult {
  grid-template-columns: 1fr 1.2fr;
  align-items: start;
}

.shop-mega-group__title {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
  margin-bottom: 0.75rem;
}

.shop-mega-group__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.shop-mega-link {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  color: #444;
  line-height: 1.35;
  display: block;
  transition: all 0.2s ease;
}

.shop-mega-link:hover {
  color: var(--color-accent);
  transform: translateX(3px);
}

/* Discretion Guarantee Card */
.shop-mega-discreet-card {
  background: #181818;
  color: #ffffff;
  padding: 1.1rem 1.25rem;
  border-radius: 6px;
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
  border: 1px solid rgba(184, 152, 116, 0.3);
}

.shop-mega-discreet-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.shop-mega-discreet-text h5 {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  margin-bottom: 0.35rem;
}

.shop-mega-discreet-text p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.45;
}

/* Mega menu footer */
.shop-mega-menu__footer {
  background: #faf8f5;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.85rem 0;
}

.shop-mega-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shop-mega-footer-tag {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #888;
  text-transform: uppercase;
}

.shop-mega-footer-cta {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--color-accent-dark);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.shop-mega-footer-cta:hover {
  color: #111;
}

/* Mega menu transitions */
.mega-slide-enter-active,
.mega-slide-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mega-slide-enter-from,
.mega-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ══════════════════════════════════════════════════════ */
/* MOBILE DRAWER STYLES                                  */
/* ══════════════════════════════════════════════════════ */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: -100%;
  width: 320px;
  height: 100vh;
  background-color: var(--color-bg-light);
  z-index: 150;
  box-shadow: 10px 0 30px rgba(0,0,0,0.05);
  transition: left 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  display: flex;
  flex-direction: column;
}

.mobile-drawer--open {
  left: 0;
}

.mobile-drawer__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  z-index: 140;
}

.mobile-drawer__content {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.mobile-drawer__logo {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.mobile-drawer__close {
  color: var(--color-text-dark);
}

.mobile-drawer__nav {
  margin-top: 0.5rem;
  flex: 1;
}

.mobile-drawer__list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
}

.mobile-drawer__item {
  opacity: 0;
  transform: translateX(-30px);
  transition: none;
}

.mobile-drawer__item--visible {
  animation: flyIn 0.45s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes flyIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-drawer__link {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-dark);
  display: block;
  padding: 0.65rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  position: relative;
  transition: color 0.3s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.mobile-drawer__link:hover {
  color: var(--color-accent);
  transform: translateX(6px);
}

.mobile-drawer__link--admin {
  color: #b89874 !important;
  font-weight: 600;
}
.mobile-drawer__link--admin:hover {
  color: #d4aa82 !important;
}

/* Accordion in Mobile Drawer */
.mobile-drawer__accordion-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  text-align: left;
  cursor: pointer;
}

.mobile-drawer__chevron {
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  color: var(--color-text-dark);
}

.mobile-drawer__chevron--open {
  transform: rotate(180deg);
  color: var(--color-accent);
}

.mobile-drawer__sublist {
  padding: 0.6rem 0 0.8rem 0.75rem;
  margin: 0.35rem 0 0.75rem 0.25rem;
  border-left: 2px solid rgba(184, 152, 116, 0.35);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-drawer__group {
  display: flex;
  flex-direction: column;
}

.mobile-drawer__group-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 0;
  cursor: pointer;
}

.mobile-drawer__group-title {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
}

.mobile-drawer__group-title--adult {
  color: #b82b2b;
}

.mobile-drawer__chevron-sm {
  transition: transform 0.25s ease;
  color: #888;
}

.mobile-drawer__chevron-sm--open {
  transform: rotate(180deg);
  color: var(--color-accent);
}

.mobile-drawer__nested-list {
  list-style: none;
  padding: 0.25rem 0 0.4rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.mobile-drawer__sublink {
  font-family: var(--font-serif);
  font-size: 0.92rem;
  color: #444;
  padding: 0.25rem 0;
  display: block;
  transition: all 0.2s ease;
}

.mobile-drawer__sublink:hover {
  color: var(--color-accent);
  transform: translateX(4px);
}

.mobile-drawer__sublink--all {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
}

.mobile-drawer__all-products {
  padding-top: 0.4rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.08);
}

.mobile-drawer__all-products-link {
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
}

/* Social icons row */
.mobile-drawer__socials {
  display: flex;
  gap: 1.5rem;
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid rgba(0,0,0,0.07);
}

.mobile-drawer__social {
  color: var(--color-text-dark);
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.mobile-drawer__social:hover {
  opacity: 1;
  transform: translateY(-2px);
}

/* Search Overlay */
.search-overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--color-bg-light);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  padding: 1.5rem 0;
}

.search-overlay__container {
  display: flex;
  justify-content: center;
}

.search-overlay__search-box {
  width: 100%;
  max-width: 600px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-overlay__input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--color-text-dark);
  padding: 0.75rem 2.5rem 0.75rem 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--color-text-dark);
}

.search-overlay__input:focus {
  outline: none;
  border-bottom-color: var(--color-accent);
}

.search-overlay__close {
  position: absolute;
  right: 0.5rem;
  color: var(--color-text-dark);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* ─── Mobile layout (≤992px) ─────────────────────────────────────────── */
@media (max-width: 992px) {
  /* Hide desktop nav and mega-menu */
  .header__nav,
  .shop-mega-menu,
  .shop-mega-menu__overlay {
    display: none !important;
  }

  /* Switch container to 3-column grid */
  .header__container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .header__mobile-toggle {
    display: flex;
    justify-self: start;
  }

  .header__logo-link {
    justify-self: center;
  }

  .header__actions {
    justify-self: end;
    gap: 1rem;
  }

  .header__logo {
    height: 55px;
  }
}

@media (max-width: 576px) {
  .header__logo {
    height: 48px;
  }
}
</style>
