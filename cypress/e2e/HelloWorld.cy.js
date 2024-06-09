// cypress/integration/HelloWorld.spec.js
describe('HelloWorld', () => {
  it('Viser korrekt besked', () => {
    cy.visit('/');
    
    // Vent indtil 'Hello Vue!' er synligt inden for h1-elementet
    cy.get('h1').should('be.visible').contains('You did it!', { timeout: 10000 }); // Vent i op til 10 sekunder
    
    // Vent indtil beskeden er synlig inden for h3-elementet
    cy.contains('You’ve successfully created a project with Vite + Vue 3.').should('be.visible');
  });
});
