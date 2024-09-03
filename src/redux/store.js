import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import backgroundSlice from './backgroundColor/backgroundSlice'

export const store = configureStore({
  reducer: {
    count: counterSlice,
    color: backgroundSlice,
  },
})