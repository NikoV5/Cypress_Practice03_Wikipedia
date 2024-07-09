/// <reference types="cypress"/>

describe('Practice03 - Wikipedia', () => {
  beforeEach(() => {
    cy.visit('https://www.wikipedia.org/');

  });

  it('Task 1', () => {
    // 2
    cy.get('[class*="central-textlogo-wrapper"]').should('be.visible').contains('Wikipedia');
    // 3
    cy.get('[class*="central-textlogo-wrapper"]').contains('The Free Encyclopedia');
    
  })

  it('Task 2', () => {
    // 2, 3
      cy.get('.central-featured').should('be.visible').children().eq(0).contains('English')
    
  })

  it('Task 3', () => {
    // 2
    cy.get('#searchInput').click().type('Cypress {enter}')
    // 3
    cy.title().should('include', 'Cypress');
    // 4
    cy.url().should('include', 'Cypress')
    // 5
    cy.get('.mw-page-title-main').should('have.text', 'Cypress');

  })

  it('Task 4', () => {
    cy.get('#js-lang-list-button').realClick();

    const Languages = [18, 53, 99, 126, 29]

    const numOfLang = [18, 53, 99, 126, 29];
    for(let i = 0; i < numOfLang.length; i++) {
     cy.get('.hlist').eq(i).find('a').should('have.length', numOfLang[i])
    }

  })

});