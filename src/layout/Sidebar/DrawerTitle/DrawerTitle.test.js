// Path: src/layout/Sidebar/DrawerTitle/DrawerTitle.test.js

import React from 'react'
import { render } from '@testing-library/react'
import DrawerTitle from './DrawerTitle'

describe('Drawer Title', () => {
  // Drawer Title renders correctly
  it('renders correctly', () => {
    const { container } = render(<DrawerTitle />)
    expect(container).toBeTruthy()
  })

  // Drawer Title renders correctly with a title of "Libre Gaudium"
  it('renders correctly with a title of "Libre Gaudium"', () => {
    const { container } = render(<DrawerTitle />)
    expect(container).toBeTruthy()
    expect(container.textContent).toBe('Libre Gaudium')
  })
})
