<script setup>
import { useBannersStore } from '../stores/banners'
import { useConfigStore } from '../stores/config'
const banners = useBannersStore()
await banners.fetchBanners()
function getBannerUrl(path) {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`
}

const config = useConfigStore()
await config.fetchConfig()
</script>

<template>
  <!-- <pre>{{ banners.homeBanner }}</pre> -->
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="">
      <div class="relative shadow-xl sm:overflow-hidden">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            :src="getBannerUrl(banners.homeBanner.desktop_versions[0].url)"
            alt="People working on laptops"
          />
          <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span class="block text-white">{{ config.appTitle }}</span>
          </h1>
          <p
            class="mx-auto mt-6 max-w-lg text-center text-xl text-gray-300 sm:max-w-3xl"
          >
            {{ config.appDescription }}
          </p>
          <div
            class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
          >
            <div
              class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0"
            >
              <a
                href="#"
                class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
              >
                Get started
              </a>
              <a
                href="#"
                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
