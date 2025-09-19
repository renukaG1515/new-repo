// Import the required packages
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;
const reporter = require('cypress-mochawesome-reporter/plugin');  // Example reporter (mochawesome)

module.exports = (on, config) => {
  // Integrate the cucumber preprocessor
  on('file:preprocessor', cucumber());

  // Integrate the reporter (for Mochawesome, for example)
  reporter(on);

  // Any other custom configurations or settings can go here
  return config;
};
