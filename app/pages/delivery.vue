<template>
  <div class="delivery-page">
    <!-- Header -->
    <header class="delivery-hero">
      <div class="container delivery-hero__container">
        <span class="delivery-eyebrow">CUSTOMER CARE &amp; LOGISTICS</span>
        <h1 class="delivery-title">Delivery Information</h1>
        <p class="delivery-subtitle">Everything you need to know about our dispatch and shipping across Nigeria.</p>
      </div>
    </header>

    <main class="container delivery-main">
      <div class="delivery-card">
        <div class="delivery-header">
          <div class="delivery-badge">OFFICIAL POLICY</div>
          <h2 class="delivery-heading">DELIVERY INFORMATION &mdash; TZORAH&rsquo;S EMPORIUM</h2>
          <p class="delivery-intro">We deliver within Port Harcourt and to other locations across Nigeria.</p>
        </div>

        <!-- Timelines Grid -->
        <div class="delivery-timeline-grid">
          <div class="timeline-box">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="timeline-content">
              <h4>Port Harcourt</h4>
              <p>Same-day delivery where available, or within 24 hours where possible.</p>
            </div>
          </div>

          <div class="timeline-box">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="timeline-content">
              <h4>Other Parts of Rivers State</h4>
              <p>Fees and delivery times depend on the specific destination.</p>
            </div>
          </div>

          <div class="timeline-box">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div class="timeline-content">
              <h4>South-South &amp; South-East</h4>
              <p>Estimated delivery time of <strong>4&ndash;7 days</strong>.</p>
            </div>
          </div>

          <div class="timeline-box">
            <div class="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div class="timeline-content">
              <h4>Other States Nationwide</h4>
              <p>Estimated delivery time of <strong>4&ndash;10 days</strong>, depending on the destination.</p>
            </div>
          </div>
        </div>

        <!-- Important Notes -->
        <div class="delivery-notes">
          <h3 class="notes-heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Please Note:
          </h3>
          <ul class="notes-list">
            <li>Delivery fees are determined by the dispatch rider or logistics company, not Tzorah&rsquo;s Emporium.</li>
            <li>Orders are typically processed and handed over for dispatch within <strong>24&ndash;48 hours</strong>.</li>
            <li>Delivery timelines are estimates and may vary due to distance, logistics availability or unforeseen delays.</li>
            <li>Once an order has been handed over to the logistics provider, delays outside our control may occur.</li>
          </ul>
        </div>

        <div class="delivery-actions">
          <NuxtLink to="/shop" class="btn btn-primary">START SHOPPING</NuxtLink>
          <NuxtLink to="/checkout" class="btn btn-outline">GO TO CHECKOUT</NuxtLink>
        </div>
      </div>
    </main>

    <FooterFeatures />
  </div>
</template>

<script setup>
useHead({
  title: 'Delivery Information | TZORAH EMPORIUM',
  meta: [
    { name: 'description', content: 'Delivery information, timelines, and shipping guidelines for Tzorah’s Emporium across Port Harcourt, Rivers State, and nationwide in Nigeria.' }
  ]
})
</script>

<style scoped>
.delivery-page {
  background-color: var(--color-bg-light);
  min-height: 100vh;
}

.delivery-hero {
  background-color: var(--color-bg-dark);
  color: var(--color-text-light);
  padding: 3.5rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.delivery-hero__container {
  max-width: 680px;
  margin: 0 auto;
}

.delivery-eyebrow {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  color: var(--color-accent);
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.delivery-title {
  font-family: var(--font-sans);
  font-size: 2.4rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.delivery-subtitle {
  font-family: var(--font-serif);
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.delivery-main {
  max-width: 860px;
  margin: -2rem auto 5rem auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
}

.delivery-card {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  padding: 3rem 2.5rem;
}

.delivery-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.delivery-badge {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  background-color: #f6f3ee;
  color: var(--color-accent);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.delivery-heading {
  font-family: var(--font-sans);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}

.delivery-intro {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  color: var(--color-text-muted);
}

.delivery-timeline-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.timeline-box {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background-color: #fbf9f6;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 3px solid var(--color-accent);
}

.timeline-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.timeline-content h4 {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--color-text-dark);
  margin-bottom: 0.25rem;
}

.timeline-content p {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.45;
}

.delivery-notes {
  background-color: #faf8f5;
  border: 1px solid rgba(201, 168, 106, 0.3);
  padding: 1.75rem;
  margin-bottom: 2.5rem;
}

.notes-heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-text-dark);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.notes-heading svg {
  color: var(--color-accent);
}

.notes-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.notes-list li {
  font-family: var(--font-sans);
  font-size: 0.84rem;
  color: var(--color-text-dark);
  line-height: 1.5;
  position: relative;
  padding-left: 1.25rem;
}

.notes-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 1.2rem;
  line-height: 1;
}

.delivery-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  background-color: var(--color-text-dark);
  color: #ffffff;
  padding: 0.85rem 2rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  border: 1px solid var(--color-text-dark);
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-text-dark);
  padding: 0.85rem 2rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  border-color: var(--color-text-dark);
}

@media (max-width: 768px) {
  .delivery-card {
    padding: 2rem 1.25rem;
  }
  .delivery-timeline-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .delivery-title {
    font-size: 1.8rem;
  }
  .delivery-actions {
    flex-direction: column;
  }
  .btn-primary, .btn-outline {
    text-align: center;
  }
}
</style>
