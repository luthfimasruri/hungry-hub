import { defineStore } from 'pinia'
import { useApi } from '../composables/api'

const { api } = useApi()

export const useCitiesStore = defineStore({
  id: 'cities',
  state: () => ({
    data: [],
    currentCity: null,
    currentCityId: localStorage.getItem('city_id') || '1',
    loading: false,
  }),
  actions: {
    setData(data) {
      this.data = data
    },
    setCityById(id) {
      this.currentCityId = id
      localStorage.setItem('city_id', id)
      this.currentCity = this.data.find((city) => city.id === id)
    },
    async initCities() {
      this.loading = true
      const { data } = await api.get('/api/v5/cities.json')
      this.setData(data)
      this.setCityById(this.currentCityId)
      this.loading = false
    },
  },
})
