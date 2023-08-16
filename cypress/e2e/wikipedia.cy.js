/// <reference types = "cypress"/>

it('Wikipedia',()=>{
    
    cy.visit('https://www.wikipedia.org/')
    cy.get('#searchInput').type('Lufthansa')
    cy.get('[href="https://en.wikipedia.org/wiki/Lufthansa"] > .suggestion-text > .suggestion-title > .suggestion-highlight').click()
    cy.get('#Destinations').scrollIntoView()
    cy.get(':nth-child(135) > a').click()



})