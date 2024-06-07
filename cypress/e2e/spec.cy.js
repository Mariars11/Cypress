describe('Teste Cypress', () => {
  it('Acesso ao site sauce demo', () => {
    cy.visit('https://phptravels.org/register.php')
    cy.get("#inputFirstName").type('');
  })
})