// Path: cypress/integration/main.cy.js
// Test the Main component from layout/Main/Main.tsx

import Main from '../../src/layout/Main/Main'

describe('<Main />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />)
  })
})
