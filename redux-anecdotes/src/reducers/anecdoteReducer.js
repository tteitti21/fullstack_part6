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
        return action.payload.sort( (a,b) => b.votes - a.votes)
      }
    }
})

export const { voteAnecdote, appendAnecdote, setAnecdotes} = anecdoteReducer.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = anecdote => {
  return async dispatch => {
    const objectifiedAnec = anecObject(anecdote)
    const newAnec = await anecdoteService.createAnecdote(objectifiedAnec)
    dispatch(appendAnecdote(newAnec))
  }
}

export default anecdoteReducer.reducer