import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import useLocales from './composables/locales'
const { currentLocale } = useLocales()

/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from './locales/en.json'
import th from './locales/th.json'
const i18n = createI18n({
  locale: currentLocale,
  messages: {
    en,
    th,
  },
})

import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
