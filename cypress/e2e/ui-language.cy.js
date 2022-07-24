const apiUrl = Cypress.env('apiUrl')

describe('Select language', () => {
  before(() => {
    cy.visit('/')
  })

  it('should change language to EN', () => {
    cy.intercept('GET', `${apiUrl}/api/v5/config.json`, {
      fixture: 'config-en.json',
    }).as('getConfigEN')

    cy.dataCy('navbar-language').within(() => {
      cy.dataCy('select-button').click()
      cy.dataCy('select-options').should('be.visible').contains('EN').click()
    })

    cy.contains('button', 'Sign in')
    cy.wait('@getConfigEN').then(({ response }) => {
      cy.log(`app_title: ${response.body.data.app_title}`)
      cy.contains(`Thailand's No.1 special booking deal app 2022`)
    })
    cy.window().then((window) => {
      expect(window.localStorage.getItem('i18n_locale')).to.eq('en')
    })
  })

  it('should change language to TH', () => {
    cy.intercept('GET', `${apiUrl}/api/v5/config.json`, {
      fixture: 'config-th.json',
    }).as('getConfigTH')

    cy.dataCy('navbar-language').within(() => {
      cy.dataCy('select-button').click()
      cy.dataCy('select-options').should('be.visible').contains('TH').click()
    })

    cy.contains('button', 'เข้าสู่ระบบ')
    cy.wait('@getConfigTH').then(({ response }) => {
      cy.log(`app_title: ${response.body.data.app_title}`)
      cy.contains(`แอปจองมื้อพิเศษอันดับ 1 ของไทย 2022`)
    })
    cy.window().then((window) => {
      expect(window.localStorage.getItem('i18n_locale')).to.eq('th')
    })
  })
})
