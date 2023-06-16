import { el } from './elements'

class LoginPage {
  go() {
    cy.visit('/signup')
    cy.contains(el.title)
      .should('be.visible')
  }

  form(name, email, password) {
    cy.get(el.name).type(name)
    cy.get(el.email).type(email)
    cy.get(el.password).type(password)
  }

  submit() {
    cy.contains(el.signupButton).click()
  }
}

export default new LoginPage()