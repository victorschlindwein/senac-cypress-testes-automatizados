describe('verifica se o site esta no ar', () => {

  it('deve conseguir visitar o site', () => {
    cy.visit('localhost:3000')
    cy.contains('h1', 'Faça seu login').should('be.visible')
  })
})