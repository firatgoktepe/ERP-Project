// Path: cypress/integration/header.cy.js
// Test the Header component from layout/Header/Header.tsx

import Header from '../../src/layout/Header/Header'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Header
        open={false}
        handleDrawerOpen={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
  })
})