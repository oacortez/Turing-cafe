describe('User flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to fill out form and once click submit it should display new reservation card', () => {
    cy.get('input[name="name"]').type('Oscar')
      .get('input[name="date"]').type('7/30')
      .get('input[name="time"]').type('7:00')
      .get('input[name="number"]').type('4')
      .get('.reserv-btn').click()
      .get('.App')
      .get('.card').last()
        .should('include.text', 'Oscar')
      
  })

  it('Should be able to cancel the reservation the user created', () => {
    cy.get('input[name="name"]').type('Oscar')
      .get('input[name="date"]').type('7/30')
      .get('input[name="time"]').type('7:00')
      .get('input[name="number"]').type('4')
      .get('.reserv-btn').click()
      .get('.App')
      .get('.card').last()
        .should('include.text', 'Oscar')
        .get('.delete-btn').last().click()
        .get('.card').last()
        .should('not.include.text', 'Oscar')
  })
});