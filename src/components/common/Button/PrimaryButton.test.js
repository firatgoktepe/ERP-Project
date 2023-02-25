import { render, screen } from '@testing-library/react'
import PrimaryButton from './PrimaryButton'

describe('PrimaryButton', () => {
  const defaultProps = {
    title: 'Click me!',
  }

  it('applies margin styles if className prop is provided', () => {
    const className = 'custom-class'
    render(<PrimaryButton {...defaultProps} className={className} />)
    const button = screen.getByText(defaultProps.title)
    expect(button).toHaveStyle('marginTop: 5rem')
    expect(button).toHaveStyle('marginLeft: 6rem')
  })

  it('applies responsive width styles if className prop and media query match', () => {
    const className = 'custom-class'
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }
    })
    render(<PrimaryButton {...defaultProps} className={className} />)
    const button = screen.getByText(defaultProps.title)
    expect(button).toHaveStyle('width: 30%')
  })

  it('does not apply margin styles if className prop is not provided', () => {
    render(<PrimaryButton {...defaultProps} />)
    const button = screen.getByText(defaultProps.title)
    expect(button).not.toHaveStyle('marginTop: 5rem')
    expect(button).not.toHaveStyle('marginLeft: 6rem')
  })

  it('does not apply responsive width styles if className prop is not provided', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }
    })
    render(<PrimaryButton {...defaultProps} />)
    const button = screen.getByText(defaultProps.title)
    expect(button).not.toHaveStyle('width: 30%')
  })
})
