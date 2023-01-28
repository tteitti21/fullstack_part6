import { createSlice } from "@reduxjs/toolkit"

const initialNotification = 'First notification'

const notificationReducer = createSlice({
  name: 'notification',
  initialState: initialNotification,
  reducers: {
    changeNotification(state, action) {
      state = action.payload
      return state
    },
    resetNotification(state, action) {
      state = ''
      return state
    }
  }
})

export const setNotification = (text, time) => {
  return async dispatch => {
    dispatch({ type: 'notification/changeNotification', 
    payload: text })
    setTimeout(() => {
      dispatch({ type: 'notification/resetNotification' })
    }, time*1000) 
  }
}

export default notificationReducer.reducer