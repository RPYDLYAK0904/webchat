Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add('getIframe', selector => {
    return cy
    .get(selector)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(iframe => {
        cy.wrap(iframe)
    })
})