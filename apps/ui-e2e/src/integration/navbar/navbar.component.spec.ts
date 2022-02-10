describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbarcomponent--primary&args=title;menuButtons;'));
  it('should render the component', () => {
    cy.get('timesink-navbar').should('exist');
  });
});