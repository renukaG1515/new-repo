describe('Cypress Sample Test', () => {

  it('Visits a webpage and performs actions', () => {

    // Visit a webpage
    cy.visit('https://www.signupgenius.com/index.cfm?go=w.Welcome&prior=w.createSignUp&formName=registerForm')
   cy.wait(200);
   cy.get('#firstNameId').type('Renuka')
   cy.get('#lastNameId').type('Gaikwad')
   cy.get('#pwordId').type('Rain@27')
   cy.get('#myEmailId').type('abc@123.com')
   //cy.contains('button','Login').click()
     
   

  })

  

})
