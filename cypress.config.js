const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    viewportWidth: 1280,
    viewportHeight: 1080,
    watchForFileChanges: false,
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app',
    setupNodeEvents(on, config) {
    },
  },
});
