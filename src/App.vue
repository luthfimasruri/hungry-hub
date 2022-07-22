<script setup>
import Navbar from './layouts/Navbar.vue'
import NavbarMobile from './layouts/NavbarMobile.vue'
import Footer from './layouts/Footer.vue'
import { RouterView } from 'vue-router'
import { useBreakpoint } from './composables/breakpoint'
import { useCitiesStore } from './stores/cities'

const { mdAndUp } = useBreakpoint()
const cities = useCitiesStore()
if (cities.data.length === 0) {
  cities.initCities()
}
</script>

<template>
  <template v-if="mdAndUp()">
    <Navbar />
  </template>
  <template v-else>
    <NavbarMobile />
  </template>

  <RouterView />
  <Footer />
</template>

<style scoped></style>
