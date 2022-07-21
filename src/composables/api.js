import axios from 'axios'
import { useLocales } from './locales'

const useApi = () => {
  const { currentLocale } = useLocales()
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  })
  api.defaults.headers.common['x-hh-language'] = currentLocale
  api.interceptors.response.use(({ data }) => {
    return data
  })

  return {
    api,
  }
}

export { useApi }
export default useApi
