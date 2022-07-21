<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import NavbarCities from './NavbarCities.vue'

const { t } = useI18n({ useScope: 'global' })
const expanded = ref(false)
</script>

<template>
  <div class="relative flex items-center">
    <transition
      v-show="expanded"
      enter-active-class="transition ease-in-out duration-300"
      enter-from-class="opacity-0 transform scale-x-0 translate-x-1/2"
      enter-to-class="opacity-100 transform scale-x-100 translate-x-0"
      leave-active-class="transition ease-in-out duration-300"
      leave-from-class="opacity-100 transform scale-x-100 translate-x-0"
      leave-to-class="opacity-0 transform scale-x-0 translate-x-1/2"
      class="absolute inset-y-0 right-1/2 flex h-8 items-center space-x-2 rounded-l-full bg-white"
    >
      <div>
        <NavbarCities class="w-28" inner-class="border-none" />
        <hr class="h-8 border-r border-gray-300" />
        <input
          class="h-8 w-64 border-0 border-b border-gray-300 pr-6 text-sm focus:border-gray-400 focus:ring-0"
          type="text"
          :placeholder="t('search_placeholder')"
        />
      </div>
    </transition>
    <button
      @click="expanded = !expanded"
      type="button"
      class="relative rounded-full focus:outline-none focus:ring-2 focus:ring-black"
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
</template>
