<template>
  <section class="home-cta">
    <div class="home-cta__bg">
      <img src="/images/cta_elevate_bg.jpg" alt="TZORAH EMPORIUM Private Collection" class="home-cta__bg-img" />
      <div class="home-cta__overlay"></div>
    </div>
    <div class="container home-cta__container">
      <div class="home-cta__content">
        <span class="home-cta__label">EXCLUSIVE APOTHECARY & BOUDOIR</span>
        <h2 class="home-cta__title">ELEVATE YOUR<br />SENSES.</h2>
        <div class="home-cta__divider"></div>
        <p class="home-cta__desc">
          From concentrated USA perfume oils and Middle Eastern attars to organic candlecraft and discreet luxury intimates — experience formulations built for sensory ecstasy.
        </p>
        <div class="home-cta__actions">
          <NuxtLink to="/shop" class="btn btn-primary home-cta__btn">SHOP ALL PRODUCTS</NuxtLink>
          <NuxtLink to="/shop?cat=ADULT%20SECTION" class="btn btn-secondary home-cta__btn">ADULT BOUDOIR (18+)</NuxtLink>
        </div>
        <!-- Trust badges -->
        <div class="home-cta__trust">
          <span class="home-cta__trust-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 11l2 2 4-4"/>
            </svg>
            100% Authentic Originals
          </span>
          <span class="home-cta__trust-sep">·</span>
          <span class="home-cta__trust-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            Express Nationwide Logistics
          </span>
          <span class="home-cta__trust-sep">·</span>
          <span class="home-cta__trust-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Discreet Confidential Packaging
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static CTA section - no logic needed
</script>

<style scoped>
.home-cta {
  position: relative;
  overflow: hidden;
  min-height: 620px;
  display: flex;
  align-items: center;
}

.home-cta__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.home-cta__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.03);
}

.home-cta__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(8, 8, 8, 0.92) 0%,
    rgba(8, 8, 8, 0.75) 45%,
    rgba(8, 8, 8, 0.3) 100%
  );
}

.home-cta__container {
  position: relative;
  z-index: 2;
  padding: 6rem 0;
}

.home-cta__content {
  max-width: 540px;
}

.home-cta__label {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.35em;
  color: var(--color-accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 1.25rem;
}

.home-cta__title {
  font-family: var(--font-sans);
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  line-height: 1.05;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.home-cta__divider {
  width: 50px;
  height: 2px;
  background-color: var(--color-accent);
  margin-bottom: 1.75rem;
}

.home-cta__desc {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.25rem;
  max-width: 460px;
}

.home-cta__actions {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.home-cta__btn {
  min-width: 175px;
  padding: 0.9rem 1.6rem;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-align: center;
}

/* Trust Badges */
.home-cta__trust {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.home-cta__trust-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
}

.home-cta__trust-sep {
  color: rgba(255, 255, 255, 0.2);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .home-cta__title {
    font-size: 2.8rem;
  }

  .home-cta {
    min-height: 500px;
  }
}

@media (max-width: 480px) {
  .home-cta__title {
    font-size: 2.2rem;
  }

  .home-cta__trust {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .home-cta__trust-sep {
    display: none;
  }
}
</style>
