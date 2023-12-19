// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitRegister', () => {
    cy.visit('https://ourpoint.co/')
    cy.get('.tools > ul > :nth-child(2)').click()
    cy.get('.staff-form > .vs-button > .vs-button__content').click()
})

Cypress.Commands.add('logout', () => {
    cy.wait(5000)
    cy.get('.staff-button > img').click()
    cy.get('.logout-box > p').click()
})
