describe('Login test with use of test data', () => 
{

const testData = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
  { username: 'performance_glitch_user', password: 'secret_sauce' }
];

testData.forEach(({ username, password }) => {
  it(`Logs in as ${username}`, () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('input[name="user-name"]').type(username);
    cy.get('input#password').type(password);
     cy.get('input[type="submit"]').click();
    cy.contains('button','Open Menu').click();
    cy.get('#logout_sidebar_link').click();
  });
});

})