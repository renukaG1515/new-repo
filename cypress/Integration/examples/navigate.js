describe('Cypress Sample Test', () => {

  it('Visits a webpage and performs actions', () => {

    // Visit a webpage
    cy.visit('https://www.zomato.com/partners/login')
   cy.wait(200);
   cy.contains('button','Login').click()
     
    // Check if the title is correct
   // cy.title().should('include', 'Example Domain')

    // Click a link and check the new URL
   // cy.get('a').click()
    //cy.url().should('include', 'iana.org')

  })

  

})
