import { createSlice } from "@reduxjs/toolkit"

const notificationReducer = createSlice({
  name: 'notification',
  initialState: {
    notification: '',
    timeoutID: undefined,
    },
  reducers: {
    changeNotification(state, action) {
      if (state.timeoutID) {
        clearTimeout(state.timeoutID)
      }
      state.notification = action.payload
      return state
    },
    resetNotification(state, action) {
      state.notification = ''
      state.timeoutID = undefined
      return state
    },
    setNotificationID(state, action) {
      state.timeoutID = action.payload
      return state
    },
  }
})

export const setNotification = (text, time) => {
  return async dispatch => {
    dispatch({ type: 'notification/changeNotification', 
    payload: text })
    const timeoutID = setTimeout(() => {
      dispatch({ type: 'notification/resetNotification' })
    }, time*1000) 
    dispatch({ type: 'notification/setNotificationID',
    payload: timeoutID })
  }
}

export default notificationReducer.reducer