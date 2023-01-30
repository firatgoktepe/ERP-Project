// Path: cypress/integration/example.cy.js
// Test the Example component from components/common/Example/Example.tsx

import Example from '../../src/components/common/Example/Example'

describe('<Example />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Example />)
  })
})
