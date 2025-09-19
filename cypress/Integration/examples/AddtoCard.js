describe('Add to cart', () => 
{

    it('Visits a webpage and performs actions', () => {    
    
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input#password').type('secret_sauce');
    cy.get('input[type="submit"]').click();
    //cy.contains('button','Open Menu').click();
    //cy.get('#logout_sidebar_link').click();
    
    //comparing text or else we can use have.text 
    
   // cy.get('a#item_4_title_link').should('have.text', 'Sauce Labs Backpack');

    // as well we need to use  .invoke('text').then('AR')

    cy.get('a#item_4_title_link').invoke('text').then((AR)=>{

    let ER ='Sauce Labs Backpack';
    

         if (AR === ER) 
        {
                cy.log('✅ Pass: Text matches');
        } 
      else 
        {
            cy.log('❌ Fail: Text does not match');
        }

  // Still include assertion to fail test if needed
 // expect(cleanedText).to.equal(expectedText);


    });

cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
  .parents('.inventory_item')
  .find('.inventory_item_desc').invoke('text').then((AR1)=>{

    let ER1 ='carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';
    if (AR1 === ER1) 
        {
                cy.log('✅ Pass: Text matches');
        } 
      else 
        {
            cy.log('❌ Fail: Text does not match');
        }


  });


//adding product to basket 
cy.contains('.inventory_item_name', 'Sauce Labs Backpack')  // Find product name
  .parents('.inventory_item')                              // Go up to full product block
  .find('button')                                          // Find button inside it
  .click();

  cy.get('.shopping_cart_badge').should('have.text', '1').click();
  //.should('have.text', '1');
  //cy.get('.btn_action.checkout_button').click();
  
  cy.contains('.btn_action.checkout_button','CHECKOUT').click();
  cy.log("order checkouted successfully");
  


    });

})