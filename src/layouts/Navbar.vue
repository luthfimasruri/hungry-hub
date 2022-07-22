<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { Disclosure } from '@headlessui/vue'
import { useNavbar } from '../composables/navbar'
import VDropdown from '../components/VDropdown.vue'
import NavbarCities from './NavbarCities.vue'
import NavbarSearch from './NavbarSearch.vue'
import NavbarLanguage from './NavbarLanguage.vue'

const { t } = useI18n({ useScope: 'global' })
const { appItems, menuItems } = useNavbar()
</script>

<template>
  <!-- Top Menu -->
  <div class="bg-gray-200">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ul class="flex items-center justify-end">
        <template v-for="item in menuItems" :key="item.text">
          <li class="">
            <a
              :href="item.href"
              class="flex h-8 items-center px-2 text-sm text-gray-700 hover:text-gray-900 lg:px-4"
            >
              {{ item.text }}
            </a>
          </li>
        </template>
        <li>
          <VDropdown
            :title="t('menu.download_app')"
            :items="appItems"
            v-slot="{ items }"
            class="z-20"
          >
            <template v-for="item in items" :key="item.text">
              <a
                :href="item.href"
                class="flex items-center px-2 text-sm text-gray-700 hover:text-gray-900 lg:px-4"
              >
                <img :src="item.icon" :alt="item.text" class="my-1" />
              </a>
            </template>
          </VDropdown>
        </li>
        <li>
          <NavbarLanguage />
        </li>
      </ul>
    </div>
  </div>

  <!-- Middle Navigation -->
  <Disclosure as="nav" class="sticky top-0 z-10 bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-11 justify-between">
        <div class="flex items-center">
          <RouterLink class="flex-shrink-0" to="/"
            ><img
              alt="Hungry Hub Logo"
              class=""
              src="/images/logo-new-full.png"
              width="130"
          /></RouterLink>
          <div class="hidden md:ml-6 md:flex md:space-x-8"></div>
        </div>
        <div class="flex items-center">
          <!-- Search -->
          <NavbarSearch />
          <!-- Cities Dropdown -->
          <NavbarCities />
          <!-- Signin or Register -->
          <button
            type="button"
            class="ml-2 h-8 rounded-full border border-red-300 bg-white px-3 py-1 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:border-black focus:outline-none focus:ring-1 focus:ring-black md:ml-3"
          >
            {{ t('signin_register') }}
          </button>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<style scoped></style>
