describe('Login tests with fixture data', () => {
  before(function () {
    cy.fixture('testdata').then((data) => {
      this.users = data;
    });
  });

  
  it("Logs in as user from fixtures", function () {  
  this.users.forEach(({username,password }) => {
      cy.log(`Logging in as ${username}`);
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('input[name="user-name"]').type(username);
      cy.get('input#password').type(password);
      cy.get('input[type="submit"]').click();
      cy.contains('button','Open Menu').click();
      cy.get('#logout_sidebar_link').click();
    });
  });
});