import VCardRestaurant from '../VCardRestaurant.vue'
import { useI18n } from '../../main'
const i18n = useI18n('en')

describe('VCardRestaurant', () => {
  const defaultProps = {
    name: 'Test Restaurant',
    price: '$99.99',
    cuisine: 'International',
    location: 'Barcelona',
    totalLocation: 2,
    image: '',
    reviewScore: 4.5,
    reviewCount: 100,
    customText: 'WE TRAVEL TOGETHER',
    acceptDineIn: true,
    acceptXperience: true,
    acceptDelivery: true,
  }

  it('should render component', () => {
    cy.mount(VCardRestaurant, {
      global: { plugins: [i18n] },
      props: defaultProps,
    })
  })

  it('should render XP, Dine In, & Delivery', () => {
    cy.mount(VCardRestaurant, {
      global: { plugins: [i18n] },
      props: defaultProps,
    })

    cy.dataCy('v-card-restaurant').should('contain', 'XP')
    cy.dataCy('v-card-restaurant').should('contain', 'Dine In')
    cy.dataCy('v-card-restaurant').should('contain', 'Delivery')
  })

  it('should render XP, Dine In, & Delivery', () => {
    cy.mount(VCardRestaurant, {
      global: { plugins: [i18n] },
      props: defaultProps,
    })

    cy.dataCy('v-card-restaurant').should('contain', 'XP')
    cy.dataCy('v-card-restaurant').should('contain', 'Dine In')
    cy.dataCy('v-card-restaurant').should('contain', 'Delivery')
  })

  it('should not render XP, Dine In, & Delivery', () => {
    cy.mount(VCardRestaurant, {
      global: { plugins: [i18n] },
      props: Object.assign({}, defaultProps, {
        acceptXperience: false,
        acceptDineIn: false,
        acceptDelivery: false,
      }),
    })

    cy.dataCy('v-card-restaurant').should('not.contain', 'XP')
    cy.dataCy('v-card-restaurant').should('not.contain', 'Dine In')
    cy.dataCy('v-card-restaurant').should('not.contain', 'Delivery')
  })
})
