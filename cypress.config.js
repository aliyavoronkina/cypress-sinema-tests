const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "demo-project-id-for-education",
  
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    
    retries: {
      runMode: 1,
      openMode: 0,
    },
  },
  
  video: true,
  screenshotOnRunFailure: true,
})
