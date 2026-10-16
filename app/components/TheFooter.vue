<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__grid">
        <!-- Brand Info Column -->
        <div class="footer__col footer__col--brand">
          <img src="/logo.png" alt="TZORAH EMPORIUM Logo" class="footer__logo" />
          <p class="footer__bio">
            Curators of pure USA perfume oils, Middle Eastern scents, botanical oils, candlecraft, and discreet adult luxuries.
          </p>
          <div class="footer__socials">
            <a href="https://www.instagram.com/tzorah_emporium?mdxt=MWh1ZWZoaXNraWw2Mw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="footer__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Facebook" class="footer__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="TikTok" class="footer__social-link">
              <!-- Custom TikTok SVG Path -->
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
            <a href="#" aria-label="X (Twitter)" class="footer__social-link">
              <!-- Custom X SVG Path -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M20 4l-6.768 6.768" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
          </div>
        </div>

        <!-- Shop Links Column -->
        <div class="footer__col">
          <h4 class="footer__col-title">DEPARTMENTS</h4>
          <ul class="footer__links">
            <li><NuxtLink to="/shop" class="footer__link hover-underline">All Products</NuxtLink></li>
            <li><NuxtLink to="/shop?cat=PERFUMES" class="footer__link hover-underline">Perfumes & Scents</NuxtLink></li>
            <li><NuxtLink to="/shop?cat=OILS" class="footer__link hover-underline">The Oils Bar</NuxtLink></li>
            <li><NuxtLink to="/shop?cat=CANDLE%20MAKING%20ACCESSORIES" class="footer__link hover-underline">Candle Craft Supplies</NuxtLink></li>
            <li><NuxtLink to="/shop?cat=UNSCENTED%20PRODUCTS" class="footer__link hover-underline">Unscented Products</NuxtLink></li>
            <li><NuxtLink to="/shop?cat=PET%20BODY%20CARE%20PRODUCTS" class="footer__link hover-underline">Pet Body Care</NuxtLink></li>
            <li><NuxtLink to="/shop?cat=ADULT%20SECTION" class="footer__link hover-underline">Adult Boudoir (18+)</NuxtLink></li>
          </ul>
        </div>

        <!-- Company Links Column -->
        <div class="footer__col">
          <h4 class="footer__col-title">COMPANY</h4>
          <ul class="footer__links">
            <li><NuxtLink to="/about" class="footer__link hover-underline">About Us</NuxtLink></li>
            <li><NuxtLink to="/journal" class="footer__link hover-underline">Journal</NuxtLink></li>
            <li><a href="#" class="footer__link hover-underline">Our Stores</a></li>
            <li><a href="#" class="footer__link hover-underline">Careers</a></li>
          </ul>
        </div>

        <!-- Customer Care Links Column -->
        <div class="footer__col">
          <h4 class="footer__col-title">CUSTOMER CARE</h4>
          <ul class="footer__links">
            <li><NuxtLink to="/delivery" class="footer__link hover-underline">Shipping &amp; Delivery</NuxtLink></li>
            <li><a href="#" class="footer__link hover-underline">Returns & Exchanges</a></li>
            <li><a href="#" class="footer__link hover-underline">Size Guide</a></li>
            <li><a href="#" class="footer__link hover-underline">FAQs</a></li>
            <li><a href="#" class="footer__link hover-underline">Contact Us</a></li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div class="footer__col footer__col--newsletter">
          <h4 class="footer__col-title">NEWSLETTER</h4>
          <p class="footer__newsletter-text">
            Join for exclusive offers and early access.
          </p>
          <form class="footer__form" @submit.prevent="handleSubscribe">
            <input 
              v-model="email" 
              type="email" 
              placeholder="Enter your email" 
              class="footer__input" 
              required
            />
            <button type="submit" class="footer__submit-btn" aria-label="Subscribe">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ new Date().getFullYear() }} {{ storeSettings.storeName || 'TZORAH EMPORIUM' }}. All rights reserved.
        </p>
        <p v-if="storeSettings.supportEmail" class="footer__contact-line">
          <a :href="'mailto:' + storeSettings.supportEmail" class="footer__contact-email">{{ storeSettings.supportEmail }}</a>
          <span v-if="storeSettings.telephone"> &bull; {{ storeSettings.telephone }}</span>
        </p>
        
        <!-- Payment Badges (Bank Transfer) -->
        <div class="footer__payments">
          <div class="payment-badge payment-badge--bank" title="Direct Bank Transfer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3l9-7z"></path>
            </svg>
            <span>DIRECT BANK TRANSFER</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { storeSettings, fetchStoreSettings } = useStoreSettings()

// Settings already loaded by layout; refresh on client mount
onMounted(fetchStoreSettings)

const email = ref('')

const handleSubscribe = () => {
  const toasts = useState('toasts', () => [])
  toasts.value.push({
    id: Date.now(),
    message: `Thank you! "${email.value}" has been subscribed to our newsletter.`
  })
  email.value = ''
}
</script>

<style scoped>
.footer {
  background-color: var(--color-bg-dark);
  color: var(--color-text-light);
  padding: var(--spacing-xl) 0 var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer__container {
  display: flex;
  flex-direction: column;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr) 1.5fr;
  gap: 3rem;
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__col {
  display: flex;
  flex-direction: column;
}

.footer__col--brand {
  gap: 1.5rem;
}

.footer__logo {
  height: 55px;
  width: auto;
  align-self: flex-start;
  /* Invert black logo image to silver/white */
  filter: brightness(0) invert(1);
}

.footer__bio {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-text-muted-light);
  line-height: 1.5;
  max-width: 250px;
}

.footer__socials {
  display: flex;
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.footer__social-link {
  color: var(--color-text-muted-light);
  transition: var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__social-link:hover {
  color: var(--color-accent);
  transform: translateY(-2px);
}

/* Links Columns */
.footer__col-title {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin-bottom: 1.75rem;
  color: var(--color-text-light);
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__link {
  font-size: 0.85rem;
  color: var(--color-text-muted-light);
}

.footer__link:hover {
  color: var(--color-accent);
}

/* Newsletter Column */
.footer__col--newsletter {
  gap: 1.25rem;
}

.footer__newsletter-text {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-muted-light);
}

.footer__form {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
  margin-top: 0.5rem;
  transition: var(--transition-fast);
}

.footer__form:focus-within {
  border-bottom-color: var(--color-accent);
}

.footer__input {
  flex: 1;
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-light);
  outline: none;
}

.footer__input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.footer__submit-btn {
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  transition: var(--transition-fast);
}

.footer__submit-btn:hover {
  color: var(--color-accent);
  transform: translateX(3px);
}

/* Footer Bottom */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer__copyright {
  font-size: 0.75rem;
  color: var(--color-text-muted-light);
  letter-spacing: 0.05em;
}

.footer__contact-line {
  font-size: 0.72rem;
  color: var(--color-text-muted-light);
  margin-top: 0.25rem;
}

.footer__contact-email {
  color: var(--color-accent);
  text-decoration: none;
  transition: var(--transition-fast);
}

.footer__contact-email:hover {
  opacity: 0.8;
}

.footer__payments {
  display: flex;
  gap: 0.75rem;
}

.payment-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.75;
  transition: var(--transition-fast);
}

.payment-badge:hover {
  opacity: 1;
}

.payment-badge--bank {
  width: auto;
  height: auto;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  color: var(--color-accent, #c9a96e);
  gap: 0.5rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

/* Responsive Footer */
@media (max-width: 992px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }
  
  .footer__col--brand, .footer__col--newsletter {
    grid-column: span 2;
  }
}

@media (max-width: 576px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
  
  .footer__col--brand, .footer__col--newsletter {
    grid-column: span 1;
  }
  
  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
