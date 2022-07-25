<script setup>
import { StarIcon } from '@heroicons/vue/solid'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
  customText: {
    type: String,
    default: '',
  },
  acceptDineIn: {
    type: Boolean,
    default: false,
  },
  acceptXperience: {
    type: Boolean,
    default: false,
  },
  acceptDelivery: {
    type: Boolean,
    default: false,
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
        @error="$event.target.src = '/images/no-image-found.png'"
      />
      <div
        v-if="props.customText"
        class="absolute top-3 rounded-r-full bg-red px-2 py-1 text-2xs text-white"
      >
        {{ props.customText }}
      </div>
    </div>
    <div class="px-2.5 py-2">
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
              class="mr-0.5 h-3"
              src="/icons/icon-price-red.png"
            />
            {{ props.price }}
          </p>
          <div class="text-2xs">{{ t('net_person') }}</div>
        </div>
      </div>
      <div class="mt-2 flex text-2xs">
        <div class="mt-0.5 flex grow flex-col space-y-1">
          <div class="flex space-x-1">
            <div class="flex w-1/2 items-center">
              <img
                alt="Fork"
                class="mr-0.5 h-3"
                src="/icons/icon-fork-black.png"
              />
              <span class="truncate">{{ props.cuisine }}</span>
            </div>
            <div class="flex w-1/2 items-center">
              <img
                alt="Pin Location"
                class="mr-0.5 h-3"
                src="/icons/icon-pin-location-black.png"
              />
              <span class="truncate">
                <template v-if="props.location">
                  <span>{{ props.location }}</span>
                </template>
                <template v-else>
                  {{ props.totalLocation }}
                  {{ t('branch', props.totalLocation) }}
                </template>
              </span>
            </div>
          </div>
          <div class="flex items-center space-x-1">
            <div v-if="props.acceptDineIn" class="flex items-center">
              <img
                alt="Pin Location"
                class="mr-0.5 h-3"
                src="/icons/icon-plate-red.png"
              />
              <span class="whitespace-nowrap">Dine In</span>
            </div>
            <div v-if="props.acceptXperience" class="flex items-center">
              <img
                alt="Pin Location"
                class="mr-0.5 h-3"
                src="/icons/icon-xperience-red.png"
              />
              <span class="whitespace-nowrap">XP</span>
            </div>
            <div v-if="props.acceptDelivery" class="flex items-center">
              <img
                alt="Pin Location"
                class="mr-0.5 h-3"
                src="/icons/icon-shopping-bag-red.png"
              />
              <span class="whitespace-nowrap">Delivery</span>
            </div>
          </div>
        </div>
        <div class="flex w-14 shrink-0 flex-col items-end">
          <div
            class="flex h-5 items-center justify-center rounded bg-red pl-1.5 pr-1 text-sm font-bold text-white"
          >
            <template v-if="props.reviewScore">
              {{ props.reviewScore.toFixed(1) }}
              <StarIcon class="ml-1 h-5" />
            </template>
            <template v-else>
              {{ t('new') }}
            </template>
          </div>
          <div v-if="props.reviewScore" class="mt-0.5 truncate text-3xs">
            {{ props.reviewCount }} {{ t('review', props.reviewCount) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
