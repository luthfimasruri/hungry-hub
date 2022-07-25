const apiUrl = Cypress.env('apiUrl')

describe('Search UI', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.dataCy('navbar-language').click().contains('EN').click()
  })

  describe('Navbar > Search', () => {
    it('should show/hide search input when toggle', () => {
      cy.dataCy('navbar-search-input').should('not.be.visible')
      cy.dataCy('navbar-search-toggle').click()
      cy.dataCy('navbar-search-input').should('be.visible')
      cy.dataCy('navbar-search-toggle').click()
      cy.dataCy('navbar-search-input').should('not.be.visible')
    })

    const keyword = 'chinese'
    it(`should search for "${keyword}" keyword`, () => {
      cy.intercept(
        'GET',
        `${apiUrl}/api/v5/restaurants/search.json?page[size]=10&page[number]=1&name_like=${keyword}`
      ).as('searchRestaurants')

      cy.dataCy('navbar-search-toggle').click()
      cy.dataCy('navbar-search-input').type(`${keyword}{enter}`)
      cy.url().should('include', '/restaurants/search')
      cy.url().should('include', `name_like=${keyword}`)

      cy.wait('@searchRestaurants').then(({ response }) => {
        cy.log(response.body.data.length)
        cy.dataCy('restaurants-list').within(() => {
          cy.dataCy('restaurants-list-item').should(
            'have.length',
            response.body.data.length
          )
        })
      })
    })
  })

  describe('Banner > Search', () => {
    it('should show search form', () => {
      cy.dataCy('banner-search-form').should('be.visible')
    })

    const keyword = 'japanese'
    it(`should search for "${keyword}" keyword`, () => {
      cy.intercept(
        'GET',
        `${apiUrl}/api/v5/restaurants/search.json?page[size]=10&page[number]=1&name_like=${keyword}`
      ).as('searchRestaurants')

      cy.dataCy('banner-search-input').type(`${keyword}`)
      cy.dataCy('banner-search-form').submit()

      cy.url().should('include', '/restaurants/search')
      cy.url().should('include', `name_like=${keyword}`)

      cy.wait('@searchRestaurants').then(({ response }) => {
        cy.log(response.body.data.length)
        cy.dataCy('restaurants-list').within(() => {
          cy.dataCy('restaurants-list-item').should(
            'have.length',
            response.body.data.length
          )
        })
      })
    })
  })
})
