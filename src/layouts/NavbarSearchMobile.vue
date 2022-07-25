<script setup>
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { XIcon } from '@heroicons/vue/outline'
import NavbarCities from './NavbarCities.vue'

const { t } = useI18n({ useScope: 'global' })
const { push } = useRouter()

const open = ref(false)
const search = ref(null)
const searchInput = ref(null)

const onSearch = () => {
  push({ name: 'restaurants-search', query: { name_like: search.value } })
}

const onSearchToggle = () => {
  open.value = !open.value
  if (open.value) {
    nextTick(() => {
      searchInput.value.focus()
    })
  }
}
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
        class="ml-0 w-28 flex-none"
        inner-class="border-none focus:ring-0"
      />
      <hr class="mr-2 h-8 border-r border-gray-300" />
      <input
        v-model="search"
        data-cy="navbar-search-input"
        ref="searchInput"
        type="text"
        class="block h-8 min-w-0 grow border-0 border-b border-gray-300 pr-6 text-sm focus:border-gray-400 focus:ring-0"
        :placeholder="t('search_placeholder')"
        @keyup.enter="onSearch"
      />
      <button
        data-cy="navbar-search-button"
        @click="onSearch"
        type="button"
        class="flex-none rounded-full focus:outline-none focus:ring-2 focus:ring-black"
      >
        <img
          alt="Search Button"
          class="h-8 w-8"
          src="/images/search-button-red.png"
        />
      </button>
    </div>
  </div>
  <button
    data-cy="navbar-search-toggle"
    @click="onSearchToggle"
    type="button"
    class="flex-none rounded-full focus:outline-none focus:ring-2 focus:ring-black"
  >
    <img
      alt="Search Button"
      class="h-8 w-8"
      src="/images/search-button-red.png"
    />
  </button>
</template>
