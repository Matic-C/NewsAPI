import { getGreeting } from '../support/app.po';

describe('newsapi', () => {
  beforeEach(() => cy.visit('/'));

  it('search for Austria in news', () => {
    cy.get('.header-input input')
      .should('be.visible')
      .type('Austria{enter}')

    cy.get('.article-title')
      .should('include.text', 'Austria');
  });
});
