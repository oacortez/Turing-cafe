describe('Turing Cafe main page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and view page title', () => {
    cy.contains('Turing Cafe Reservations')
      .get('h1')
  })

  it('Should be able to visit the page and view form inputs', () => {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Please enter your name')
  })

  it('Should be able to view reservation cards', () => {
    cy.get('h2')
      .should('contain', 'Christie')
    cy.get('p')
      .should('contain', '')
    cy.get('button')
      .should('contain', 'Cancel')
  })
})