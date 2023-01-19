import React from 'react'
import Example from './Example'

describe('<Example />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Example />)
  })
})
