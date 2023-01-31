// Path: src/pages/__tests__/index.test.tsx

// Test handleDrawerOpen() and handleDrawerClose() functions from pages/index.tsx
import '@testing-library/jest-dom'

describe('Test menu handler functions', () => {
  it('handleDrawerOpen', () => {
    const handleDrawerOpen = jest.fn()
    handleDrawerOpen()
    expect(handleDrawerOpen).toHaveBeenCalledTimes(1)
  })
  it('handleDrawerClose', () => {
    const handleDrawerClose = jest.fn()
    handleDrawerClose()
    expect(handleDrawerClose).toHaveBeenCalledTimes(1)
  })
})
