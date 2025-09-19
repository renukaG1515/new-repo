describe('login test', () => 
{

    it('Visits a webpage and performs actions', () => {    
    
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input#password').type('secret_sauce');
    cy.get('input[type="submit"]').click();
    cy.contains('button','Open Menu').click();
    cy.get('#logout_sidebar_link').click();

    })

})