<script setup>
import { defineAsyncComponent } from 'vue'
import { useBreakpoint } from '../composables/breakpoint'
import Banner from '../sections/Banner.vue'
// import Section3 from '../sections/Section3.vue'
// import Section3Mobile from '../sections/Section3Mobile.vue'
import LoadingBanner from '../components/loading/LoadingBanner.vue'
import LoadingCards from '../components/loading/LoadingCards.vue'
import RollbarTest from '../sections/RollbarTest.vue'
import OTP from '../sections/OTP.vue'

const Section3 = defineAsyncComponent(() => import('../sections/Section3.vue'))
const Section3Mobile = defineAsyncComponent(() =>
  import('../sections/Section3Mobile.vue')
)

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

    <OTP />

    <Suspense>
      <template v-if="mdAndUp()">
        <Section3 />
      </template>
      <template v-else>
        <Section3Mobile />
      </template>
      <template #fallback>
        <LoadingCards />
      </template>
    </Suspense>

    <RollbarTest />
  </main>
</template>
