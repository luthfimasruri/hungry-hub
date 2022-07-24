import { defineStore } from 'pinia'
import { useApi } from '../composables/api'

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
    setData(data) {
      this.data = data
    },
    async fetchConfig() {
      this.loading = true
      const { data } = await api.get('/api/v5/config.json')
      this.setData(data)
      this.loading = false
    },
  },
})
