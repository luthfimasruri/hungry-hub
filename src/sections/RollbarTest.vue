<script setup>
import { inject, onErrorCaptured } from 'vue'
const $rollbar = inject('$rollbar')
onErrorCaptured((err) => {
  $rollbar.error(err)
})

const onError = () => {
  $rollbar.error(new Error('onError Test.....!'))
}

const onWarning = () => {
  $rollbar.warning(new Error('onWarning Test.....!'))
}

const onInfo = () => {
  $rollbar.info(new Error('onInfo Test.....!'))
}

const onThrow = () => {
  throw new Error('onThrow Test.....!')
}
</script>

<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div class="relative shadow-xl sm:overflow-hidden">
      <div class="mx-auto flex justify-center space-x-4 p-10">
        <button
          id="rollbar-error"
          type="button"
          class="inline-flex items-center rounded-lg border border-transparent bg-red-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          @click="onError"
        >
          Test Rollbar Error
        </button>
        <button
          id="rollbar-warning"
          type="button"
          class="inline-flex items-center rounded-lg border border-transparent bg-orange-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          @click="onWarning"
        >
          Test Rollbar Warning
        </button>
        <button
          id="rollbar-info"
          type="button"
          class="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="onInfo"
        >
          Test Rollbar Info
        </button>
        <button
          id="rollbar-throw"
          type="button"
          class="inline-flex items-center rounded-lg border border-transparent bg-green-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          @click="onThrow"
        >
          Test Rollbar Throw an Error
        </button>
      </div>
    </div>
  </div>
</template>
