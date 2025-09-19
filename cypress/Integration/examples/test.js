//cypress-Spec
describe('Cypress Sample Test', () => {

  it('Visits a webpage and performs actions', () => {

    // Visit a webpage
    cy.visit('https://example.com')

    // Check if the title is correct
    cy.title().should('include', 'Example Domain')

    // Click a link and check the new URL
    cy.get('a').click()
    cy.url().should('include', 'iana.org')

  })

  it('Interact with form elements', () => {
    // Visit a page with a form
    cy.visit('https://example.com')

    // Type in an input field
    cy.get('input[name="q"]').type('Cypress testing')

    // Submit the form
    cy.get('form').submit()

    // Assert that the form was submitted (could be an actual test based on the page's behavior)
    cy.url().should('include', 'search')
  })

  it('Check for an element by its text content', () => {
    // Visit the page
    cy.visit('https://example.com')

    // Assert that an element with specific text is on the page
    cy.contains('Example Domain').should('be.visible')
  })

})
