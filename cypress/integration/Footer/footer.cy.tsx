// Path: cypress/integration/Footer/footer.cy.js
// Test the Main component from layout/Main/Main.tsx

import Footer from '../../../src/layout/Footer/Footer'

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
  })
})
