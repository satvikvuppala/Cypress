/// <reference types = "cypress"/>

it('Google Search', () => {

    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Vistara')

    cy.contains('Google Search').click()
    // cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > a > .LC20lb').click()
     
    cy.contains('Flight Booking')
    .scrollIntoView()
    .click()
})