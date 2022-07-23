// https://docs.cypress.io/api/introduction/api.html

describe('Select language', () => {
  it('should be able to select language', () => {
    cy.visit('/')
    cy.dataCy('navbar-language').then(($el) => {
      if ($el.text() === 'TH') {
        cy.dataCy('navbar-language')
          .click()
          .dataCy('select-options')
          .should('be.visible')
          .contains('EN')
          .click()
        cy.contains('button', 'Sign in')
      }
    })
    cy.dataCy('navbar-language').then(($el) => {
      if ($el.text() === 'EN') {
        cy.dataCy('navbar-language')
          .click()
          .dataCy('select-options')
          .should('be.visible')
          .contains('TH')
          .click()
        cy.contains('button', 'เข้าสู่ระบบ')
      }
    })
  })
})
