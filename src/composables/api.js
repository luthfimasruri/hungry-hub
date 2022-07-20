import axios from 'axios'

const useApi = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  })
  const i18nLocaleStorage = localStorage.getItem('i18n_locale')
  api.defaults.headers.common['x-hh-language'] = i18nLocaleStorage || 'en'
  api.interceptors.response.use(({ data }) => {
    return data
  })

  return {
    api,
  }
}

export default useApi
