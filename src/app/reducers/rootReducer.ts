import { combineReducers } from '@reduxjs/toolkit'
import menuReducer from '../features/menu/menuSlice'

const rootReducer = combineReducers({ menu: menuReducer })

export default rootReducer
