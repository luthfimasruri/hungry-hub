const apiUrl = Cypress.env('apiUrl')

describe('Cities API', () => {
  context('GET /api/v5/cities.json', () => {
    it('gets a list of cities', () => {
      cy.request('GET', `${apiUrl}/api/v5/cities.json`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.success).to.be.true
        expect(response.body.data).length.to.be.greaterThan(0)
      })
    })
  })
})

describe('Banners API', () => {
  context('GET /api/v5/banners.json?city_id=1', () => {
    it('gets a list of banners', () => {
      cy.request('GET', `${apiUrl}/api/v5/banners.json?city_id=1`).then(
        (response) => {
          expect(response.status).to.eq(200)
          // expect(response.body.success).to.be.true
          expect(response.body).length.to.be.greaterThan(0)
        }
      )
    })
  })
})

describe('Config API', () => {
  context('GET /api/v5/config.json', () => {
    it('gets an object of config', () => {
      cy.request('GET', `${apiUrl}/api/v5/config.json`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.success).to.be.true
        expect(response.body.data).to.be.not.null
        expect(response.body.data).to.have.ownPropertyDescriptor('app_title')
        expect(response.body.data).to.have.ownPropertyDescriptor(
          'app_description'
        )
      })
    })
  })
})

describe('Section3 API', () => {
  context('GET /api/v5/homes/section_3.json?city_id=1', () => {
    it('gets a list of section3', () => {
      cy.request('GET', `${apiUrl}/api/v5/homes/section_3.json?city_id=1`).then(
        (response) => {
          expect(response.status).to.eq(200)
          expect(response.body.success).to.be.true
          expect(response.body.title).to.be.not.null
          expect(response.body.data).length.to.be.greaterThan(0)
          expect(response.body).to.have.ownPropertyDescriptor('title')
        }
      )
    })
  })
})
