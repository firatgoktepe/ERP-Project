// Path: cypress/integration/index.cy.js
import Header from '../../src/layout/Header/header.tsx'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />)
  })
})
