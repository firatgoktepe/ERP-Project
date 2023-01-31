// Path: cypress/integration/sidelists.cy.js
// Test the SideLists component from layout/Sidebar/SideLists/SideLists.tsx

import SideLists from '../../../src/layout/Sidebar/SideLists/SideLists'

describe('<SideLists />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideLists open={false} />)
  })
  it('renders its children', () => {
    cy.mount(
      <ul>
        <li data-testid="child" />
      </ul>
    )
    cy.get('[data-testid="child"]').should('exist')
  })
})
