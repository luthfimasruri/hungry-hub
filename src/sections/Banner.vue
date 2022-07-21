<script setup>
import { useI18n } from 'vue-i18n'
import { useBannersStore } from '../stores/banners'
import { useConfigStore } from '../stores/config'
const banners = useBannersStore()
await banners.fetchBanners()

const config = useConfigStore()
await config.fetchConfig()

const { t } = useI18n()
function getBannerUrl(path) {
  return `${import.meta.env.VITE_API_BASE_URL}${path}`
}
</script>

<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="relative shadow-xl sm:overflow-hidden">
      <div class="absolute inset-0">
        <img
          class="h-full w-full object-cover"
          :src="getBannerUrl(banners.homeBanner.desktop_versions[0].url)"
          alt="People working on laptops"
        />
        <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" />
      </div>
      <div class="relative px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8">
        <h1
          class="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
        >
          <span class="block text-white">{{ config.appTitle }}</span>
        </h1>
        <p
          class="mx-auto mt-6 max-w-lg text-center text-xl text-gray-300 sm:max-w-3xl"
        >
          {{ config.appDescription }}
        </p>
        <div class="">
          <form
            action="#"
            method="POST"
            class="mx-auto mt-3 flex max-w-3xl items-center rounded-full bg-white"
          >
            <label for="email" class="sr-only">Email</label>
            <img
              class="hidden h-9 w-9 p-2 sm:inline"
              src="/images/icon-search-red.png"
              alt="Search"
            />
            <input
              type="email"
              name="email"
              id="email"
              class="block w-full rounded-full border-transparent py-2 text-base placeholder-gray-500 shadow-sm focus:border-black focus:ring-black sm:flex-1"
              :placeholder="t('search_placeholder')"
            />
            <button
              type="submit"
              class="mt-0 inline-flex w-auto flex-shrink-0 items-center rounded-full border-2 border-red bg-red-500 p-1 text-base font-medium text-white shadow-sm focus:outline-none sm:px-6 sm:py-2"
            >
              <span class="hidden sm:inline">{{ t('find_restaurant') }}</span>
              <img
                alt="Vue logo"
                class="sm:hidden"
                src="/images/search-button-red.png"
                width="32"
                height="32"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
