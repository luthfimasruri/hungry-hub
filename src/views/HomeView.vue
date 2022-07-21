<script setup>
import Banner from '../sections/Banner.vue'
import Section3 from '../sections/Section3.vue'
import Section3Mobile from '../sections/Section3Mobile.vue'
import { useBreakpoint } from '../composables/breakpoint'
const { mdAndUp } = useBreakpoint()
</script>

<template>
  <main>
    <Suspense>
      <Banner />
      <template #fallback>
        <div class="text-center">loading...</div>
      </template>
    </Suspense>
    <template v-if="mdAndUp()">
      <Suspense>
        <Section3 />
        <template #fallback>
          <div class="text-center">loading...</div>
        </template>
      </Suspense>
    </template>
    <template v-else>
      <Suspense>
        <Section3Mobile />
        <template #fallback>
          <div class="text-center">loading...</div>
        </template>
      </Suspense>
    </template>
  </main>
</template>
