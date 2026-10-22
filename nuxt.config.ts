// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/app.css'],

  // Netlify serverless deployment
  nitro: {
    preset: 'netlify'
  },

  app: {
    head: {
      title: 'TZORAH EMPORIUM | Luxury Perfumes, Botanical Oils & Lifestyle Emporium',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover authentic USA oil perfumes, Arabian and designer fragrances, pure essential & natural oils, candle craft supplies, pet care, and luxury intimates at TZORAH EMPORIUM.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    dbUrl: process.env.DATABASE_URL || 'postgresql://postgres:Ebimene0812%3F%3F@localhost:5432/tzorah_emporium',
    secretKey: process.env.SECRET_KEY || 'tzorah-emporium-secret-key-development-2026-secure',
    algorithm: process.env.ALGORITHM || 'HS256',
    accessTokenExpireMinutes: process.env.ACCESS_TOKEN_EXPIRE_MINUTES || '1440',
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY || 'sk_test_mock_secret_key',
    paystackCallbackUrl: process.env.PAYSTACK_CALLBACK_URL || 'http://localhost:3000/payment/verify',
    paystackWebhookSecret: process.env.PAYSTACK_WEBHOOK_SECRET || 'mock_webhook_secret',
    public: {
      apiBase: '/api/v1'
    }
  }
})

