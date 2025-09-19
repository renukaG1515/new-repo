describe('Cypress Sample Test', () => {

  it('Visits a webpage and performs actions', () => {

    // Visit a webpage
    cy.visit('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%3Fk%3Damazon%2Blogin%26ref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
   cy.wait(200);
   cy.get('#ap_email').type('7057381852')
   cy.get('input[id="continue"]').click()
   cy.get('#ap_password').type('Renu123')
   cy.get('input[id="signInSubmit"]').click()
   cy.get('#auth-fpp-link-bottom').click()
   cy.get('#continue').click()
     
    // Check if the title is correct
   // cy.title().should('include', 'Example Domain')

    // Click a link and check the new URL
   // cy.get('a').click()
    //cy.url().should('include', 'iana.org')

  })

  

})
