import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import backgroundSlice from './backgroundColor/backgroundSlice'
import iconSlice from './iconChange/iconSlice'

export const store = configureStore({
  reducer: {
    count: counterSlice,
    color: backgroundSlice,
    icon: iconSlice,
  },
})