describe('Teste Cypress', () => {
  it('Acesso ao site sauce demo', () => {
    cy.visit('https://phptravels.org/register.php')
    cy.get("#inputFirstName").type('Maria');
    cy.get('#inputLastName').type('Silva');
    cy.get('#inputEmail').type('maria123456789@gmail.com');
    cy.get('#inputAddress1').type('catolica')
    cy.get('#inputCity').type('bsb')
    cy.get('#inputPhone').type('61900000000')
    cy.get('#inputNewPassword1').type('@123aA')
    cy.get('#inputNewPassword2').type('@123aA')
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
    cy.get('[align="center"] > .btn').click();
    
  })
})