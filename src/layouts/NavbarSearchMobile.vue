<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { XIcon } from '@heroicons/vue/outline'
import NavbarCities from './NavbarCities.vue'

const { t } = useI18n({ useScope: 'global' })
const open = ref(false)
</script>

<template>
  <div v-show="open" class="absolute inset-0 flex items-center bg-white">
    <div class="flex w-full items-center pr-4 pl-2">
      <button
        @click="open = !open"
        class="inline-flex items-center justify-center rounded-full p-1 text-red-400 hover:bg-gray-100 hover:text-red-500 focus:outline-none"
      >
        <span class="sr-only">Open main menu</span>
        <XIcon class="block h-6 w-6" aria-hidden="true" />
      </button>
      <NavbarCities
        class="w-28 flex-none"
        inner-class="border-none focus:ring-0"
      />
      <hr class="mr-2 h-8 border-r border-gray-300" />
      <input
        class="block h-8 grow border-0 border-b border-gray-300 pr-6 text-sm focus:border-gray-400 focus:ring-0"
        type="text"
        :placeholder="t('search_placeholder')"
      />
      <button
        @click="open = !open"
        type="button"
        class="flex-none rounded-full focus:outline-none focus:ring-2 focus:ring-black"
      >
        <img
          alt="Search Button"
          class=""
          src="/images/search-button-red.png"
          width="32"
          height="32"
        />
      </button>
    </div>
  </div>
  <button
    @click="open = !open"
    type="button"
    class="flex-none rounded-full focus:outline-none focus:ring-2 focus:ring-black"
  >
    <img
      alt="Search Button"
      class=""
      src="/images/search-button-red.png"
      width="32"
      height="32"
    />
  </button>
</template>
