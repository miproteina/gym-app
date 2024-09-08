import type { Preview } from '@storybook/vue3'
import { IonApp, IonicVue } from '@ionic/vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

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
    template:
      '<ion-app class="p-6"><ion-content :fullscreen="true" class="ion-padding"><story/></ion-content></ion-app>',
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
