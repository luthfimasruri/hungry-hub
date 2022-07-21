<script setup>
import Banner from '../sections/Banner.vue'
import Section3 from '../sections/Section3.vue'
</script>

<template>
  <main>
    <Suspense>
      <Banner />
      <template #fallback>
        <div class="text-center">loading...</div>
      </template>
    </Suspense>
    <Suspense>
      <Section3 />
      <template #fallback>
        <div class="text-center">loading...</div>
      </template>
    </Suspense>
  </main>
</template>
