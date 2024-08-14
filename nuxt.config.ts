import type { DefineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/ionic',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
  tailwindcss: {
    configPath: 'tailwind.config',
    viewer: true,
  },
  ssr: false,
  runtimeConfig: {
    appwrite: {
      endpoint: '',
      projectId: '',
    },
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
}) as DefineNuxtConfig
