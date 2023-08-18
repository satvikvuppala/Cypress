const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    projectId: "1yfbh8",

    watchForFileChanges:true,   // This command 

    // Below line is to create reports after running tests
    reporter: "cypress-mochawesome-reporter",
    
    // defaultCommandTimeout:10000,

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
