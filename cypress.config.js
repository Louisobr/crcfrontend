const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://vnm9i2c79f.execute-api.eu-west-2.amazonaws.com/',
  },
});
