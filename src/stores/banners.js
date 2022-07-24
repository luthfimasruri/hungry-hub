import { defineStore } from 'pinia'
import { useCitiesStore } from './cities'
import { useApi } from '../composables/api'

const { api } = useApi()

export const useBannersStore = defineStore({
  id: 'banners',
  state: () => ({
    data: [],
    loading: false,
  }),
  getters: {
    homeBanner: (state) => {
      const homePageBanner = state.data.find((item) => {
        return item.locations.length
          ? item.locations.includes('home_page')
          : false
      })
      return homePageBanner.desktop_versions[0].url
    },
  },
  actions: {
    setData(data) {
      this.data = data
    },
    async fetchBanners() {
      this.loading = true
      const citiesStore = useCitiesStore()
      const data = await api.get(
        `/api/v5/banners.json?city_id=${citiesStore.currentCityId}`
      )
      this.setData(data)
      this.loading = false
    },
  },
})
