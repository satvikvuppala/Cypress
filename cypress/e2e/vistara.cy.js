/// <reference types = "cypress"/>

it('Vistara', () => {

    cy.clearAllCookies()
    cy.visit('https://www.airvistara.com/in/en')
    
    cy.get('#departsfrom-div > .scombobox-display').should('be.visible').scrollIntoView().click()
    
})