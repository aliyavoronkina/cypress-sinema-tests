describe('Тест расписания сеансов', () => {
  beforeEach(() => {
    cy.visit('/client/index.php')
  })

  it('Проверка отображения расписания на неделю', () => {
    cy.get('.page-nav__day').should('have.length', 7)
    cy.get('.page-nav__day').first().should('have.class', 'page-nav__day_chosen')
    cy.get('.page-nav__day').first().within(() => {
      cy.get('.page-nav__day-week').should('not.be.empty')
      cy.get('.page-nav__day-number').should('not.be.empty')
    })
  })

  it('Навигация по дням недели и проверка сеансов', () => {
    cy.get('.page-nav__day').eq(1).click()
    cy.get('.page-nav__day').eq(1).should('have.class', 'page-nav__day_chosen')
    cy.get('.movie').should('have.length.at.least', 1)
    cy.get('.movie').each(() => {
      cy.wrap().within(() => {
        cy.get('.movie__title').should('be.visible').and('not.be.empty')
        cy.get('.movie__data-duration').should('be.visible').and('contain.text', 'мин')
        cy.get('.movie-seances__time').should('have.length.at.least', 1)
      })
    })
    cy.get('.page-nav__day').first().click()
    cy.get('.page-nav__day').first().should('have.class', 'page-nav__day_chosen')
  })
})
