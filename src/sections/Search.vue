<script setup>
import VCardRestaurantFull from '../components/VCardRestaurantFull.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRestaurantsStore } from '../stores/restaurants'
import { useURL } from '../composables/url'

const { pathToURL } = useURL()
const route = useRoute()
const restaurantsStore = useRestaurantsStore()

watch(
  () => route.query.name_like,
  async (val) => {
    if (val && val.length > 0) {
      await restaurantsStore.fetchRestaurants(val)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div data-cy="restaurants-search" class="bg-white">
    <div class="mx-auto py-6 px-4 sm:py-12 sm:px-8 lg:max-w-7xl lg:px-8">
      <h3 class="mb-6 text-xl font-bold">
        Here are your search result for
        <span class="italic">"{{ route.query.name_like }}"</span>
      </h3>
      <div v-if="restaurantsStore.loading">
        <div>Loading...</div>
      </div>
      <div data-cy="restaurants-list" v-else class="flex flex-col space-y-4">
        <div
          data-cy="restaurants-list-item"
          v-for="item in restaurantsStore.data"
          :key="item.id"
          class=""
        >
          <VCardRestaurantFull
            :name="item.attributes.name"
            :price="item.attributes.price_per_person?.format || '-'"
            :cuisine="item.attributes.cuisine"
            :location="item.attributes.location || ''"
            :totalLocation="item.attributes.total_locations || 0"
            :opening-hours="item.attributes.opening_hours_short"
            :image="pathToURL(item.attributes.image_cover_url?.thumb)"
            :image-logo="pathToURL(item.attributes.logo_url?.thumb)"
            :hashtags="item.attributes.hashtags"
            :review-score="item.attributes.reviews_score"
            :review-count="item.attributes.reviews_count"
            :custom-text="item.attributes.custom_text"
            :accept-delivery="
              item.attributes.available_package_types.includes('hah')
            "
            :accept-xperience="
              item.attributes.available_package_types.includes('xp')
            "
            :accept-dine-in="
              item.attributes.available_package_types.some((r) =>
                ['ayce', 'pp'].includes(r)
              )
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
