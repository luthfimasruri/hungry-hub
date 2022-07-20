import { defineStore } from 'pinia'
import useApi from '../composables/api'
const { api } = useApi()

export const useCitiesStore = defineStore({
  id: 'cities',
  state: () => ({
    data: [],
    selected: null,
    loading: false,
  }),
  getters: {},
  actions: {
    setCities(cities) {
      this.data = cities
    },
    setCityById(id) {
      this.selected = this.data.find((item) => item.id === id)
    },
    async initCities() {
      this.loading = true
      const { data: cities } = await api.get('/api/v5/cities.json')
      this.setCities(cities)
      this.setCityById(cities[0].id)
      this.loading = false
    },
  },
})
