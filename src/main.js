import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { useLocales } from './composables/locales'
import Rollbar from 'rollbar'
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

const rollbar = new Rollbar({
  accessToken: import.meta.env.VITE_ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: import.meta.env.MODE,
  },
})

import App from './App.vue'
import router from './router'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './assets/css/main.css'

const app = createApp(App)
app.provide('$rollbar', rollbar)
app.config.errorHandler = (err, vm, info) => {
  rollbar.error(err, {
    vm,
    info,
  })
}
app.use(createPinia())
app.use(i18n())
app.use(router)
app.mount('#app')

export { i18n as useI18n, createPinia as usePinia }
