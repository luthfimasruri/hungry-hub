<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useSection3Store } from '../stores/sections'
import { useCitiesStore } from '../stores/cities'
import { useURL } from '../composables/url'
import VCardRestaurant from '../components/VCardRestaurant.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const section3Store = useSection3Store()
await section3Store.fetchSection3()

const citiesStore = useCitiesStore()
const { currentCityId } = storeToRefs(citiesStore)
watch(currentCityId, async () => {
  await section3Store.fetchSection3()
})

const { pathToURL } = useURL()
</script>

<template>
  <div data-cy="section3-mobile" class="bg-white">
    <div class="mx-auto py-6 px-4 sm:py-12 sm:px-8 lg:max-w-7xl lg:px-8">
      <h2
        data-cy="section3-mobile-title"
        class="text-center text-2xl font-extrabold tracking-tight text-gray-900"
      >
        {{ section3Store.title }}
      </h2>
      <div
        data-cy="section3-mobile-slider"
        class="-mx-4 flex space-x-3 overflow-x-scroll px-4"
      >
        <div
          v-for="item in section3Store.data"
          :key="item.id"
          class="w-64 flex-none flex-shrink-0 py-6"
        >
          <VCardRestaurant
            :name="item.attributes.name"
            :price="item.attributes.price_v2.format"
            :cuisine="item.attributes.cuisine"
            :location="item.attributes.location || ''"
            :totalLocation="item.attributes.total_locations || 0"
            :image="pathToURL(item.attributes.cover.thumb)"
            :review-score="item.attributes.avg_reviews"
            :review-count="item.attributes.total_reviews"
            :custom-text="item.attributes.custom_text"
            :accept-delivery="item.attributes.package_types.includes('hah')"
            :accept-xperience="item.attributes.package_types.includes('xp')"
            :accept-dine-in="
              item.attributes.package_types.some((r) =>
                ['ayce', 'pp'].includes(r)
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-button-next::after {
  display: none;
}
.swiper-button-prev::after {
  display: none;
}
</style>
