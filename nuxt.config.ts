export default defineNuxtConfig({
  head:{
   /*  meta: [
      { name: 'google-signin-client_id', content: process.env.NUXT_GOOGLE_CLIENT_ID }
    ] */
  },
  app:{
  },
  modules: ['@nuxtjs/tailwindcss','@vite-pwa/nuxt' ,'@nuxtjs/sitemap','nuxt-vue3-google-signin'],
  buildModules: [
    'nuxt-vite'
  ],
  site:{
    url: process.env.NUXT_BASE_URL
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Trip items list app',
      short_name: 'TripItemsApp',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  ssr: false,
  googleSignIn: {
    clientId: process.env.NUXT_GOOGLE_CLIENT_ID
  },
  runtimeConfig: {
    public: {
      host: process.env.NUXT_API_URL || 'TEST',
      pass: process.env.NUXT_API_PASS || 'TEST',
    },
  },
});
