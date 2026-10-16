<template>
  <section class="home-delivery section-padding">
    <div class="container">
      <!-- Section Header -->
      <div class="home-delivery__header">
        <span class="home-delivery__eyebrow">NATIONWIDE DISPATCH &amp; LOGISTICS</span>
        <h2 class="home-delivery__title">DELIVERY INFORMATION &mdash; TZORAH&rsquo;S EMPORIUM</h2>
        <p class="home-delivery__sub">We deliver within Port Harcourt and to other locations across Nigeria.</p>
        <div class="home-delivery__divider"></div>
      </div>

      <!-- 4 Delivery Zones Grid (desktop) -->
      <div class="home-delivery__grid">
        <!-- Zone 1 -->
        <div class="home-delivery__card">
          <div class="home-delivery__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div class="home-delivery__card-body">
            <span class="home-delivery__zone-badge">HOME CITY</span>
            <h3 class="home-delivery__zone-name">Port Harcourt</h3>
            <p class="home-delivery__zone-detail">
              Same-day delivery where available, or within <strong>24 hours</strong> where possible.
            </p>
          </div>
        </div>

        <!-- Zone 2 -->
        <div class="home-delivery__card">
          <div class="home-delivery__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="home-delivery__card-body">
            <span class="home-delivery__zone-badge">STATEWIDE</span>
            <h3 class="home-delivery__zone-name">Other Parts of Rivers State</h3>
            <p class="home-delivery__zone-detail">
              Fees and delivery times depend on the specific destination.
            </p>
          </div>
        </div>

        <!-- Zone 3 -->
        <div class="home-delivery__card">
          <div class="home-delivery__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div class="home-delivery__card-body">
            <span class="home-delivery__zone-badge">REGIONAL</span>
            <h3 class="home-delivery__zone-name">South-South &amp; South-East</h3>
            <p class="home-delivery__zone-detail">
              Estimated delivery time of <strong>4&ndash;7 days</strong>.
            </p>
          </div>
        </div>

        <!-- Zone 4 -->
        <div class="home-delivery__card">
          <div class="home-delivery__icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div class="home-delivery__card-body">
            <span class="home-delivery__zone-badge">NATIONWIDE</span>
            <h3 class="home-delivery__zone-name">Other States Nationwide</h3>
            <p class="home-delivery__zone-detail">
              Estimated delivery time of <strong>4&ndash;10 days</strong>, depending on destination.
            </p>
          </div>
        </div>
      </div>

      <!-- Single unified card (mobile only) -->
      <div class="home-delivery__unified-card">
        <div class="home-delivery__unified-zone">
          <div class="home-delivery__unified-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div class="home-delivery__unified-body">
            <span class="home-delivery__zone-badge">HOME CITY</span>
            <h3 class="home-delivery__zone-name">Port Harcourt</h3>
            <p class="home-delivery__zone-detail">Same-day or within <strong>24 hrs</strong>.</p>
          </div>
        </div>
        <div class="home-delivery__unified-zone">
          <div class="home-delivery__unified-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="home-delivery__unified-body">
            <span class="home-delivery__zone-badge">STATEWIDE</span>
            <h3 class="home-delivery__zone-name">Rivers State</h3>
            <p class="home-delivery__zone-detail">Fees vary by destination.</p>
          </div>
        </div>
        <div class="home-delivery__unified-zone">
          <div class="home-delivery__unified-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div class="home-delivery__unified-body">
            <span class="home-delivery__zone-badge">REGIONAL</span>
            <h3 class="home-delivery__zone-name">SS &amp; SE</h3>
            <p class="home-delivery__zone-detail"><strong>4–7 days</strong>.</p>
          </div>
        </div>
        <div class="home-delivery__unified-zone">
          <div class="home-delivery__unified-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div class="home-delivery__unified-body">
            <span class="home-delivery__zone-badge">NATIONWIDE</span>
            <h3 class="home-delivery__zone-name">Other States</h3>
            <p class="home-delivery__zone-detail"><strong>4–10 days</strong>.</p>
          </div>
        </div>
      </div>

      <!-- Please Note Disclaimer Box -->
      <div class="home-delivery__notes">
        <div class="home-delivery__notes-head">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h4>PLEASE NOTE:</h4>
        </div>
        <ul class="home-delivery__notes-list">
          <li>Delivery fees are determined by the dispatch rider or logistics company, not Tzorah&rsquo;s Emporium.</li>
          <li>Orders are typically processed and handed over for dispatch within <strong>24&ndash;48 hours</strong>.</li>
          <li>Delivery timelines are estimates and may vary due to distance, logistics availability or unforeseen delays.</li>
          <li>Once an order has been handed over to the logistics provider, delays outside our control may occur.</li>
        </ul>
        <div class="home-delivery__notes-actions">
          <NuxtLink to="/delivery" class="home-delivery__link hover-underline">
            View dedicated delivery policy page &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-delivery {
  background-color: #f7f5f0;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 4.5rem 0;
}

.home-delivery__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3rem auto;
}

.home-delivery__eyebrow {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  color: var(--color-accent);
  display: block;
  margin-bottom: 0.5rem;
}

.home-delivery__title {
  font-family: var(--font-sans);
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-dark);
  margin-bottom: 0.75rem;
}

.home-delivery__sub {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.home-delivery__divider {
  width: 48px;
  height: 2px;
  background-color: var(--color-accent);
  margin: 1.25rem auto 0 auto;
}

/* ─── Grid ─────────────────────────────────────── */
.home-delivery__grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.home-delivery__card {
  background-color: #ffffff;
  padding: 1.75rem 1.35rem;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border-top: 3px solid var(--color-accent);
  flex: 1 1 0;
  min-width: 0;
}

.home-delivery__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.home-delivery__icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgba(201, 168, 106, 0.12);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.home-delivery__zone-badge {
  font-family: var(--font-sans);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 0.35rem;
}

.home-delivery__zone-name {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.home-delivery__zone-detail {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  color: var(--color-text-muted);
  line-height: 1.45;
  margin-top: auto;
}

/* ─── Notes Box ────────────────────────────────── */
.home-delivery__notes {
  background-color: #ffffff;
  border: 1px solid rgba(201, 168, 106, 0.35);
  padding: 1.75rem 2rem;
  border-radius: 4px;
}

.home-delivery__notes-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.home-delivery__notes-head svg {
  color: var(--color-accent);
  flex-shrink: 0;
}

.home-delivery__notes-head h4 {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-text-dark);
}

.home-delivery__notes-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 1.5rem;
}

.home-delivery__notes-list li {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  color: #333333;
  line-height: 1.45;
  position: relative;
  padding-left: 1.15rem;
}

.home-delivery__notes-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 1.1rem;
  line-height: 1;
}

.home-delivery__notes-actions {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 1rem;
  text-align: right;
}

.home-delivery__link {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  text-decoration: none;
}

/* ─── Unified mobile card ──────────────────────── */
.home-delivery__unified-card {
  display: none;
}

@media (max-width: 1024px) {
  .home-delivery__notes-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .home-delivery {
    padding: 3rem 0;
  }
  .home-delivery__title {
    font-size: 1.4rem;
  }

  /* Hide individual cards, show unified card */
  .home-delivery__grid {
    display: none;
  }
  .home-delivery__unified-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    margin-bottom: 2.5rem;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    border-top: 3px solid var(--color-accent);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
    overflow: hidden;
  }
  .home-delivery__unified-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.25rem 0.75rem;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
  .home-delivery__unified-zone:nth-child(2n) {
    border-right: none;
  }
  .home-delivery__unified-zone:nth-child(3),
  .home-delivery__unified-zone:nth-child(4) {
    border-bottom: none;
  }
  .home-delivery__unified-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(201, 168, 106, 0.12);
    color: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;
    flex-shrink: 0;
  }
  .home-delivery__unified-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-delivery__unified-body .home-delivery__zone-badge {
    font-size: 0.5rem;
    letter-spacing: 0.1em;
    margin-bottom: 0.2rem;
  }
  .home-delivery__unified-body .home-delivery__zone-name {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    line-height: 1.25;
  }
  .home-delivery__unified-body .home-delivery__zone-detail {
    font-size: 0.65rem;
    line-height: 1.4;
    color: var(--color-text-muted);
  }
  .home-delivery__notes {
    padding: 1.25rem;
  }
  .home-delivery__notes-actions {
    text-align: left;
  }
}
</style>
