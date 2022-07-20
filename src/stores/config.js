import { defineStore } from 'pinia'
import useApi from '../composables/api'
const { api } = useApi()

export const useConfigStore = defineStore({
  id: 'config',
  state: () => ({
    data: null,
    loading: false,
  }),
  getters: {
    appTitle: (state) => state.data?.app_title,
    appDescription: (state) => state.data?.app_description,
  },
  actions: {
    setConfig(config) {
      this.data = config
    },
    async fetchConfig() {
      this.loading = true
      const { data: config } = await api.get('/api/v5/config.json')
      this.setConfig(config)
      this.loading = false
    },
  },
})
