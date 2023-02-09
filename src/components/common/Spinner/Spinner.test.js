//Path: src/components/common/Example/Spinner/Spinner.test.js
// Test for the Spinner component

import React from 'react'
import Spinner from './Spinner'
import { render } from '@testing-library/react'

describe('Spinner', () => {
  it('renders without crashing', () => {
    render(<Spinner open />)
  })
})
