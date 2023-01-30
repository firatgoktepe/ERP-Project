// Path: cypress/integration/appbar.cy.js
// Test the Header component from layout/Sidebar/AppBar/AppBar.tsx

import AppBar from '../../../src/layout/Sidebar/AppBar/AppBar.tsx'

describe('<AppBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppBar />)
  })
})
