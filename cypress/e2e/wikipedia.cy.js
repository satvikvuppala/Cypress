/// <reference types = "cypress"/>

it('Wikipedia',()=>{
    
    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type('Lufthansa')
    cy.get('[href="https://en.wikipedia.org/wiki/Lufthansa"] > .suggestion-text > .suggestion-title > .suggestion-highlight').click()
    cy.wait(2000)
    cy.get('#Destinations').scrollIntoView()
    cy.wait(2000)
    cy.get(':nth-child(135) > a').click()
    cy.wait(5000)


})