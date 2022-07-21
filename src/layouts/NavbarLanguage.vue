<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocales } from '../composables/locales'
import VSelect from '../components/VSelect.vue'

const { locale } = useI18n({ useScope: 'global' })
const { localeItems, onChangeLocale } = useLocales()

watch(locale, (value) => {
  onChangeLocale(value)
})
</script>

<template>
  <VSelect v-model="locale" :items="localeItems" />
</template>
