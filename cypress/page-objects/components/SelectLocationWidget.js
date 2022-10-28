export default class SelectLocationWidget {

    static displaySelectlocationWidget() {
        cy.getIframe('#podium-modal').find('.LocationSelector').should('be.visible')
    }

    static typeZipOrAddress(text) {
        cy.get('[name="Search Locations"]').clear().type(`${text}, {enter}`)
    }

    static clickOnSuggestion(location) {
        cy.getIframe('#podium-modal').find('.LocationContainer__TopLine').contains(location).click()
    }
}