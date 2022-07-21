<script setup>
import { computed } from 'vue'
import { useBreakpoint } from '../../composables/breakpoint'

const { xlAndUp, lgAndUp } = useBreakpoint()
const slidesPerView = computed(() => {
  return xlAndUp() ? 5 : lgAndUp ? 4 : 4
})
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto py-6 px-4 sm:py-12 sm:px-8 lg:max-w-7xl lg:px-8">
      <div class="mx-auto h-5 w-full max-w-xs rounded-full bg-gray-300"></div>
      <div
        class="-mx-4 flex space-x-4 overflow-x-scroll py-6 px-4 md:overflow-x-visible"
      >
        <template v-for="i in slidesPerView" :key="i">
          <div
            class="w-64 flex-none rounded-md bg-white shadow-lg md:w-full md:flex-auto"
          >
            <div class="flex animate-pulse flex-col">
              <div class="aspect-video w-full rounded-t-md bg-gray-300"></div>
              <div class="m-3">
                <div class="h-4 rounded-full bg-gray-300"></div>
                <div class="mt-4 flex space-x-2">
                  <div class="h-3 w-1/3 rounded-full bg-gray-300"></div>
                  <div class="h-3 w-1/3 rounded-full bg-gray-300"></div>
                </div>
                <div class="mt-3 flex space-x-2">
                  <div class="h-3 w-1/2 rounded-full bg-gray-300"></div>
                  <div class="h-3 w-1/4 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
