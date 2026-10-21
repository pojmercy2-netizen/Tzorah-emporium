<template>
  <section id="home" class="hero" aria-label="Hero Showcase">
    <!-- Background Media with Subtle Zoom Effect -->
    <div class="hero__bg-wrapper">
      <img
        src="/hero_fragrances.jpg"
        alt="TZORAH EMPORIUM Luxury Fragrances & Botanical Oils"
        class="hero__bg-img"
        loading="eager"
      />
      <!-- Sheer Luxury Gradient Overlay (Bright & Vivid Background) -->
      <div class="hero__overlay" aria-hidden="true"></div>
    </div>

    <!-- Centered Hero Content -->
    <div class="container hero__container">
      <div class="hero__content">
        <!-- Eyebrow -->
        <div class="hero__eyebrow-wrapper">
          <span class="hero__eyebrow-line" aria-hidden="true"></span>
          <span class="hero__eyebrow">Welcome to the Emporium</span>
          <span class="hero__eyebrow-line" aria-hidden="true"></span>
        </div>

        <!-- 3-Line Centered Headline -->
        <h1 class="hero__title">
          <span class="hero__title-line">Scent Tells a</span>
          <span class="hero__title-line hero__title-line--highlight">Story Only You</span>
          <span class="hero__title-line">Can Tell</span>
        </h1>

        <!-- Supporting Text -->
        <p class="hero__description">
          Discover luxury fragrances, rare oils, and intimate lifestyle essentials — curated for the bold and the beautiful.
        </p>

        <!-- Rounded Pill Actions -->
        <div class="hero__actions">
          <!-- Primary Gold Button -->
          <NuxtLink
            to="/#shop"
            class="hero__btn hero__btn--primary"
            @click="handleShopClick"
          >
            <span>Shop Fragrances</span>
            <svg class="hero__btn-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </NuxtLink>

          <!-- Secondary Translucent Button with 18+ Badge -->
          <NuxtLink
            to="/shop?cat=ADULT%20SECTION"
            class="hero__btn hero__btn--secondary"
          >
            <span>Adult Section</span>
            <span class="badge-18" aria-label="Adult 18 plus">18+</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll Cue Indicator -->
    <a
      href="#shop"
      class="hero__scroll"
      @click="handleShopClick"
      aria-label="Scroll down to explore products"
    >
      <span class="hero__scroll-text">SCROLL</span>
      <span class="hero__scroll-line" aria-hidden="true"></span>
    </a>
  </section>
</template>

<script setup>
const handleShopClick = (e) => {
  if (typeof window !== 'undefined') {
    const shopEl = document.getElementById('shop')
    if (shopEl) {
      e.preventDefault()
      shopEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════
   HERO CONTAINER
   ═══════════════════════════════════════════════════════════ */
.hero {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 116px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #0b0b0b;
  padding: 3rem 1.5rem 4.5rem;
  box-sizing: border-box;
}

/* ═══════════════════════════════════════════════════════════
   BACKGROUND & ZOOM ANIMATION
   ═══════════════════════════════════════════════════════════ */
.hero__bg-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  transform: scale(1.02);
  animation: heroBgZoom 26s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
  will-change: transform;
}

@keyframes heroBgZoom {
  0% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1.1);
  }
}

/* Sheer, luminous gradient: lets the amber bottles & rose petals shine clearly */
.hero__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.28) 0%,
    rgba(10, 10, 10, 0.05) 25%,
    rgba(10, 10, 10, 0.12) 65%,
    rgba(10, 10, 10, 0.45) 100%
  );
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════════════
   CONTENT & FADE-UP ENTRANCE
   ═══════════════════════════════════════════════════════════ */
.hero__container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.hero__content {
  max-width: 840px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  animation: heroFadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Soft ambient text scrim: keeps text crisp without darkening the whole photo */
.hero__content::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 115%;
  height: 115%;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0) 72%);
  pointer-events: none;
  z-index: -1;
}

@keyframes heroFadeUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ═══════════════════════════════════════════════════════════
   EYEBROW
   ═══════════════════════════════════════════════════════════ */
.hero__eyebrow-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.95rem;
}

.hero__eyebrow-line {
  display: inline-block;
  width: 32px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4af37);
}

.hero__eyebrow-wrapper .hero__eyebrow-line:last-child {
  background: linear-gradient(90deg, #d4af37, transparent);
}

.hero__eyebrow {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: #d4af37;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.95), 0 4px 16px rgba(0, 0, 0, 0.7);
}

/* ═══════════════════════════════════════════════════════════
   HEADLINE (REFINED SERIF, 3 LINES)
   ═══════════════════════════════════════════════════════════ */
.hero__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-serif, 'Cormorant Garamond', Georgia, serif);
  font-size: clamp(2.3rem, 5.4vw, 4.4rem);
  font-weight: 300;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin: 0 0 1.15rem 0;
  text-shadow: 0 4px 22px rgba(0, 0, 0, 0.95), 0 2px 6px rgba(0, 0, 0, 0.95);
}

.hero__title-line {
  display: block;
}

/* Line 2: Italic Gold Highlight */
.hero__title-line--highlight {
  font-style: italic;
  font-weight: 400;
  color: #f3ce72;
  text-shadow: 0 4px 22px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.95), 0 0 25px rgba(243, 206, 114, 0.35);
  padding: 0 0.15em;
}

/* ═══════════════════════════════════════════════════════════
   SUPPORTING TEXT (CLEAN SANS-SERIF)
   ═══════════════════════════════════════════════════════════ */
.hero__description {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: clamp(0.92rem, 1.35vw, 1.08rem);
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.94);
  max-width: 600px;
  margin: 0 auto 1.85rem auto;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 0.95);
}

/* ═══════════════════════════════════════════════════════════
   ROUNDED PILL BUTTONS
   ═══════════════════════════════════════════════════════════ */
.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  flex-wrap: wrap;
  width: 100%;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.9rem 2.1rem;
  border-radius: 9999px;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  white-space: nowrap;
}

/* Primary Gold Button */
.hero__btn--primary {
  background: linear-gradient(135deg, #d4af37 0%, #b89874 55%, #9d7d58 100%);
  color: #0e0e0e;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 4px 16px rgba(184, 152, 116, 0.35);
}

.hero__btn--primary:hover {
  background: linear-gradient(135deg, #e3bf4a 0%, #c9a983 55%, #ab8962 100%);
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.55), 0 6px 20px rgba(184, 152, 116, 0.5);
}

.hero__btn-icon {
  transition: transform 0.25s ease;
}

.hero__btn--primary:hover .hero__btn-icon {
  transform: translateX(3px);
}

/* Secondary Translucent Outlined Button */
.hero__btn--secondary {
  background: rgba(14, 14, 14, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.4);
}

.hero__btn--secondary:hover {
  background: rgba(24, 24, 24, 0.75);
  border-color: rgba(255, 255, 255, 0.65);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.55);
}

/* Small Pink 18+ Badge */
.badge-18 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 63, 94, 0.28);
  border: 1px solid rgba(244, 63, 94, 0.6);
  color: #fda4af;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 0.16rem 0.48rem;
  border-radius: 9999px;
  line-height: 1;
  transition: all 0.25s ease;
}

.hero__btn--secondary:hover .badge-18 {
  background: rgba(244, 63, 94, 0.45);
  border-color: rgba(244, 63, 94, 0.85);
  color: #ffffff;
}

/* ═══════════════════════════════════════════════════════════
   SCROLL CUE WITH ANIMATED LINE
   ═══════════════════════════════════════════════════════════ */
.hero__scroll {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.hero__scroll:hover {
  opacity: 1;
  transform: translateX(-50%) translateY(2px);
}

.hero__scroll-text {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: #ffffff;
  font-weight: 500;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
}

.hero__scroll-line {
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, #d4af37, transparent);
  animation: heroScrollLine 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes heroScrollLine {
  0% {
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0.2;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
    opacity: 1;
  }
  51% {
    transform: scaleY(1);
    transform-origin: bottom;
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
    opacity: 0.2;
  }
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE DESIGN
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 992px) {
  .hero {
    min-height: calc(90vh - 110px);
    padding: 2.5rem 1.25rem 4rem;
  }

  .hero__title {
    font-size: clamp(2.1rem, 5.2vw, 3.4rem);
  }

  .hero__description {
    font-size: 0.95rem;
    max-width: 520px;
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: calc(88vh - 100px);
    padding: 3rem 1.25rem 3.5rem;
  }

  .hero__eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
  }

  .hero__eyebrow-line {
    width: 20px;
  }

  .hero__title {
    font-size: 2.1rem;
    margin-bottom: 0.95rem;
  }

  .hero__description {
    font-size: 0.88rem;
    line-height: 1.6;
    margin-bottom: 1.6rem;
  }

  .hero__actions {
    flex-direction: column;
    gap: 0.85rem;
    max-width: 300px;
  }

  .hero__btn {
    width: 100%;
    padding: 0.85rem 1.5rem;
    font-size: 0.74rem;
  }

  .hero__scroll {
    bottom: 0.85rem;
  }

  .hero__scroll-line {
    height: 24px;
  }
}
</style>
