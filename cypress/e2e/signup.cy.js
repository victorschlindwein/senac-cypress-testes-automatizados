describe('criação de conta', () => {
  it('deve conseguir cadastrar uma nova conta com dados válidos', () => {
    cy.visit('localhost:3000')

    cy.contains('a', 'Criar conta').click()

    cy.url().should('contain', '/signup')

    cy.get('input[placeholder="Nome completo"]')
      .type('Carlos Eduardo')

    cy.get('input[placeholder="Seu melhor email"]')
      .type('carlos@edmundo.com.br')

    cy.get('input[placeholder="Sua senha secreta"]')
      .type('senac123')
  })
})