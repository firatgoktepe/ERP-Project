// Path: cypress/integration/Search/search.cy.js
// Test the Search component from components/specific/Search/Search.tsx

import Search from '../../../src/components/specific/Search/Search'

describe('<Search />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Search />)
  })
})
