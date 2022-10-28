import LandingPage from "../../page-objects/pages/LandingPage"
import SelectLocationWidget from "../../page-objects/components/SelectLocationWidget"
import SendSmsWidget from "../../page-objects/components/SendSmsWidget"

describe('send sms widget validations', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        LandingPage.openChatWidget()
        SelectLocationWidget.clickOnSuggestion('Narnia')
    })
  
    it('should display current date and time along with intro message', { tags: ['regression'] }, () => {     
        let date = new Date().toISOString()
        let message = "intro message - " + date.slice(0, 10) + " " + date.slice(11, 16)  
        SendSmsWidget.validateIntroMessage(message)
    })

    it('should enable Send button', { tags: ['smoke', 'regression'] }, () => {
        cy.fixture('smsFields.json').then(smsFields => {
            SendSmsWidget.typeName(smsFields.Name)
            SendSmsWidget.typeMobilePhone(smsFields.MobilePhone)
            SendSmsWidget.typeMessage(smsFields.Message)
            SendSmsWidget.displaySendButtonEnabled()
        })
    }) 

    it('should see negative char count when type more than 300 characters', { tags: ['regression'] }, () => {
        cy.fixture('smsFields.json').then(smsFields => {
            SendSmsWidget.displayCorrectCharCount(smsFields.HugeMessage)
        })         
    })

    it('should display error messages when submit with empty fields', { tags: ['regression'] }, () => { 
        SendSmsWidget.typeName(' ')
        SendSmsWidget.typeMobilePhone(' ')
        SendSmsWidget.typeMessage(' ')    
        SendSmsWidget.clickSendButton()    
        cy.fixture('alerts.json').then(alert => {        
            SendSmsWidget.displayErrorMessage(alert.Name)
            SendSmsWidget.displayErrorMessage(alert.MobilePhone)
            SendSmsWidget.displayErrorMessage(alert.Message)
        })
    })
})