const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,
    env: {
       baseUrl: "https://demo.podium.tools/qa-webchat-lorw/"
    },

    setupNodeEvents(on, config) {
      
    },
  },
});
