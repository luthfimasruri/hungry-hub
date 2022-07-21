<script setup>
import VCardRestaurant from '../components/VCardRestaurant.vue'
import { useI18n } from 'vue-i18n'
import { useSection3Store } from '../stores/sections'
import { useURL } from '../composables/url'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper'
import { useBreakpoint } from '../composables/breakpoint'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/outline'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { computed } from 'vue'

const section3 = useSection3Store()
await section3.fetchSection3()

const { t } = useI18n()
const { pathToURL } = useURL()
const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const modules = [Navigation, Pagination, A11y]

const { lgAndUp, mdAndUp, smAndUp } = useBreakpoint()
const slidesPerView = computed(() => {
  return lgAndUp() ? 5 : mdAndUp() ? 3 : smAndUp() ? 2 : 1
})
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto py-6 px-4 sm:py-12 sm:px-8 lg:max-w-7xl lg:px-8">
      <h2
        class="text-center text-2xl font-extrabold tracking-tight text-gray-900"
      >
        {{ t('section3_title') }}
      </h2>
      <div class="relative -mx-2">
        <swiper
          :modules="modules"
          :slides-per-view="slidesPerView"
          :space-between="16"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="py-6 px-2"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <swiper-slide
            v-for="item in section3.data"
            :key="item.id"
            class="pb-6"
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
              :accept-delivery="item.attributes.package_types.includes('hah')"
              :accept-xperience="item.attributes.package_types.includes('xp')"
              :accept-dine-in="
                item.attributes.package_types.some((r) =>
                  ['ayce', 'pp'].includes(r)
                )
              "
            />
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next -right-7 -mt-10">
          <ChevronRightIcon class="h-8 w-8" />
        </div>
        <div class="swiper-button-prev -left-7 -mt-10">
          <ChevronLeftIcon class="h-8 w-8" />
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
