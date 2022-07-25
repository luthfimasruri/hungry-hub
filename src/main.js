import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { useLocales } from './composables/locales'
const { currentLocale } = useLocales()

/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from './locales/en.json'
import th from './locales/th.json'
const i18n = (locale = currentLocale) => {
  return createI18n({
    locale,
    messages: {
      en,
      th,
    },
  })
}

import App from './App.vue'
import router from './router'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './assets/css/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(i18n())
app.use(router)
app.mount('#app')

export { i18n as useI18n, createPinia as usePinia }
