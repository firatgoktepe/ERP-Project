// Path: cypress/integration/Search/styledInputBase.cy.js
// Test the StyledInputBase component from components/specific/Search/styledInputBase.tsx

import StyledInputBase from '../../../src/components/specific/Search/StyledInputBase'

describe('<StyledInputBase />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StyledInputBase />)
  })
})
