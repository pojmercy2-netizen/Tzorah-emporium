<template>
  <section class="faq section-padding">
    <div class="container">
      <div class="faq__inner">
        <!-- Header -->
        <div class="faq__header">
          <span class="faq__label">NEED HELP?</span>
          <h2 class="faq__title">Frequently Asked<br />Questions</h2>
          <div class="faq__divider"></div>
        </div>

        <!-- Accordion Items -->
        <div class="faq__list">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="faq__item"
            :class="{ 'faq__item--open': openIndex === idx }"
            @click="toggle(idx)"
          >
            <div class="faq__question">
              <span>{{ item.q }}</span>
              <span class="faq__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18" height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" class="faq__plus-v" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>
            <div class="faq__answer">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx
}

const faqs = [
  {
    q: 'Are your USA and Middle Eastern perfume oils 100% authentic and undiluted?',
    a: 'Yes. All our USA perfume oils, Middle Eastern attars, and designer perfumes are sourced directly from authenticated fragrance laboratories and distributors. Our oils are 100% pure, alcohol-free, and designed for 24+ hour skin and fabric projection.'
  },
  {
    q: 'How are your oils categorized?',
    a: 'All oils are organized under our "OILS" category with dedicated subcategories: Fragrance Oils (for personal scent, body oils, and candle making), Essential Oils (100% steam-distilled pure botanical essences for aromatherapy), and Natural Oils (pure cold-pressed carrier oils like Jojoba, Argan, and Almond).'
  },
  {
    q: 'Are orders from the Adult Section shipped discreetly?',
    a: 'Absolutely. All adult wellness toys and luxury lingerie orders are shipped in 100% plain, tamper-evident, unmarked boxes with neutral shipping labels. Your privacy and discretion are completely protected.'
  },
  {
    q: 'Can your candle making supplies be used by beginners and artisans?',
    a: 'Yes! We stock premium golden soy wax flakes, pre-waxed cotton wicks with sustainers, precision melting pitchers, and candle-grade fragrance oils suitable for both hobbyists and commercial candle makers.'
  },
  {
    q: 'Are pet body care products safe for sensitive dogs and cats?',
    a: 'Yes. Our calming oatmeal pet washes, coat sprays, and paw protection balms are crafted from non-toxic, lick-safe, natural ingredients formulated to soothe skin without harsh sulfates or synthetic irritants.'
  },
  {
    q: 'What is your delivery coverage, timelines and fees?',
    a: 'We deliver within Port Harcourt and to other locations across Nigeria. Port Harcourt: Same-day delivery where available or within 24 hours. Other parts of Rivers State: Fees & delivery times depend on destination. South-South & South-East: Estimated 4–7 days. Other states nationwide: Estimated 4–10 days. Please note that delivery fees are set by the dispatch rider or logistics company, and orders are processed within 24–48 hours.'
  }
]
</script>

<style scoped>
.faq {
  background-color: #0f0f0f;
  padding: 6rem 0;
}

.faq__inner {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 5rem;
  align-items: flex-start;
}

.faq__label {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--color-accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 1.25rem;
}

.faq__title {
  font-family: var(--font-sans);
  font-size: 2.4rem;
  font-weight: 300;
  letter-spacing: 0.03em;
  line-height: 1.2;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.faq__divider {
  width: 45px;
  height: 2px;
  background-color: var(--color-accent);
}

.faq__list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.faq__item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.25s ease;
}

.faq__item:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.faq__question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  user-select: none;
  gap: 1rem;
}

.faq__icon {
  flex-shrink: 0;
  color: var(--color-accent);
  transition: transform 0.3s ease;
}

.faq__item--open .faq__icon {
  transform: rotate(45deg);
}

.faq__plus-v {
  transition: opacity 0.3s ease;
}

.faq__item--open .faq__plus-v {
  opacity: 0;
}

.faq__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  padding: 0 0.5rem;
}

.faq__item--open .faq__answer {
  max-height: 300px;
  padding: 0 0.5rem 1.5rem;
}

.faq__answer p {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.55);
}

@media (max-width: 900px) {
  .faq__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .faq__title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .faq {
    padding: 4rem 0;
  }
}
</style>
