<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useNavbar } from '../composables/navbar'
import NavbarCities from './NavbarCities.vue'
import NavbarSearchMobile from './NavbarSearchMobile.vue'
import NavbarLanguage from './NavbarLanguage.vue'
const { t } = useI18n({ useScope: 'global' })
const { appItems, menuItems } = useNavbar()
</script>

<template>
  <Disclosure
    as="nav"
    data-cy="navbar-mobile"
    class="sticky top-0 z-10 bg-white shadow"
    v-slot="{ open }"
  >
    <div class="relative">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-11 justify-between">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                data-cy="navbar-mobile-toggle"
                class="inline-flex items-center justify-center rounded-full p-1 text-red-400 hover:bg-gray-100 hover:text-red-500 focus:outline-none"
              >
                <span class="sr-only">Open main menu</span>
                <MenuIcon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex flex-shrink-0 items-center">
              <RouterLink to="/"
                ><img
                  alt="Hungry Hub Logo"
                  class=""
                  src="/images/logo-new-full-alternate.png"
                  width="34"
              /></RouterLink>
              <!-- Signin -->
              <button
                type="button"
                class="ml-4 h-8 rounded-full border border-red-300 bg-white px-3 py-1 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:border-black focus:outline-none focus:ring-1 focus:ring-black lg:ml-4"
              >
                {{ t('signin') }}
              </button>
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8"></div>
          </div>
          <div class="flex items-center">
            <!-- Search -->
            <NavbarSearchMobile />
            <!-- City Dropdown -->
            <NavbarCities />
          </div>
        </div>
      </div>

      <!-- Overlay -->
      <div
        v-show="open"
        class="fixed inset-0 top-11 z-10 bg-black bg-opacity-50 transition-all duration-200 ease-in-out"
      ></div>
      <!-- Dropdown Menu -->
      <DisclosurePanel
        data-cy="navbar-mobile-menu"
        class="absolute z-20 md:hidden"
      >
        <div class="z-20 space-y-1">
          <div class="bg-gray-200" style="width: 200px">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ul class="">
                <li class="flex items-center border-b border-gray-300 py-2">
                  <label
                    for="language"
                    class="block text-sm font-medium text-gray-700"
                    >{{ t('language') }}</label
                  >
                  <NavbarLanguage />
                </li>
                <template v-for="item in menuItems" :key="item.text">
                  <li class="py-2 text-sm hover:font-medium">
                    <a
                      href="{{ item.href }}"
                      class="py-2 text-gray-700 hover:text-gray-900"
                    >
                      {{ item.text }}
                    </a>
                  </li>
                </template>
                <li class="border-t border-gray-300 py-4 text-sm">
                  {{ t('menu.download_app') }}
                  <template v-for="item in appItems" :key="item.text">
                    <a :href="item.href" class="mt-2">
                      <img :alt="item.text" class="mt-3" :src="item.icon" />
                    </a>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<style scoped></style>
