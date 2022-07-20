import { defineStore } from 'pinia'
import useApi from '../composables/api'
const { api } = useApi()

export const useBannersStore = defineStore({
  id: 'banners',
  state: () => ({
    data: [],
    selected: null,
    loading: false,
  }),
  getters: {
    homeBanner: (state) => {
      return state.data.find((item) => {
        return item.locations.length
          ? item.locations.includes('home_page')
          : false
      })
    },
  },
  actions: {
    setBanners(banners) {
      this.data = banners
    },
    async fetchBanners() {
      this.loading = true
      const banners = await api.get('/api/v5/banners.json?city_id=1')
      this.setBanners(banners)
      this.loading = false
    },
  },
})
