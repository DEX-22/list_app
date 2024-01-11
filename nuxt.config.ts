export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  runtimeConfig: {
    public: {
      host: process.env.NUXT_API_URL || 'TEST',
      pass: process.env.NUXT_API_PASS || 'TEST',
    },
  },
});
