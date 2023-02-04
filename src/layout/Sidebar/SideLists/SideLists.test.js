// Path: src/layout/Sidebar/SideLists/SideLists.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import SideLists from './SideLists'

describe('Side Lists', () => {
  // Side Lists renders correctly
  it('renders correctly', () => {
    const { container } = render(<SideLists />)
    expect(container).toBeTruthy()
  })

  // First list item renders correctly and its length is 4
  it('First Lists length is 4', () => {
    const { container } = render(<SideLists />)
    expect(container).toBeTruthy()
    const list = screen.getAllByTestId('list-item-one')
    expect(list.length).toBe(4)
  })

  // Second list item renders correctly and its length is 3
  it('Second Lists length is 4', () => {
    const { container } = render(<SideLists />)
    expect(container).toBeTruthy()
    const list = screen.getAllByTestId('list-item-two')
    expect(list.length).toBe(3)
  })
})
