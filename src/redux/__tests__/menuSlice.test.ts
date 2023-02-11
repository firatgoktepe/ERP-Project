import store from '../store/store'
import { menuSlice } from '../features/menu/menuSlice'

describe('menuSlice', () => {
  it('should toggle the menu', () => {
    expect(store.getState().menu.value).toBe(false)
    store.dispatch(menuSlice.actions.open())
    expect(store.getState().menu.value).toBe(true)
  })
})
