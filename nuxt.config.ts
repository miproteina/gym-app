// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/ionic', '@nuxt/test-utils/module', '@nuxt/eslint'],
  ssr: false,
  typescript: {
    typeCheck: true,
  },
})
