// Path: src/components/common/Example/Error/Error.test.js
// Test for the Error component

import React from 'react'
import ErrorComponent from './Error'
import { render } from '@testing-library/react'

describe('ErrorComponent', () => {
  it('renders without crashing', () => {
    render(<ErrorComponent />)
  })

  it('renders the error message', () => {
    const { getByText } = render(<ErrorComponent message="Error message" />)
    expect(getByText('Error message')).toBeInTheDocument()
  })
})
