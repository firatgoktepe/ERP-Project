import React from 'react'
import { render } from '@testing-library/react'
import ActionAreaCard from './ActionAreaCard'

describe('ActionAreaCard', () => {
  const item = {
    route: '/some-route',
    image: '/path/to/image',
    name: 'Module Name',
  }

  it('renders a card with an image, link and button', () => {
    const { getByText } = render(<ActionAreaCard {...item} />)

    const button = getByText(item.name)
    expect(button).toBeInTheDocument()
  })
})
