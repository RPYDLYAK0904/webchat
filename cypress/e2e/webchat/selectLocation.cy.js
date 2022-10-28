import LandingPage from "../../page-objects/pages/LandingPage"
import SelectLocationWidget from "../../page-objects/components/SelectLocationWidget"
import SendSmsWidget from "../../page-objects/components/SendSmsWidget"

describe('select location widget validations', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        LandingPage.openChatWidget()
    })
  
    it('should open location from suggestion list', { tags: ['regression'] }, () => {
      cy.fixture('locations.json').then(location => {
        SelectLocationWidget.clickOnSuggestion(location.Narnia)
        SendSmsWidget.displayLocation(location.Narnia)
      })     
    })  
    
    it('should display default locations count', { tags: ['regression'] }, () => {
      SelectLocationWidget.displaySuggestionsCount(4)   
    })
})