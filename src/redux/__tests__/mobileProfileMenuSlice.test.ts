import store from '../store/store'
import { mobileProfileMenuSlice } from '../features/profileElements/mobileProfileMenuSlice'

describe('mobileprofileMenuSlice', () => {
  it('should toggle the profile menu', () => {
    expect(store.getState().mobileProfileMenu.value).toBe(null)
    store.dispatch(mobileProfileMenuSlice.actions.openMobileProfile())
    expect(store.getState().mobileProfileMenu.value).toBe(
      event?.currentTarget as any
    )
  })
})
