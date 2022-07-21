<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useBannersStore } from '../stores/banners'
import { useConfigStore } from '../stores/config'
import { useCitiesStore } from '../stores/cities'
import { useURL } from '../composables/url'

const configStore = useConfigStore()
await configStore.fetchConfig()

const bannersStore = useBannersStore()
await bannersStore.fetchBanners()

const citiesStore = useCitiesStore()
const { currentCityId } = storeToRefs(citiesStore)
watch(currentCityId, async () => {
  await bannersStore.fetchBanners()
})

const { t } = useI18n()
const { pathToURL } = useURL()
</script>

<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="relative shadow-xl sm:overflow-hidden">
      <div class="absolute inset-0">
        <img
          class="h-full w-full object-cover"
          :src="pathToURL(bannersStore.homeBanner)"
          alt="People working on laptops"
        />
        <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" />
      </div>
      <div class="relative px-4 py-12 sm:px-6 sm:py-20 lg:py-28 lg:px-8">
        <h1
          class="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
        >
          <span class="block text-white">{{ configStore.appTitle }}</span>
        </h1>
        <p
          class="mx-auto mt-6 max-w-lg text-center text-xl text-gray-300 sm:max-w-3xl"
        >
          {{ configStore.appDescription }}
        </p>
        <div class="">
          <form
            action="#"
            method="POST"
            class="mx-auto mt-3 flex max-w-3xl items-center rounded-full bg-white"
          >
            <label for="email" class="sr-only">Email</label>
            <img
              class="hidden h-11 w-11 p-3 sm:inline"
              src="/icons/icon-search-red.png"
              alt="Search"
            />
            <input
              type="text"
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
                alt="Search Button"
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
