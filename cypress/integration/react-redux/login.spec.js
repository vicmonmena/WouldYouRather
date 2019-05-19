describe('Log In', () => {
  it('succesfully performs login action', () => {
    // visit 'baseUrl'
    cy.visit('/');
    cy.get('select').select('user-1')
    cy.get('form').submit()
    // assert if we are in good place - search for a 'smarter world phrase
    cy.contains('smarter world');

    // verify that we were redirected
    cy.url({ timeout: 3000 }).should('includes', '/home/');
  });
});