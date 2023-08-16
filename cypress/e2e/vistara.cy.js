/// <reference types = "cypress"/>

it('Lufthansa', () => {

    cy.clearAllCookies()
    cy.visit('https://www.airvistara.com/in/en')
    cy.wait(1000)
    cy.get('#acceptAllBtn').click()
    
    
})