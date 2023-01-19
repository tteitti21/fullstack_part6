import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

/** Creates store object of anecdotes. */
export const anecObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

/** Do something to the state.*/
const anecdoteReducer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
        const newAnec = action.payload
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

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes} = anecdoteReducer.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteReducer.reducer