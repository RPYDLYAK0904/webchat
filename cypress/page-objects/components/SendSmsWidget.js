export default class SendMessageWidget {

    static iframe = '#podium-modal'
    static introMessage = '[class="SendSmsPage__TextInvitation"]'
    static nameInput = '#Name'
    static mobilePhoneInput = '[id="Mobile Phone"]'
    static messageInput = '#Message'
    static sendButtonEnabled = '.SendButton--valid'
    static sendButton = '.SendButton'
    static errorMessage = '.TextInput__TextInputError'
    static currentLocation = '.SendSmsPage__CurrentLocation'
    static backArrowButton = '[aria-label="back"]'
    
    static validateIntroMessage() {    
        cy.getIframe(this.iframe).find(this.introMessage).should('contain.text', message)
    }

    static displayLocation(location) {
        cy.getIframe(this.iframe).find(this.currentLocation).should('contain.text', location)
    }

    static typeName(name) {
        cy.getIframe(this.iframe).find(this.nameInput).clear().type(name)
    }

    static typeMobilePhone(phone) {
        cy.getIframe(this.iframe).find(this.mobilePhoneInput).clear().type(phone)
    }

    static typeMessage(message) {
        cy.getIframe(this.iframe).find(this.messageInput).clear().clear().type(message)
    }

    static displaySendButtonEnabled() {
        cy.getIframe(this.iframe).find(this.sendButtonEnabled).should('be.visible')
    }

    static clickSendButton() {
        cy.getIframe(this.iframe).find(this.sendButton).click()
    }

    static displayErrorMessage(message) {
        cy.getIframe(this.iframe).find(this.errorMessage).contains(message).should('be.visible')
    }

    static displayCorrectCharCount(message) {
            const charDelta = 300 - message.length + ""
            this.typeMessage(message)
            cy.getIframe(this.iframe).find('.message-char-count text').should('have.text', charDelta)   
    }

    static clickBackArrowButton() {
        cy.getIframe(this.iframe).find(this.backArrowButton).click()
    }
}