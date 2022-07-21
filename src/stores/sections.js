import { defineStore } from 'pinia'
import { useApi } from '../composables/api'
const { api } = useApi()

export const useSection3Store = defineStore({
  id: 'section3',
  state: () => ({
    data: [],
    selected: null,
    loading: false,
  }),
  getters: {},
  actions: {
    setSection3(section3) {
      this.data = section3
    },
    async fetchSection3() {
      this.loading = true
      const { data: section3 } = await api.get(
        '/api/v5/homes/section_3.json?city_id=1'
      )
      this.setSection3(section3)
      this.loading = false
    },
  },
})
