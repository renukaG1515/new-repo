const { defineConfig } = require('cypress');
const xlsx = require('xlsx');
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'E:\\Cypress\\CypressAutomation\\cypress\\reports',
    overwrite: true,
    html: true,
    json: true
  },
  e2e: {
    chromeWebSecurity: false,

    // 👇 Update spec pattern to include .feature files
    specPattern: 'cypress/Integration/examples/*.{feature,js}',
    stepDefinitions: 'E:\\Cypress\\CypressAutomation\\cypress\\support\\step_definitions\\**\\*.{js,ts}',
    

    async setupNodeEvents(on, config) {
      // ✅ Setup cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // ✅ Excel read task
      on('task', {
        readExcel({ filePath, sheetName }) {
          const workbook = xlsx.readFile(filePath);
          const worksheet = workbook.Sheets[sheetName];
          return xlsx.utils.sheet_to_json(worksheet);
        }
      });

      // ✅ Incognito Chrome
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeaded) {
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
      });

      // ✅ Mochawesome plugin
      mochawesome(on);

      return config;
    }
  }
});
