export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@vite-pwa/nuxt'],
  buildModules: [
    'nuxt-vite'
  ],
  ssr: false,
  runtimeConfig: {
    public: {
      host: process.env.NUXT_API_URL || 'TEST',
      pass: process.env.NUXT_API_PASS || 'TEST',
    },
  },
});
