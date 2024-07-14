import type { Preview } from '@storybook/vue3'
import { IonApp, IonicVue } from '@ionic/vue'

import '../assets/css/tailwind.css'

import { setup } from '@storybook/vue3'

import { withThemeByClassName } from '@storybook/addon-themes'
setup(app => {
  app.use(IonicVue)
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
