const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GOOD':
      const updatedGoodState = {
        ...state,
        good: state.good + 1
      }
      return updatedGoodState
    case 'OK':
      const updatedOkState = {
        ...state,
        ok: state.ok + 1
      }
      return updatedOkState
    case 'BAD':
      const updatedBadState = {
        ...state,
        bad: state.bad + 1
      }
      return updatedBadState
    case 'ZERO':
      const resettedState = {
        ...initialState
      }
      return resettedState
    default: return state
  }
}

export default counterReducer