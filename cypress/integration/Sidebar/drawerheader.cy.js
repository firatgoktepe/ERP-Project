// Path: cypress/integration/drawerheader.cy.js
// Test the DrawerHeader component from layout/Sidebar/DrawerHeader/DrawerHeader.tsx

import DrawerHeader from '../../../src/layout/Sidebar/DrawerHeader/DrawerHeader.tsx'

describe('<DrawerHeader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DrawerHeader />)
  })
})
