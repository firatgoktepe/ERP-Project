import Example from './Example'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Example', () => {
  it('should render the component', () => {
    render(<Example />)
    expect(screen.getByText('Example')).toBeInTheDocument()
  })
  it('should render the component with the correct text', () => {
    render(<Example text="Example" />)
    expect(screen.getByText('Example')).toBeInTheDocument()
  })
})
