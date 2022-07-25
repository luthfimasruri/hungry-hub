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
  openingHours: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '/images/no-image-found.png',
  },
  imageLogo: {
    type: String,
    default: '/images/no-image-found.png',
  },
  hashtags: {
    type: Array,
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
  <div
    class="group relative flex max-w-3xl flex-col space-y-4 rounded-md p-5 shadow-lg sm:flex-row sm:space-y-0 sm:space-x-4"
  >
    <div
      class="relative aspect-[14/9] w-48 max-w-sm shrink-0 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-90 sm:aspect-square sm:w-40 md:aspect-[14/9] md:w-60"
    >
      <img
        :src="props.image"
        :alt="props.name"
        class="h-full w-full object-cover object-center"
        @error="$event.target.src = '/images/no-image-found.png'"
      />
      <div
        v-if="props.customText"
        class="absolute top-3 rounded-r-full bg-red px-2 py-1 text-2xs text-white"
      >
        {{ props.customText }}
      </div>
    </div>
    <div
      class="flex min-w-0 grow flex-col justify-around space-y-2 sm:flex-row sm:space-x-1"
    >
      <div
        class="flex min-w-0 grow flex-col justify-around space-y-2 sm:space-x-2"
      >
        <div class="flex items-center space-x-2">
          <div class="hidden flex-shrink-0 md:block">
            <img
              class="h-12 w-12 rounded-full sm:h-14 sm:w-14"
              :src="props.imageLogo"
              @error="$event.target.src = '/images/no-image-found.png'"
            />
          </div>
          <div class="min-w-0 flex-1">
            <a href="#" class="truncate focus:outline-none">
              <!-- <span class="absolute inset-0" aria-hidden="true" /> -->
              <h4 class="truncate font-bold text-gray-900">
                {{ props.name }}
              </h4>
              <div class="flex items-center space-x-1 text-sm">
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
            </a>
          </div>
        </div>
        <div class="flex space-x-4 text-sm">
          <div class="flex items-center">
            <img alt="Fork" class="mr-1 h-3" src="/icons/icon-fork-black.png" />
            <span class="truncate">{{ props.cuisine }}</span>
          </div>
          <div class="flex items-center">
            <img
              alt="Pin Location"
              class="mr-1 h-3"
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
          <div class="flex items-center">
            <img
              alt="Clock"
              class="mr-1 h-3"
              src="/icons/icon-clock-black.png"
            />
            <span class="truncate">{{ props.openingHours }}</span>
          </div>
        </div>
        <div class="flex items-center text-xs lowercase text-blue-500">
          <img alt="Tag" class="mr-1 h-3" src="/icons/icon-tag-black.png" />
          <div>
            <a
              v-for="item in props.hashtags.slice(0, 4)"
              href="#"
              :key="item.id"
              class="mr-1"
            >
              #{{ item.label }}
            </a>
          </div>
        </div>
        <div class="flex items-center text-xs">
          <img
            alt="Trending"
            class="mr-1 h-3"
            src="/icons/icon-trending-black.png"
          />
          <div>Trending! Last booking was made 8 hours ago</div>
        </div>
      </div>
      <div class="flex flex-row-reverse items-end justify-between sm:flex-col">
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
    </div>
  </div>
</template>
