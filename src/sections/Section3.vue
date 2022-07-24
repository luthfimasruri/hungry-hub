<script setup>
import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, A11y } from 'swiper'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/outline'
import { useSection3Store } from '../stores/sections'
import { useCitiesStore } from '../stores/cities'
import { useURL } from '../composables/url'
import { useBreakpoint } from '../composables/breakpoint'
import VCardRestaurant from '../components/VCardRestaurant.vue'

const section3Store = useSection3Store()
await section3Store.fetchSection3()

const citiesStore = useCitiesStore()
const { currentCityId } = storeToRefs(citiesStore)
watch(currentCityId, async () => {
  await section3Store.fetchSection3()
})

const { pathToURL } = useURL()
const onSwiper = () => {}
const onSlideChange = () => {}
const modules = [Navigation, Pagination, A11y]

const { xlOnly, lgAndUp, mdAndUp, smAndUp } = useBreakpoint()
const slidesPerView = computed(() => {
  return xlOnly() ? 5 : lgAndUp() ? 4 : mdAndUp() ? 3 : smAndUp() ? 2 : 1
})
</script>

<template>
  <div data-cy="section3" class="bg-white">
    <div class="mx-auto py-6 px-4 sm:py-12 sm:px-8 lg:max-w-7xl lg:px-8">
      <h2
        data-cy="section3-title"
        class="text-center text-2xl font-extrabold tracking-tight text-gray-900"
      >
        {{ section3Store.title }}
      </h2>
      <div data-cy="section3-slider" class="relative -mx-2">
        <swiper
          :modules="modules"
          :slides-per-view="slidesPerView"
          :space-between="16"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
            el: '.swiper-custom-pagination',
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="py-6 px-2"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <swiper-slide
            v-for="item in section3Store.data"
            :key="item.id"
            class=""
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
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next -right-7 focus:outline-none">
          <ChevronRightIcon class="h-8 w-8" />
        </div>
        <div class="swiper-button-prev -left-7 focus:outline-none">
          <ChevronLeftIcon class="h-8 w-8" />
        </div>
      </div>
      <div class="relative h-4">
        <div class="swiper-custom-pagination absolute inset-0 h-4 p-1"></div>
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
.swiper-custom-pagination .swiper-pagination-bullet:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
