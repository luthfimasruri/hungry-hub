<script setup>
import Navbar from './layouts/Navbar.vue'
import NavbarMobile from './layouts/NavbarMobile.vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import useBreakpoint from './composables/breakpoint'
import { useCitiesStore } from './stores/cities'

const { mdAndUp } = useBreakpoint()
const { t } = useI18n({
  inheritLocale: true,
  useScope: 'global',
})
const cities = useCitiesStore()
if (cities.data.length === 0) {
  cities.initCities()
}
</script>

<template>
  <header>
    <template v-if="mdAndUp()">
      <Navbar />
    </template>
    <template v-else>
      <NavbarMobile />
    </template>
  </header>

  <RouterView />
  <footer>
    <p>{{ t('language') }}</p>
  </footer>
</template>

<style scoped></style>
