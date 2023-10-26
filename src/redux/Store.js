import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../pages/counter/CounterSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
})