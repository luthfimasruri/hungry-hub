<script setup>
import { useI18n } from 'vue-i18n'
import { useLocales } from '../composables/locales'
import VSelect from '../components/VSelect.vue'

const { locale } = useI18n({ useScope: 'global' })
const { localeItems, onChangeLocale } = useLocales()
</script>

<template>
  <VSelect
    data-cy="navbar-language"
    :model-value="locale"
    @update:model-value="onChangeLocale"
    :items="localeItems"
    :hide-selected="true"
  />
</template>
