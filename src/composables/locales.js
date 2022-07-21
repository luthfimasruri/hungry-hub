import { computed } from 'vue'

const useLocales = () => {
  const localeItems = computed(() => {
    return [
      {
        text: 'TH',
        value: 'th',
        icon: '/images/flag-th.png',
      },
      {
        text: 'EN',
        value: 'en',
        icon: '/images/flag-en.png',
      },
    ]
  })
  const i18nLocaleStorage = localStorage.getItem('i18n_locale')
  const currentLocale = i18nLocaleStorage ? i18nLocaleStorage : 'th'
  const onChangeLocale = (locale) => {
    localStorage.setItem('i18n_locale', locale)
    window.location.reload()
  }
  return {
    onChangeLocale,
    currentLocale,
    localeItems,
  }
}

export { useLocales }
export default useLocales
