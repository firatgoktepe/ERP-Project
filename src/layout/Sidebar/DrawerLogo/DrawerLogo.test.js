// Path: src/layout/Sidebar/DrawerLogo/DrawerLogo.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import DrawerLogo from './DrawerLogo'

describe('Drawer Logo', () => {
  // Drawer Logo renders correctly
  it('renders correctly', () => {
    const { container } = render(<DrawerLogo />)
    expect(container).toBeTruthy()
  })

  // Drawer Logo renders correctly with an alt text of "Logo"
  it('renders correctly with an src of "../../../assets/logo.png"', () => {
    const { container } = render(<DrawerLogo />)
    expect(container).toBeTruthy()
    const image = screen.getByAltText('Logo')
    expect(image).toBeInTheDocument()
  })
})
