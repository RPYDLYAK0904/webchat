export default class LandingPage {

   static buttonIframe = '#podium-bubble'
   static openChatButton = '[aria-label="Chat widget open"]'
   static closeChatButton = '[aria-label="Chat widget close"]'

    static displayOpenChatButton() {
        cy.getIframe(this.buttonIframe).find(this.openChatButton).should('be.visible')
    }

    static displayCloseChatButton() {
        cy.getIframe(this.buttonIframe).find(this.closeChatButton).should('be.visible')
    }

    static openChatWidget() {
        cy.getIframe(this.buttonIframe).find(this.openChatButton).click()
    }

    static closeChatWidget() {
        cy.getIframe(this.buttonIframe).find(this.closeChatButton).click()
    }
}