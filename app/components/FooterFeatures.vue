<template>
  <section class="footer-features">
    <div class="container">
      <div class="footer-features__grid">
        <div v-for="(item, idx) in footerFeatureList" :key="idx" class="footer-features__item">
          <div class="footer-features__icon-wrapper">
            <component :is="item.icon" class="footer-features__icon" />
          </div>
          <div class="footer-features__info">
            <h4 class="footer-features__title">{{ item.title }}</h4>
            <p class="footer-features__desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const TruckIcon = () => h(
  'svg',
  {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '1.25',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  },
  [
    h('rect', { x: '1', y: '3', width: '15', height: '13', rx: '2', ry: '2' }),
    h('polygon', { points: '16 8 20 8 23 11 23 16 16 16 16 8' }),
    h('circle', { cx: '5.5', cy: '18.5', r: '2.5' }),
    h('circle', { cx: '18.5', cy: '18.5', r: '2.5' })
  ]
)

const RotateIcon = () => h(
  'svg',
  {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '1.25',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  },
  [
    h('path', { d: 'M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67' })
  ]
)

const HeadphonesIcon = () => h(
  'svg',
  {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '1.25',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  },
  [
    h('path', { d: 'M3 18v-6a9 9 0 0 1 18 0v6' }),
    h('path', { d: 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' })
  ]
)

const LockIcon = () => h(
  'svg',
  {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '1.25',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  },
  [
    h('rect', { x: '3', y: '11', width: '18', height: '11', rx: '2', ry: '2' }),
    h('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' })
  ]
)

const footerFeatureList = [
  {
    icon: TruckIcon,
    title: 'NATIONWIDE DELIVERY',
    description: 'Port Harcourt & across Nigeria'
  },
  {
    icon: RotateIcon,
    title: 'EASY RETURNS',
    description: '30-day return policy'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 SUPPORT',
    description: "We're here to help"
  },
  {
    icon: LockIcon,
    title: 'EXCLUSIVE ACCESS',
    description: 'Early access to drops'
  }
]
</script>

<style scoped>
.footer-features {
  background-color: var(--color-bg-light);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2.5rem 0;
}

.footer-features__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.footer-features__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.footer-features__icon-wrapper {
  color: var(--color-text-dark);
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-features__title {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dark);
}

.footer-features__desc {
  font-family: var(--font-serif);
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

/* Responsive configurations */
@media (max-width: 992px) {
  .footer-features__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
  }
  
  .footer-features__item {
    justify-content: flex-start;
    padding-left: 2rem;
  }
}

@media (max-width: 576px) {
  .footer-features__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-features__item {
    padding-left: 1rem;
  }
}
</style>
