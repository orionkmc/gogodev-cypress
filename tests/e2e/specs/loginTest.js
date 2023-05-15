describe('Login Test Feature', () => {
  it('user can not access to protected routes when is not logged in', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8081/login')
  })

  it('user with wrong credentials can not pass', () => {
    cy.visit('/login')
    cy.get('#email').type('demo@demo.com')
    cy.get('#password').type('987654')
    cy.get('button').click()
    cy.contains('p', 'Wrong email or password')
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:8081/login')
  })

  it('user can successfully login', () => {
    cy.visit('/login')
    cy.get('#email').type('admin@admin.com')
    cy.get('#password').type('12345678')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:8081/')
  })
})
