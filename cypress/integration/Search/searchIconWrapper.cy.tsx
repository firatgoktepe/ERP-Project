// Path: cypress/integration/Search/searchIconWrapper.cy.js
// Test the SearchIconWrapper component from components/specific/Search/searchIconWrapper.tsx

import SearchIconWrapper from '../../../src/components/specific/Search/SearchIconWrapper'

describe('<SearchIconWrapper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SearchIconWrapper />)
  })
})
