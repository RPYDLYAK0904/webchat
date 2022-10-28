export default class SelectLocationWidget {

    static widgetIframe = '#podium-modal'
    static locationWidget = '.LocationSelector'
    static locationName = '.LocationContainer__TopLine'

    static displaySelectlocationWidget() {
        cy.getIframe(this.widgetIframe).find(this.locationWidget).should('be.visible')
    }

    static clickOnSuggestion(location) {
        cy.getIframe(this.widgetIframe).find(this.locationName).contains(location).click()
    }
    
    static displaySuggestionsCount(num) {
        cy.getIframe(this.widgetIframe).find(this.locationName).should('have.length', num)
    }
}