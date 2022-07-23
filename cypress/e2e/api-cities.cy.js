const apiCities = `${Cypress.env('apiUrl')}/api/v5/cities.json`

describe('Users API', function () {
  context('GET /api/v5/cities.json', function () {
    it('gets a list of users', function () {
      cy.request('GET', apiCities).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).length.to.be.greaterThan(1)
      })
    })
  })
})
