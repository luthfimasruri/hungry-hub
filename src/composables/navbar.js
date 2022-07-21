import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const useNavbar = () => {
  const { t } = useI18n({ useScope: 'global' })

  const appItems = computed(() => {
    return [
      {
        text: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.hb.hungryhub',
        icon: '/images/google-play-logo.jpg',
      },
      {
        text: 'App Store',
        href: 'https://apps.apple.com/th/app/hungry-hub-dining-offer-app/id879303325',
        icon: '/images/app-store-logo.jpg',
      },
    ]
  })

  const menuItems = computed(() => {
    return [
      {
        text: t('menu.for_business'),
        href: '/for-business',
      },
      {
        text: t('menu.gift_cards'),
        href: '/gift-cards',
      },
      {
        text: t('menu.blog'),
        href: '/blog',
      },
      {
        text: t('menu.help'),
        href: '/help',
      },
    ]
  })

  return {
    appItems,
    menuItems,
  }
}

export default useNavbar
