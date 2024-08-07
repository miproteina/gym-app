import type { Preview } from '@storybook/vue3'
import { IonApp, IonicVue } from '@ionic/vue'

import '../assets/css/tailwind.css'

import { setup } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'

// Ionicons script
const addIoniconsScript = () => {
  const script = document.createElement('script')
  script.type = 'module'
  script.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
  document.head.appendChild(script)

  const scriptNoModule = document.createElement('script')
  scriptNoModule.setAttribute('nomodule', '')
  scriptNoModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
  document.head.appendChild(scriptNoModule)
}

setup(app => {
  app.use(IonicVue)
  addIoniconsScript() // Ensure Ionicons are loaded
})

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  story => ({
    components: { story, IonApp },
    template: '<ion-app><story /></ion-app>',
  }),
]

const preview: Preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
