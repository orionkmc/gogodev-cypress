describe('Login Test Feature', () => {
  it('user can not access to protected routes when is not logged in', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8081/login')
  })

  it('user with wrong credentials can not pass', () => {
    cy.login('demo@demo.com', '987654')
    cy.contains('p', 'Wrong email or password')
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8081/login')
  })

  it('user can successfully login', () => {
    cy.login('admin@admin.com', '12345678')
    cy.url().should('eq', 'http://localhost:8081/')
  })
})
