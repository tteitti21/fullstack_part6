import { createSlice } from "@reduxjs/toolkit"

/** Returns integer */
const getId = () => (100000 * Math.random()).toFixed(0)

/** Creates store object of anecdotes. */
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

/** Do something to the state.*/
const anecdoteReducer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
        const newAnec = asObject(action.payload)
        return state.concat(newAnec)
        .sort( (a,b) => b.votes - a.votes)
      },
      voteAnecdote(state, action) {
        const id = action.payload
        const anecdoteToChange = state.find(n => n.id === id)
        const withAddedVote = {
          ...anecdoteToChange,
          votes: anecdoteToChange.votes + 1
        }
        return state.map(anec => anec.id !== id ? anec : withAddedVote)
          .sort( (a,b) => b.votes - a.votes)
      },
      appendAnecdote(state, action) {
        state.push(action.payload)
      },
      setAnecdotes(state, action) {
        return action.payload
      }
    }
})

export default anecdoteReducer.reducer