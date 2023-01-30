// Path: cypress/integration/sidelists.cy.js
// Test the SideLists component from layout/Sidebar/SideLists/SideLists.tsx

import SideLists from '../../../src/layout/Sidebar/SideLists/SideLists.tsx'

describe('<SideLists />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideLists />)
  })
})
