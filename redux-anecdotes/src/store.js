import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/anecdoteReducer'

const reduxStore = configureStore({
  reducer: {
    anecdotes: reducer,
  }
})
console.log(reduxStore.getState())
export default reduxStore