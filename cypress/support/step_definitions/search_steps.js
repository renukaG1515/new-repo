import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the homepage', () => {
  cy.visit("https://www.saucedemo.com/v1/index.html");
});

When('I need to login by username {string} and password {string}', (username, password) => {
  cy.get('#user-name').type(username);
  cy.get('#password').type(password);
  cy.get('input[type="submit"]').click();
});

//I need to login by username "standard_user" and password "secret_sauce"

Then('I should able to login', () => {
  //cy.get('.search-results').should('contain', query);
  cy.contains('button','Open Menu').click();
        cy.get('#logout_sidebar_link').click();
});
