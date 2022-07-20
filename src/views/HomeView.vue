<script setup>
import Banner from '../sections/Banner.vue'
</script>

<template>
  <main>
    <Suspense>
      <Banner />
      <template #fallback>
        <div class="text-center">loading...</div>
      </template>
    </Suspense>
  </main>
</template>
