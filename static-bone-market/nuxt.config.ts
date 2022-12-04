// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  router: { options: { hashMode: true } },
  css: ["assets/main.css"]
})
