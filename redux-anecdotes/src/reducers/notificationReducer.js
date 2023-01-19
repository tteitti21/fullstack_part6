import { createSlice } from "@reduxjs/toolkit"

const initialNotification = 'First notification'

const notificationReducer = createSlice({
  name: 'notification',
  initialState: initialNotification,
  reducers: {
    changeNotification(state, action) {
      return state
    },
  }
})

export default notificationReducer.reducer