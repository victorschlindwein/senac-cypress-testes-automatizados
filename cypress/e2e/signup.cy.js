/// <reference types="cypress" />

import signupPage from '../support/login'

describe('testes de cadastro', () => {
  it('deve cadastrar um novo usuário', () => {
    const name = 'Paulo Massa de Teste'
    const email = 'paulomassa@teste.com.br'
    const password = 'pwd123'

    cy.task('removeUser', email)
      .then((result) => {
        console.log(result)
      })

    signupPage.go()
    signupPage.form(name, email, password)
    signupPage.submit()

    cy.get('.toast')
      .should('be.visible')
      .find('p')
      .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
  })

  it('deve dar erro ao cadastrar emails duplicados', () => {
    const name = 'Voudar Erro'
    const email = "email@duplicado.com.br"
    const password = 'pwd123'

    cy.task('removeUser', email)
      .then((result) => {
        console.log(result)
      })

    const user = {
      name,
      email,
      password,
      is_provider: false
    }

    cy.postUser(user)

    cy.visit('/signup')

    signupPage.go()
    signupPage.form(name, email, password)
    signupPage.submit()

    cy.get('.toast')
      .should('be.visible')
      .find('p')
      .should('have.text', 'Email já cadastrado para outro usuário.')
  })

  it('deve dar erro quando a senha informada é inválida', () => {
    const name = 'Voudar Erro'
    const email = "desenha@invalida.com.br"
    const password = 'pwd123'
    const password2 = '123pwd'

    cy.task('removeUser', email)
      .then((result) => {
        console.log(result)
      })

    const user = {
      name,
      email,
      password,
      is_provider: false
    }

    cy.postUser(user)

    cy.visit('/signup')

    signupPage.go()
    signupPage.form(name, email, password2)
    signupPage.submit()

    cy.get('.toast')
      .should('be.visible')
      .find('p')
      .should('have.text', 'Email já cadastrado para outro usuário.')
  })

  it('deve acusar falta de preenchimento de dados', () => {
    signupPage.go()
    signupPage.submit()

    cy.contains('E-mail é obrigatório').should('be.visible')
    cy.contains('Senha é obrigatória').should('be.visible')
  })
})