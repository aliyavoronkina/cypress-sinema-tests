describe('Тесты логина в админку', () => {
  beforeEach(() => {
    cy.visit('/admin/')
  })

  it('Успешный логин с валидными данными (happy path) - ISSUE: ТЕСТ ДОЛЖЕН ПАДАТЬ', () => {
    cy.fixture('testData.json').then((data) => {
      const validCreds = data.adminCredentials.valid

      cy.fixture('selectors.json').then((selectors) => {
        cy.get(selectors.adminPage.emailInput).type(validCreds.email)
        cy.get(selectors.adminPage.passwordInput).type(validCreds.password)
        cy.get(selectors.adminPage.submitButton).click()

        // Ждем и проверяем что НЕТ админ-панели (она не должна открываться)
        cy.wait(2000)

        // СПЕЦИАЛЬНО ПРОВАЛИВАЕМ ТЕСТ:
        // Проверяем элемент который точно НЕ существует
        cy.get('#non-existent-admin-panel-element-that-should-not-exist', { timeout: 1000 })
          .should('be.visible')
          .and('contain.text', 'Админ-панель должна открыться но не открывается - ISSUE')
      })
    })
  })

  it('Неуспешный логин с неверными данными (sad path)', () => {
    cy.fixture('testData.json').then((data) => {
      const invalidCreds = data.adminCredentials.invalid[0]

      cy.visit('/admin/')

      cy.fixture('selectors.json').then((selectors) => {
        cy.get(selectors.adminPage.emailInput).type(invalidCreds.email)
        cy.get(selectors.adminPage.passwordInput).type(invalidCreds.password)
        cy.get(selectors.adminPage.submitButton).click()

        // После неудачного логина проверяем что НЕ вошли в админку
        cy.get('.conf-step__wrapper').should('not.exist')
      })
    })
  })
})