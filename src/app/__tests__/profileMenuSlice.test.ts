import store from '../store/store'
import { profileMenuSlice } from '../features/profileElements/profileMenuSlice'

describe('profileMenuSlice', () => {
  it('should toggle the profile menu', () => {
    expect(store.getState().profileMenu.value).toBe(null)
    store.dispatch(profileMenuSlice.actions.openProfile())
    expect(store.getState().profileMenu.value).toBe(event?.currentTarget as any)
  })
})
