<script setup>
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NavbarCities from './NavbarCities.vue'

const { push } = useRouter()
const { t } = useI18n({ useScope: 'global' })
const expanded = ref(false)
const search = ref(null)
const searchInput = ref(null)

const onSearch = () => {
  push({ name: 'restaurants-search', query: { name_like: search.value } })
}

const onSearchToggle = () => {
  expanded.value = !expanded.value
  if (expanded.value) {
    nextTick(() => {
      searchInput.value.focus()
    })
  }
}
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
          v-model="search"
          data-cy="navbar-search-input"
          ref="searchInput"
          type="text"
          class="h-8 w-64 border-0 border-b border-gray-300 pr-6 text-sm focus:border-gray-400 focus:ring-0"
          :placeholder="t('search_placeholder')"
          @keyup.enter="onSearch"
        />
      </div>
    </transition>
    <button
      data-cy="navbar-search-toggle"
      type="button"
      class="relative rounded-full ring-black focus:outline-none"
      :class="expanded ? 'ring-2' : 'ring-0'"
      @click="onSearchToggle"
    >
      <img
        alt="Search Button"
        class="h8 w-8"
        src="/images/search-button-red.png"
      />
    </button>
  </div>
</template>
