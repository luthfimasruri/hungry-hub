<script setup>
import Banner from '../sections/Banner.vue'
import Section3 from '../sections/Section3.vue'
import Section3Mobile from '../sections/Section3Mobile.vue'
import { useBreakpoint } from '../composables/breakpoint'
import LoadingBanner from '../components/loading/LoadingBanner.vue'
import LoadingCards from '../components/loading/LoadingCards.vue'
const { mdAndUp } = useBreakpoint()
</script>

<template>
  <main>
    <Suspense>
      <Banner />
      <template #fallback>
        <LoadingBanner />
      </template>
    </Suspense>

    <template v-if="mdAndUp()">
      <Suspense>
        <Section3 />
        <template #fallback>
          <LoadingCards />
        </template>
      </Suspense>
    </template>
    <template v-else>
      <Suspense>
        <Section3Mobile />
        <template #fallback>
          <LoadingCards />
        </template>
      </Suspense>
    </template>
  </main>
</template>
