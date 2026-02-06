describe('Тесты главной страницы', () => {
  beforeEach(() => {
    cy.visit('/client/index.php')
  })

  it('Проверка корректности отображения главной страницы', () => {
    cy.fixture('selectors.json').then((selectors) => {
      // Проверка заголовка
      cy.get(selectors.mainPage.pageTitle)
        .should('be.visible')
        .and('contain.text', 'Идёмвкино')

      // Проверка навигации по дням (7 дней)
      cy.get(selectors.mainPage.daysNav)
        .should('have.length', 7)
        .and('be.visible')

      // Проверка наличия фильмов
      cy.get(selectors.mainPage.movie)
        .should('have.length.at.least', 1)
        .and('be.visible')

      // Проверка информации о фильме
      cy.get(selectors.mainPage.movieTitle)
        .first()
        .should('be.visible')
        .and('not.be.empty')

      cy.get(selectors.mainPage.movieDescription)
        .first()
        .should('be.visible')

      cy.get(selectors.mainPage.movieDuration)
        .first()
        .should('be.visible')
        .and('contain.text', 'мин')

      // Проверка наличия сеансов
      cy.get(selectors.mainPage.seanceTime)
        .should('have.length.at.least', 1)
        .and('be.visible')
    })
  })
})