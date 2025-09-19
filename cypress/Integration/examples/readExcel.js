describe('Read data from Excel', () => {
  it('Loads data from Excel and uses it', () => {
    const filePath = 'E:\\Cypress\\CypressAutomation\\cypress\\fixtures\\testdata.xlsx';
    const sheetName = 'Sheet1';

    cy.task('readExcel', { filePath, sheetName }).then((data) => {
      // Example: log or use the data
      cy.log(JSON.stringify(data));

      data.forEach(({userg,passg }) => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.log(`✅ "Login successful for user:  ${userg}" `);
        cy.get('input[name="user-name"]').type(userg);
        cy.get('input#password').type(passg);
        cy.get('input[type="submit"]').click();
        cy.contains('button', 'Open Menu', { timeout: 20000 }).should('be.visible');
        cy.get('#logout_sidebar_link').click();
        cy.log(`✅ PASS: successfully logged out :  ${userg}`);
      });
    });
  });
});