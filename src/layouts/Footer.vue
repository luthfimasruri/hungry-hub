<script setup>
const socials = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/',
    icon: '/icons/icon-facebook.png',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/',
    icon: '/icons/icon-twitter.png',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/',
    icon: '/icons/icon-instagram.png',
  },
  {
    name: 'line',
    url: 'https://line.com/',
    icon: '/icons/icon-line.png',
  },
]
</script>

<template>
  <footer class="bg-red text-white">
    <div
      class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in socials"
          :key="item.name"
          :href="item.url"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <img
            alt="Search Button"
            class=""
            :src="item.icon"
            width="32"
            height="32"
          />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-base">
          Copyright &copy; 2022 Hungry Hub by AppServation Co., Ltd. All right
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
