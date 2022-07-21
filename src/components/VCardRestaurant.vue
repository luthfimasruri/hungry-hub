<script setup>
import { StarIcon } from '@heroicons/vue/solid'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: [Number, String],
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  totalLocation: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reviewScore: {
    type: Number,
    required: true,
  },
  reviewCount: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="group relative rounded-md shadow-lg">
    <div
      class="min-h-80 aspect-video w-full overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-90"
    >
      <img
        :src="props.image"
        :alt="props.name"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="px-3 py-2">
      <div class="flex justify-between text-sm">
        <h3 class="mr-1 grow truncate font-bold text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ props.name }}
          </a>
        </h3>
        <div class="flex shrink-0 flex-col items-end text-red">
          <p class="flex items-center justify-end text-base font-bold">
            <img
              alt="Price Tag"
              class="mr-1 h-3"
              src="/icons/icon-price-red.png"
            />
            {{ props.price }}
          </p>
          <div class="text-xs">NET/Person</div>
        </div>
      </div>
      <div class="mt-2 flex text-xs">
        <div class="flex grow flex-col space-y-1">
          <div class="flex space-x-2">
            <div class="flex items-center truncate">
              <img
                alt="Fork"
                class="mr-1 h-3"
                src="/icons/icon-fork-black.png"
              />
              {{ props.cuisine }}
            </div>
            <div class="flex items-center truncate">
              <img
                alt="Pin Location"
                class="mr-1 h-3"
                src="/icons/icon-pin-location-black.png"
              />
              {{ props.totalLocation }} Branches
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="flex items-center truncate">
              <img
                alt="Pin Location"
                class="mr-1 h-3"
                src="/icons/icon-plate-red.png"
              />
              Dine In
            </div>
            <div class="flex items-center truncate">
              <img
                alt="Pin Location"
                class="mr-1 h-3"
                src="/icons/icon-xperience-red.png"
              />
              XP
            </div>
            <div class="flex items-center truncate">
              <img
                alt="Pin Location"
                class="mr-1 h-3"
                src="/icons/icon-shopping-bag-red.png"
              />
              Delivery
            </div>
          </div>
        </div>
        <div class="flex w-16 shrink-0 flex-col justify-end">
          <div
            class="flex items-center justify-center rounded bg-red pl-1.5 pr-1 text-sm font-bold text-white"
          >
            {{ props.reviewScore }}
            <StarIcon class="ml-1 h-5" />
          </div>
          <div class="mt-0.5 truncate">{{ props.reviewCount }} Reviews</div>
        </div>
      </div>
    </div>
  </div>
</template>
