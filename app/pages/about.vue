<template>
  <div class="about-page">

    <!-- ───────────────────────────────────────── -->
    <!-- SECTION 1: Hero – Full-bleed centred       -->
    <!-- ───────────────────────────────────────── -->
    <section class="about-hero">
      <img src="/hero_fragrances.jpg" alt="TZORAH EMPORIUM Scent &amp; Oil Apothecary" class="about-hero__bg" />
      <div class="about-hero__overlay"></div>
      <div class="about-hero__content">
        <span class="about-hero__eyebrow">ABOUT TZORAH EMPORIUM &bull; EST. 2018</span>
        <h1 class="about-hero__title">The Alchemy of<br />Scents, Oils &amp;<br />Personal Luxuries.</h1>
        <div class="about-hero__divider"></div>
        <p class="about-hero__desc">
          TZORAH EMPORIUM was established in 2018 on the belief that scent, self-care, and personal intimacy are profound art forms.
          We bring together pure grade-A USA perfume oils, Middle eastern perfumes, authentic designer fragrances, pure steam-distilled botanicals, candlecraft supplies, and discreet adult wellness.
        </p>
        <NuxtLink to="/shop" class="about-btn about-btn--outline-light">EXPLORE THE STORE</NuxtLink>
      </div>
    </section>

    <!-- ───────────────────────────────────────── -->
    <!-- SECTION 2: Our Values                     -->
    <!-- ───────────────────────────────────────── -->
    <section class="about-values">
      <div class="container">
        <h2 class="about-values__heading">OUR PRINCIPLES</h2>
        <div class="about-values__grid">
          <div v-for="val in values" :key="val.label" class="about-values__item">
            <!-- Icon -->
            <div class="about-values__icon-wrap" v-html="val.icon"></div>
            <h4 class="about-values__label">{{ val.label }}</h4>
            <p class="about-values__desc">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ───────────────────────────────────────── -->
    <!-- SECTION 3: Crafted to Last                -->
    <!-- ───────────────────────────────────────── -->
    <section class="about-craft">
      <div class="container">
        <div class="about-craft__content">
          <span class="about-craft__eyebrow">UNCOMPROMISING PURITY</span>
          <h2 class="about-craft__title">100% Authentic.<br />Never Compromised.</h2>
          <div class="about-craft__divider"></div>
          <p class="about-craft__desc">
            Every perfume oil, essential drop, and carrier base in our store is batch-verified for purity and long-lasting potency. Zero alcohol dilution in our pure oils, skin-safe cosmetic ingredients, and responsibly sourced botanical extracts.
          </p>
          <NuxtLink to="/shop?cat=OILS" class="about-btn about-btn--outline">VISIT THE OILS BAR</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ───────────────────────────────────────── -->
    <!-- SECTION 4: Mission – Dark split section   -->
    <!-- ───────────────────────────────────────── -->
    <section class="about-mission">
      <!-- Left: dark background image panel -->
      <div class="about-mission__image">
        <img src="/images/brand_bg.png" alt="TZORAH EMPORIUM Sanctuary" />
        <div class="about-mission__image-overlay"></div>
        <!-- Logo centred on image panel -->
        <div class="about-mission__logo-wrap">
          <img src="/logo.png" alt="TZORAH EMPORIUM" class="about-mission__logo" />
        </div>
      </div>

      <!-- Right: text panel (dark background) -->
      <div class="about-mission__text">
        <span class="about-mission__eyebrow">OUR COMMITMENT</span>
        <h2 class="about-mission__title">Elevate Your Senses.</h2>
        <p class="about-mission__desc">
          Whether you are formulating custom candles, exploring authentic Middle Eastern ouds, nourishing your skin with organic jojoba, caring for your beloved pets, or indulging in discreet adult wellness — TZORAH EMPORIUM is your trusted haven.
        </p>
        <NuxtLink to="/shop" class="about-btn about-btn--outline-light">DISCOVER COLLECTION</NuxtLink>
      </div>
    </section>

    <!-- ───────────────────────────────────────── -->
    <!-- SECTION 5: Footer feature pillars         -->
    <!-- ───────────────────────────────────────── -->
    <FooterFeatures />

  </div>
</template>

<script setup>
useHead({
  title: 'About Us | TZORAH EMPORIUM',
  meta: [{ name: 'description', content: 'Discover TZORAH EMPORIUM — curators of authentic USA oil perfumes, Middle Eastern scents, pure botanical oils, candlecraft, pet care, and private luxuries.' }]
})

const values = [
  {
    label: 'AUTHENTICITY',
    desc: 'Direct sourcing of unadulterated USA oil perfumes, Arabian attars, and genuine designer scents.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 11l2 2 4-4"/></svg>`
  },
  {
    label: 'BOTANICAL PURITY',
    desc: 'Steam-distilled pure essential oils and cold-pressed natural carrier oils rich in nutrients.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
  },
  {
    label: 'TOTAL DISCRETION',
    desc: 'All 18+ adult wellness and intimate orders are dispatched in 100% unmarked, confidential packaging.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
  },
  {
    label: 'HOLISTIC CRAFT',
    desc: 'Supporting DIY artisans and pet lovers with professional soy waxes, wicks, and soothing pet washes.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`
  }
]
</script>

<style scoped>
/* ─── Shared Tokens ───────────────────────────── */
.about-page {
  background-color: var(--color-bg-light);
}

.about-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.85rem 2rem;
}

.about-btn--solid {
  background-color: var(--color-text-dark);
  color: #ffffff;
  border: 1px solid var(--color-text-dark);
}
.about-btn--solid:hover {
  background-color: transparent;
  color: var(--color-text-dark);
}

.about-btn--outline {
  background-color: transparent;
  color: var(--color-text-dark);
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.about-btn--outline:hover {
  background-color: var(--color-text-dark);
  color: #ffffff;
  border-color: var(--color-text-dark);
}

.about-btn--outline-light {
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.about-btn--outline-light:hover {
  background-color: #ffffff;
  color: var(--color-text-dark);
}

/* ─── Section 1: Hero ─────────────────────────── */
.about-hero {
  position: relative;
  width: 100%;
  min-height: 520px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: var(--color-bg-dark);
}

.about-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: 0.6;
}

.about-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(17, 17, 17, 0.52);
}

.about-hero__content {
  position: relative;
  z-index: 2;
  color: var(--color-text-light);
  max-width: 680px;
  padding: 0 1.5rem;
}

.about-hero__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--color-accent);
  margin-bottom: 1.25rem;
  display: block;
}

.about-hero__title {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.15;
  color: #ffffff;
  margin-bottom: 1.25rem;
  letter-spacing: 0.04em;
}

.about-hero__divider {
  width: 50px;
  height: 2px;
  background-color: var(--color-accent);
  margin: 0 auto 1.5rem auto;
}

.about-hero__desc {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 2rem;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .about-hero {
    min-height: 420px;
    height: 55vh;
  }
  .about-hero__title {
    font-size: 2.2rem;
  }
  .about-hero__desc {
    font-size: 0.88rem;
  }
}

@media (max-width: 480px) {
  .about-hero {
    min-height: 360px;
    height: 50vh;
  }
  .about-hero__title {
    font-size: 1.8rem;
  }
}

/* ─── Shared: Logo watermark overlay (used on all clothing images) ── */
.img-logo-overlay {
  position: absolute;
  width: 80px;
  opacity: 0.55;
  pointer-events: none;
}

.img-logo-overlay img {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0) invert(1);
}

/* Bottom-right corner variant */
.img-logo-overlay--br {
  bottom: 1.25rem;
  right: 1.25rem;
}

/* ─── Section 2: Values ───────────────────────── */
.about-values {
  padding: 4rem 0;
  background-color: var(--color-bg-light);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.about-values__heading {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-text-dark);
}

.about-values__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.about-values__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
}

.about-values__icon-wrap {
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  opacity: 0.8;
}

.about-values__label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.6rem;
  color: var(--color-text-dark);
}

.about-values__desc {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

/* ─── Section 3: Craft ────────────────────────── */
.about-craft {
  padding: 5rem 0;
  background-color: var(--color-bg-light);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.about-craft__content {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
}

.about-craft__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  display: block;
}

.about-craft__title {
  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 1.25;
  color: var(--color-text-dark);
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}

.about-craft__divider {
  width: 40px;
  height: 2px;
  background-color: var(--color-accent);
  margin: 0 auto 1.5rem auto;
}

.about-craft__desc {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  max-width: 580px;
}

/* ─── Section 4: Mission ──────────────────────── */
.about-mission {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 380px;
}

.about-mission__image {
  position: relative;
  overflow: hidden;
  background-color: #2a2520;
}

.about-mission__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.55;
}

.about-mission__image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17, 17, 17, 0.35);
}

.about-mission__logo-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-mission__logo {
  width: 110px;
  filter: invert(1) brightness(2);
  opacity: 0.9;
}

.about-mission__text {
  background-color: #2e2a25;
  color: #ffffff;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-mission__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--color-accent);
  margin-bottom: 1.25rem;
  display: block;
}

.about-mission__title {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1.25;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.about-mission__desc {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 2rem;
  max-width: 340px;
}

/* ─── Responsive: stack on mobile (≤768px) ────── */
@media (max-width: 768px) {
  /* Section 1 */
  .about-hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  /* Image comes first on mobile (top) */
  .about-hero__image {
    order: -1;
    height: 60vw;
    min-height: 260px;
    max-height: 380px;
  }

  .about-hero__text {
    padding: 2.5rem 1.5rem;
  }

  .about-hero__title {
    font-size: 2rem;
  }

  .about-hero__desc {
    max-width: 100%;
  }

  /* Values: 2x2 grid */
  .about-values {
    padding: 3rem 0;
  }

  .about-values__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 1rem;
  }

  /* Section 3 */
  .about-craft {
    padding: 3.5rem 0;
  }

  .about-craft__title {
    font-size: 1.85rem;
  }

  .about-craft__desc {
    max-width: 100%;
  }

  /* Section 4 */
  .about-mission {
    grid-template-columns: 1fr;
    grid-template-rows: 260px auto;
  }

  .about-mission__text {
    padding: 2.5rem 1.5rem;
  }

  .about-mission__title {
    font-size: 1.85rem;
  }

  .about-mission__desc {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .about-hero__title {
    font-size: 1.75rem;
  }

  .about-values__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-craft__title {
    font-size: 1.6rem;
  }

  .about-mission__title {
    font-size: 1.6rem;
  }
}
</style>
