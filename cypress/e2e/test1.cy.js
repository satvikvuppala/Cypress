/// <reference types = "cypress"/>

it('Google Search', () => {

    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Lufthansa{Enter}')
    // cy.contains('Google Search').click()
    cy.contains('Book tickets')
     
})