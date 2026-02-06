describe('Тест оплаты бронирования', () => {
  it('Проверка страницы оплаты и QR-кода', () => {
    cy.visit('/client/index.php')
    cy.get('.movie-seances__time').first().click({ force: true })
    cy.get('.buying-scheme__chair_standart:not(.buying-scheme__chair_taken)').first().click()
    cy.get('.acceptin-button').click()
    cy.url().should('include', '/payment.php')
    cy.get('.ticket__check-title').should('contain', 'Вы выбрали билеты:')
    cy.get('.ticket__info').should('be.visible')
    cy.get('.ticket__info-qr').should('be.visible')
    cy.get('.ticket__info-title').should('contain', 'Назад к расписанию')
  })

  it('Проверка невозможности оплаты без выбора места', () => {
    cy.visit('/client/index.php')
    cy.get('.movie-seances__time').first().click({ force: true })
    cy.get('.acceptin-button').should('be.disabled')
  })
})
