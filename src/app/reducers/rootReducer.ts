import { combineReducers } from '@reduxjs/toolkit'
import menuReducer from '../features/menu/menuSlice'
import profileMenuReducer from '../features/profileElements/profileMenuSlice'
import mobileProfileMenuReducer from '../features/profileElements/mobileProfileMenuSlice'

const rootReducer = combineReducers({
  menu: menuReducer,
  profileMenu: profileMenuReducer,
  mobileProfileMenu: mobileProfileMenuReducer,
})

export default rootReducer
