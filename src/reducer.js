const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GOOD':
      const updatedState = {
        ...state,
        good: state.good + 1
      }
      return updatedState
    case 'OK':
      return state
    case 'BAD':
      return state
    case 'ZERO':
      return state
    default: return state
  }
  
}

export default counterReducer