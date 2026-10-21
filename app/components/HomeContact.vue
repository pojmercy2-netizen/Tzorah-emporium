<template>
  <section class="contact section-padding" id="contact">
    <div class="container">
      
      <!-- Section Header -->
      <div class="contact__header text-center">
        <span class="contact__label">CONCIERGE & SUPPORT</span>
        <h2 class="contact__title">We'd Love To Hear From You</h2>
        <div class="contact__divider"></div>
        <p class="contact__desc">
          Whether you have an inquiry about pure Grade-A perfume oils, rare attars, bespoke formulation blends, or discreet order fulfillment — our concierge is at your service.
        </p>
      </div>

      <!-- Luxury Contact Cards Grid -->
      <div class="contact__cards-grid">
        
        <!-- Email Support Card -->
        <a :href="`mailto:${storeSettings.supportEmail || 'concierge@tzorahemporium.com'}`" class="contact-card">
          <div class="contact-card__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span class="contact-card__subtitle">OFFICIAL EMAIL</span>
          <h3 class="contact-card__title">{{ storeSettings.supportEmail || 'concierge@tzorahemporium.com' }}</h3>
          <p class="contact-card__meta">
            {{ storeSettings.responseTime || 'Responses within 2–4 hours' }}
          </p>
          <span class="contact-card__action">SEND EMAIL ↗</span>
        </a>

        <!-- Telephone Hotline Card -->
        <a :href="`tel:${storeSettings.telephone || ''}`" class="contact-card">
          <div class="contact-card__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.55 6.55l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span class="contact-card__subtitle">CUSTOMER CARE LINE</span>
          <h3 class="contact-card__title">{{ storeSettings.telephone || '+234 (0) 800 TZORAH' }}</h3>
          <p class="contact-card__meta">
            {{ storeSettings.businessHours || 'Mon – Sat, 9am – 8pm' }}
          </p>
          <span class="contact-card__action">CALL NOW ↗</span>
        </a>

        <!-- WhatsApp Concierge Card -->
        <a
          v-if="whatsappUrl"
          :href="whatsappUrl"
          target="_blank"
          rel="noopener"
          class="contact-card contact-card--highlight"
        >
          <div class="contact-card__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span class="contact-card__subtitle">VIP WHATSAPP CONCIERGE</span>
          <h3 class="contact-card__title">Direct Private Chat</h3>
          <p class="contact-card__meta">Instant fragrance & discreet wellness assistance</p>
          <span class="contact-card__action">OPEN CHAT ↗</span>
        </a>

        <!-- Address / Logistics Card -->
        <div class="contact-card">
          <div class="contact-card__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span class="contact-card__subtitle">CENTRAL DISPATCH & ATELIER</span>
          <h3 class="contact-card__title">{{ storeSettings.contactAddress || 'Port Harcourt, Rivers State, Nigeria' }}</h3>
          <p class="contact-card__meta">Fast & discreet nationwide delivery coverage</p>
          <span class="contact-card__action contact-card__action--static">VERIFIED HUB</span>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const { storeSettings, fetchStoreSettings } = useStoreSettings()

onMounted(fetchStoreSettings)

const whatsappUrl = computed(() => {
  if (!storeSettings.value?.whatsappNumber) return null
  const num = storeSettings.value.whatsappNumber.replace(/[^0-9]/g, '')
  return `https://wa.me/${num}?text=Hello%20TZORAH%20EMPORIUM%20Concierge`
})
</script>

<style scoped>
.contact {
  background-color: #0b0b0b;
  padding: 6rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.contact__header {
  max-width: 680px;
  margin: 0 auto 4rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__label {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--color-accent, #c9a96e);
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
}

.contact__title {
  font-family: var(--font-sans);
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.2;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

@media (max-width: 768px) {
  .contact__title {
    font-size: 1.8rem;
  }
}

.contact__divider {
  width: 48px;
  height: 2px;
  background-color: var(--color-accent, #c9a96e);
  margin-bottom: 1.5rem;
}

.contact__desc {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* Contact Cards Grid */
.contact__cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1100px) {
  .contact__cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .contact__cards-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

.contact-card {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 2.25rem 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.contact-card:hover {
  background: #171717;
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.06);
}

.contact-card--highlight {
  border-color: rgba(212, 175, 55, 0.25);
  background: linear-gradient(145deg, #151515 0%, #101010 100%);
}

.contact-card__icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 2px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.25);
  color: var(--color-accent, #c9a96e);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.25s ease;
}

.contact-card:hover .contact-card__icon-wrap {
  background: var(--color-accent, #c9a96e);
  color: #0b0b0b;
  border-color: var(--color-accent, #c9a96e);
}

.contact-card__subtitle {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.contact-card__title {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin: 0 0 0.65rem 0;
  word-break: break-word;
  line-height: 1.35;
}

.contact-card__meta {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

.contact-card__action {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-accent, #c9a96e);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: gap 0.2s ease, color 0.2s ease;
}

.contact-card:hover .contact-card__action {
  color: #ffffff;
}

.contact-card__action--static {
  color: rgba(255, 255, 255, 0.35);
}
</style>
