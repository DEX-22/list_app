export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@vite-pwa/nuxt'],
  buildModules: [
    'nuxt-vite'
  ],
  pwa:{
    name:"trips_app",
    icons: "",
    start_url:"",
    display: "fullscreen" ,
    prefer_related_applications:false
  },
  ssr: false,
  runtimeConfig: {
    public: {
      host: process.env.NUXT_API_URL || 'TEST',
      pass: process.env.NUXT_API_PASS || 'TEST',
    },
  },
});
