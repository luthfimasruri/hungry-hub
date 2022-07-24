const apiUrl = Cypress.env('apiUrl')

describe('Section3 Mobile', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('iphone-6')
  })

  it('should show section3', () => {
    cy.dataCy('section3-mobile').should('be.visible')
  })

  it('should show section3 title', () => {
    cy.dataCy('section3-mobile-title').should('be.visible')
  })

  it('slider should scrollable', () => {
    cy.dataCy('section3-mobile-slider')
      .should('be.visible')
      .and('have.class', 'overflow-x-scroll')
  })
})

describe('Section3 Desktop', () => {
  cy.intercept
  before(() => {
    cy.visit('/')
    cy.intercept('GET', `${apiUrl}/api/v5/homes/section_3.json?city_id=1`, {
      fixture: 'section3-th.json',
    }).as('getSection3TH')
  })

  beforeEach(() => {
    cy.viewport('macbook-15')
  })

  it('should show section3', () => {
    cy.dataCy('section3').should('be.visible')
  })

  it('should show section3 title', () => {
    cy.dataCy('section3-title').should('be.visible')
  })

  it('should show slider with 6 items', () => {
    cy.dataCy('section3-slider').within(() => {
      cy.get('.swiper .swiper-slide').should('have.length', 6)
    })
  })

  it('should be able to slide the slider', () => {
    cy.dataCy('section3-slider').within(() => {
      cy.log('prev button should be disabled when first slide')
      cy.get('.swiper-button-prev')
        .should('have.class', 'swiper-button-disabled')
        .and('be.visible')

      cy.log('click next button')
      cy.get('.swiper-button-next').should('be.visible').click()
      cy.get('.swiper .swiper-slide').first().should('not.be.visible')

      cy.log('next button should be disabled when last slide')
      cy.get('.swiper-button-next')
        .should('have.class', 'swiper-button-disabled')
        .and('be.visible')

      cy.log('click prev button')
      cy.get('.swiper-button-prev').should('be.visible').click()
      cy.get('.swiper .swiper-slide').first().should('be.visible')
    })
  })
})
