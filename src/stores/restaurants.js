import { defineStore } from 'pinia'
import { useApi } from '../composables/api'

const { api } = useApi()

export const useRestaurantsStore = defineStore({
  id: 'restaurants',
  state: () => ({
    title: '',
    data: [],
    loading: false,
  }),
  getters: {},
  actions: {
    setData(data) {
      this.data = data
    },
    setTitle(title) {
      this.title = title
    },
    async fetchRestaurants(name_like = '') {
      this.loading = true
      const { data } = await api.get(
        `/api/v5/restaurants/search.json?page[size]=10&page[number]=1&name_like=${name_like}`
      )
      this.setData(data)
      this.loading = false
    },
  },
})
