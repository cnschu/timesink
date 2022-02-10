describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=menubuttoncomponent--primary&args=content;'));
  it('should render the component', () => {
    cy.get('timesink-menu-button').should('exist');
  });
});