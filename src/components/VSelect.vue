<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { computed } from 'vue'
const props = defineProps({
  modelValue: String,
  items: Array,
})

const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get() {
    return props.items.find((item) => item.value === props.modelValue)
  },
  set(newValue) {
    emit('update:modelValue', newValue.value)
  },
})
</script>

<template>
  <Listbox as="div" v-model="selected">
    <div class="relative">
      <ListboxButton
        class="relative flex w-full cursor-default items-center pl-3 pr-8 text-left text-sm focus:outline-none"
      >
        <span class="flex items-center">
          <img
            :src="selected.icon"
            alt=""
            class="h-8 w-8 flex-shrink-0 rounded-full"
          />
          <span class="ml-1 block truncate">{{ selected.text }}</span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <ChevronDownIcon class="h-5 w-5 text-gray-600" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <ListboxOptions
          class="absolute z-20 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="item in items"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-gray-200' : 'text-gray-900',
                'relative cursor-default select-none py-1 pl-3',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="item.icon"
                  alt=""
                  class="h-8 w-8 flex-shrink-0 rounded-full"
                />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-1 block truncate',
                  ]"
                >
                  {{ item.text }}
                </span>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
