describe('Navbar Mobile', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.viewport('iphone-6')
  })

  it('should show navbar mobile', () => {
    cy.dataCy('navbar-mobile').should('be.visible')
  })

  it('should show navbar mobile toggle', () => {
    cy.dataCy('navbar-mobile-toggle').should('be.visible')
  })

  it('should show navbar mobile menu', () => {
    cy.dataCy('navbar-mobile-toggle').click()
    cy.dataCy('navbar-mobile-menu').should('be.visible')
  })
})

describe('Navbar Desktop', () => {
  before(() => {
    cy.visit('/')
  })

  it('should show navbar', () => {
    cy.dataCy('navbar').should('be.visible')
  })

  it('should show navbar menu', () => {
    cy.dataCy('navbar-menu').should('be.visible')
  })
})
