import { defineStore } from 'pinia'
import { useApi } from '../composables/api'
import { useCitiesStore } from './cities'

const { api } = useApi()

export const useSection3Store = defineStore({
  id: 'section3',
  state: () => ({
    title: '',
    data: [],
    loading: false,
  }),
  getters: {},
  actions: {
    setSection3Data(data) {
      this.data = data
    },
    setSection3Title(title) {
      this.title = title
    },
    async fetchSection3() {
      this.loading = true
      const citiesStore = useCitiesStore()
      const { data, title } = await api.get(
        `/api/v5/homes/section_3.json?city_id=${citiesStore.currentCityId}`
      )
      this.setSection3Title(title)
      this.setSection3Data(data)
      this.loading = false
    },
  },
})
