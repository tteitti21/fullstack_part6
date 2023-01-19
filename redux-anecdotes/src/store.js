import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'


const reduxStore = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notificationReducer
  }
})
console.log(reduxStore.getState())
export default reduxStore