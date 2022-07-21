<script setup>
import VCardRestaurant from '../components/VCardRestaurant.vue'
import { useI18n } from 'vue-i18n'
import { useSection3Store } from '../stores/sections'
import { useURL } from '../composables/url'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const section3 = useSection3Store()
await section3.fetchSection3()

const { t } = useI18n()
const { pathToURL } = useURL()
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto py-6 px-4 sm:py-12 sm:px-8 lg:max-w-7xl lg:px-8">
      <h2
        class="text-center text-2xl font-extrabold tracking-tight text-gray-900"
      >
        {{ t('section3_title') }}
      </h2>
      <div class="-mx-3">
        <div class="flex space-x-3 overflow-x-scroll px-3">
          <div
            v-for="item in section3.data"
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
            />
          </div>
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
