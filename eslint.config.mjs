// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// Your custom configs here
const config = {
  ignores: ['ios/**', 'android/**'],
}

export default withNuxt(config)
