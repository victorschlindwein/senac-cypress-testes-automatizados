/// <reference types="cypress" />

describe('acessa a página de login', () => {
  it('webapp deve estar online', function () {
    cy.visit('/')

    cy.title()
      .should('eq', 'Samurai Barbershop by QAninja')
  })
})
