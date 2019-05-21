describe('Log In', () => {
  it('succesfully performs login action', () => {
    // visit 'baseUrl'
    cy.visit('/');
    cy.get('select').select('Sarah Edo')
    cy.get('form').submit()
    // verify that we were redirected
    cy.url({ timeout: 3000 }).should('includes', 'home');
  });
});