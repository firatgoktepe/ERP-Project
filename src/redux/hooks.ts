// The purpose of the below code is to simply allow us to use useAppDispatch and useAppSelector with type-safe
// instead of the plain useDispatch and useSelector. It’s just some more boilerplate you should not worry about.

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../redux/store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
