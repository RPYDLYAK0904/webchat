import LandingPage from "../../page-objects/pages/LandingPage"
import SelectLocationWidget from "../../page-objects/components/SelectLocationWidget"
import SendSmsWidget from "../../page-objects/components/SendSmsWidget"

describe('navigating through webchat validation', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        LandingPage.openChatWidget()
    })

    it('should open webchat widget', { tags: ['regression'] }, () => {
        SelectLocationWidget.displaySelectlocationWidget()
    })

    it('should close webchat widget', { tags: ['regression'] }, () => {
        LandingPage.closeChatWidget()
        LandingPage.displayOpenChatButton()
    })

    it('should go to previous page when click on back arrow', { tags: ['regression'] }, () => {
        cy.fixture('locations.json').then(location => {
            SelectLocationWidget.clickOnSuggestion(location.Narnia)
        })  
        SendSmsWidget.clickBackArrowButton()
        SelectLocationWidget.displaySelectlocationWidget()      
    })
})