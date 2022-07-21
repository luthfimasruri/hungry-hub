import { defineStore } from 'pinia'
import { useApi } from '../composables/api'

const { api } = useApi()

export const useCitiesStore = defineStore({
  id: 'cities',
  state: () => ({
    data: [],
    currentCityId: '1',
    currentCity: null,
    loading: false,
  }),
  actions: {
    setCities(cities) {
      this.data = cities
    },
    setCityById(id) {
      this.currentCityId = id
      this.currentCity = this.data.find((city) => city.id === id)
    },
    async initCities() {
      this.loading = true
      const { data: cities } = await api.get('/api/v5/cities.json')
      this.setCities(cities)
      this.setCityById(this.currentCityId)
      this.loading = false
    },
  },
})
