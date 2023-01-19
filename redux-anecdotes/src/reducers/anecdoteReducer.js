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
      appendAnecdote(state, action) {
        state.push(action.payload)
      },
      setAnecdotes(state, action) {
        return action.payload.sort( (a,b) => b.votes - a.votes)
      }
    }
})

export const { appendAnecdote, setAnecdotes} = anecdoteReducer.actions

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

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const withAddedVote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const response = await anecdoteService.update(anecdote.id, withAddedVote)
    dispatch(initializeAnecdotes())
  }
}

export default anecdoteReducer.reducer