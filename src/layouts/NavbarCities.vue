<script setup>
import { useCitiesStore } from '../stores/cities'
const citiesStore = useCitiesStore()
const props = defineProps({
  innerClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div v-if="!citiesStore.loading" class="ml-2 md:ml-3">
    <select
      name="city"
      data-cy="navbar-cities"
      class="block h-8 w-full rounded-full border-red-300 py-1 pl-3 pr-8 text-sm focus:border-black focus:outline-none focus:ring-black"
      :class="props.innerClass"
      :value="citiesStore.currentCityId"
      @change="citiesStore.setCityById($event.target.value)"
    >
      <option v-for="city in citiesStore.data" :key="city.id" :value="city.id">
        {{ city.attributes.name }}
      </option>
    </select>
  </div>
  <div v-else class="ml-2 animate-pulse">
    <div class="h-8 w-28 rounded-full bg-slate-300"></div>
  </div>
</template>
