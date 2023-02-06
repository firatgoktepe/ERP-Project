// Path: src/components/common/Example/Error/Error.test.js
// Test for the Error component

import React from 'react'
import Error from './Error'
import { render } from '@testing-library/react'

describe('Error', () => {
  it('renders without crashing', () => {
    render(<Error />)
  })

  it('renders the error message', () => {
    const { getByText } = render(<Error message="Error message" />)
    expect(getByText('Error message')).toBeInTheDocument()
  })
})
