// unit test for the useFetch hook

import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import useFetch from './useFetch'

describe('useFetch', () => {
  it('should return an object with an error property', () => {
    const { result } = renderHook(() =>
      useFetch('https://api.github.com/users')
    )
    act(() => {
      result.current
    })
    expect(result.current).toHaveProperty('error')
  })

  it('should return an object with a data property', () => {
    const { result } = renderHook(() =>
      useFetch('https://api.github.com/users')
    )
    act(() => {
      result.current
    })
    expect(result.current).toHaveProperty('data')
  })
})
