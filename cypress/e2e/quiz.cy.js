describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
      statusCode: 200
    }).as('getQuestions');

    cy.visit('/');
  });

  it('should start the quiz and display the first question', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    for (let i = 0; i < 10; i++) {
      cy.contains('button', '1').click();
    }

    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    for (let i = 0; i < 10; i++) {
      cy.contains('button', '1').click();
    }

    cy.contains('Take New Quiz').click();
    cy.wait('@getQuestions');

    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
