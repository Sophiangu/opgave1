// HelloWorld.cy.js

describe('TheWelcome component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders all WelcomeItems correctly', () => {
    // Check if the Documentation WelcomeItem is rendered correctly
    cy.get('.item:nth-child(1) h3').should('contain.text', 'Documentation')
    cy.get('.item:nth-child(1) a').should(
      'have.attr',
      'href',
      'https://vuejs.org/'
    )

    // Check if the Tooling WelcomeItem is rendered correctly
    cy.get('.item:nth-child(2) h3').should('contain.text', 'Tooling')
    cy.get('.item:nth-child(2) a[href="https://vitejs.dev/guide/features.html"]').should('exist')

    // Check if the Ecosystem WelcomeItem is rendered correctly
    cy.get('.item:nth-child(3) h3').should('contain.text', 'Ecosystem')
    cy.get('.item:nth-child(3) a[href="https://pinia.vuejs.org/"]').should('exist')

    // Check if the Community WelcomeItem is rendered correctly
    cy.get('.item:nth-child(4) h3').should('contain.text', 'Community')
    cy.get('.item:nth-child(4) a[href="https://chat.vuejs.org"]').should('exist')

    // Check if the Support Vue WelcomeItem is rendered correctly
    cy.get('.item:nth-child(5) h3').should('contain.text', 'Support Vue')
    cy.get('.item:nth-child(5) a[href="https://vuejs.org/sponsor/"]').should('exist')
  })
})
