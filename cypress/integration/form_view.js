describe('Form view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to put a name on first input', () => {
    cy.get('input[name="name"]')
      .type('Oscar')
      .should('have.value', 'Oscar')
      .get('input[name="date"]')
      .type('7/30')
      .should('have.value', '7/30')
      .get('input[name="time"]')
      .type('7:00')
      .should('have.value', '7:00')
      .get('input[name="number"]')
      .type('4')
      .should('have.value', '04')
  })
});

// Write a test that checks that when data is put into the form, the value is reflected in that form input.