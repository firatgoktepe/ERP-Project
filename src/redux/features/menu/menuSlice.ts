import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

// declaring the types for our state
export type menuState = {
  value: boolean
}

const initialState: menuState = {
  value: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions.
  // In this example, 'open', 'close' are actions. They can be triggered from outside this slice, anywhere in the app.
  // So for example, if we make a dispatch to the 'open' action here from the index page, it will get triggered and change the value of the state from false to true.
  reducers: {
    open: (state) => {
      state.value = true
    },
    close: (state) => {
      state.value = false
    },
  },
})
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { open, close } = menuSlice.actions

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectmenu = (state: RootState) => state.menu.value

// exporting the reducer here, as we need to add this to the store
export default menuSlice.reducer
