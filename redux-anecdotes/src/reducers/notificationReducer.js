import { createSlice } from "@reduxjs/toolkit"

const initialNotification = 'First notification'

const notificationReducer = createSlice({
  name: 'notification',
  initialState: initialNotification,
  reducers: {
    changeNotification(state, action) {
      console.log(action.payload, 'here')
      const anecdote = action.payload.anecdote.content
      const text = action.payload.text 
      state = `${text} '${anecdote}'`
      return state
    },
    resetNotification(state, action) {
      state = ''
      return state
    }
  }
})

export default notificationReducer.reducer