// Кастомные команды
Cypress.Commands.add('loginAsAdmin', (email = 'qamid@qamid.ru', password = 'qamid') => {
  cy.visit('/admin/')
  cy.get("input[name='email']").type(email)
  cy.get("input[name='password']").type(password)
  cy.get('.login__button').click()
})

Cypress.Commands.add('selectAvailableSeat', () => {
  cy.get('.buying-scheme__chair_standart:not(.buying-scheme__chair_taken)').first().click()
})