<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import useNavbar from '../composables/navbar'
import VSelect from '../components/VSelect.vue'

const { locale } = useI18n({ useScope: 'global' })
const { localeItems } = useNavbar()

const i18nLocaleStorage = localStorage.getItem('i18n_locale')
if (i18nLocaleStorage) locale.value = i18nLocaleStorage
localStorage.setItem('i18n_locale', locale.value)
watch(locale, (value) => {
  localStorage.setItem('i18n_locale', value)
})
</script>

<template>
  <VSelect v-model="locale" :items="localeItems" />
</template>
