const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  //implement node event listeners here
  //this is required for the preprocessor to be generate json, were my test are written
  return config;
  }

module.exports = defineConfig({
  //below line of code is used to generate report
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //The below line of code is used for getting the js file address
   specPattern:'cypress/integration/*.js',


  
  },
 chromeWebSecurity:false
});
