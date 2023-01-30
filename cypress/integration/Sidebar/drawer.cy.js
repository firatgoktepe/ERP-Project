// Path: cypress/integration/drawer.cy.js
// Test the Header component from layout/Sidebar/Drawer/Drawer.tsx

import Drawer from '../../../src/layout/Sidebar/Drawer/Drawer.tsx'

describe('<Drawer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Drawer />)
  })
})
