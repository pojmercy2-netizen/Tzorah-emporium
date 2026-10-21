<template>
  <section class="home-about">
    <div class="home-about__wrapper">
      <!-- Left Visual Side -->
      <div class="home-about__visual">
        <img src="/hero_fragrances.jpg" alt="About TZORAH EMPORIUM" class="home-about__img" />
        <div class="home-about__overlay"></div>
        <div class="home-about__badge">
          <span class="home-about__badge-sub">CURATED LUXURY</span>
          <span class="home-about__badge-main">EST. 2018</span>
        </div>
        <div class="home-about__logo-watermark">
          <img src="/logo.png" alt="TZORAH EMPORIUM Emblem" />
        </div>
      </div>

      <!-- Right Content Side -->
      <div class="home-about__content">
        <span class="home-about__eyebrow">ABOUT TZORAH EMPORIUM &bull; EST. 2018</span>
        <h2 class="home-about__title">The Alchemy of Scents, Oils &amp; Personal Luxuries</h2>
        <div class="home-about__divider"></div>
        <p class="home-about__lead">
          TZORAH EMPORIUM was established in 2018 on the belief that scent, self-care, and personal intimacy are profound art forms.
        </p>
        <p class="home-about__desc">
          We bring together pure grade-A USA perfume oils, Middle eastern perfumes, authentic designer fragrances, pure steam-distilled botanicals, candlecraft supplies, pet body care, and discreet private adult wellness — all unified by an uncompromising devotion to purity, authenticity, and discretion.
        </p>

        <!-- 4 Core Principles -->
        <div class="home-about__pillars">
          <div class="home-about__pillar">
            <div class="home-about__pillar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 11l2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h4>AUTHENTICITY</h4>
              <p>Direct sourcing of 100% undiluted USA perfume oils and genuine Arabian attars.</p>
            </div>
          </div>

          <div class="home-about__pillar">
            <div class="home-about__pillar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div>
              <h4>BOTANICAL PURITY</h4>
              <p>100% steam-distilled essential oils and nutrient-dense cold-pressed carriers.</p>
            </div>
          </div>

          <div class="home-about__pillar">
            <div class="home-about__pillar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div>
              <h4>TOTAL DISCRETION</h4>
              <p>100% confidential, plain, and unmarked packaging for all adult boudoir orders.</p>
            </div>
          </div>

          <div class="home-about__pillar">
            <div class="home-about__pillar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <div>
              <h4>HOLISTIC CRAFT</h4>
              <p>Pro soy waxes, sustainers, wicks, and gentle natural washes for pet wellness.</p>
            </div>
          </div>
        </div>

        <!-- Call to Actions -->
        <div class="home-about__actions">
          <NuxtLink to="/about" class="btn btn-primary">READ OUR FULL STORY &rarr;</NuxtLink>
          <NuxtLink to="/shop" class="btn btn-outline">EXPLORE CATALOGUE</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-about {
  background-color: #121212;
  color: #ffffff;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.home-about__wrapper {
  display: flex;
  min-height: 640px;
}

/* ─── Visual Side ──────────────────────────────── */
.home-about__visual {
  flex: 1;
  position: relative;
  min-height: 480px;
  overflow: hidden;
  background-color: #0a0a0a;
}

.home-about__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.65;
  transition: transform 1.2s ease;
}

.home-about:hover .home-about__img {
  transform: scale(1.03);
}

.home-about__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(10, 10, 10, 0.3) 0%, rgba(18, 18, 18, 0.85) 100%);
}

.home-about__badge {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1.25rem;
  border-left: 3px solid var(--color-accent);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  z-index: 2;
  border: 1px solid rgba(201, 168, 106, 0.25);
}

.home-about__badge-sub {
  font-family: var(--font-sans);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--color-accent);
}

.home-about__badge-main {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #ffffff;
}

.home-about__logo-watermark {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  width: 90px;
  opacity: 0.45;
  pointer-events: none;
  filter: brightness(0) invert(1);
}

.home-about__logo-watermark img {
  width: 100%;
  height: auto;
}

/* ─── Content Side ─────────────────────────────── */
.home-about__content {
  flex: 1.2;
  padding: 5rem 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #121212;
}

.home-about__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: var(--color-accent);
  display: block;
  margin-bottom: 0.75rem;
}

.home-about__title {
  font-family: var(--font-sans);
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.04em;
  line-height: 1.25;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.home-about__divider {
  width: 48px;
  height: 2px;
  background-color: var(--color-accent);
  margin-bottom: 1.5rem;
}

.home-about__lead {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1rem;
}

.home-about__desc {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
}

/* ─── 4 Pillars ────────────────────────────────── */
.home-about__pillars {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.home-about__pillar {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
}

.home-about__pillar-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.home-about__pillar h4 {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.home-about__pillar p {
  font-family: var(--font-sans);
  font-size: 0.76rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.65);
}

/* ─── Actions ──────────────────────────────────── */
.home-about__actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-primary {
  background-color: var(--color-accent);
  color: #121212;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 0.9rem 2rem;
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid var(--color-accent);
}

.btn-primary:hover {
  background-color: #ffffff;
  border-color: #ffffff;
  color: #121212;
}

.btn-outline {
  background-color: transparent;
  color: #ffffff;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 0.9rem 2rem;
  text-decoration: none;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.btn-outline:hover {
  border-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.05);
}

/* ─── Responsive ───────────────────────────────── */
@media (max-width: 1024px) {
  .home-about__content {
    padding: 3.5rem 2.5rem;
  }
  .home-about__title {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .home-about__wrapper {
    flex-direction: column;
  }
  .home-about__visual {
    min-height: 300px;
  }
  .home-about__content {
    padding: 3rem 1.5rem;
  }
  .home-about__pillars {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .home-about__actions {
    flex-direction: column;
    align-items: stretch;
  }
  .btn-primary, .btn-outline {
    text-align: center;
  }
}
</style>
