import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value 
        dispatch(createAnecdote(anecdote))
        event.target.anecdote.value = ''
        dispatch({ type: 'notification/changeNotification', 
        payload: { anecdote: { content: anecdote }, text: 'Created new anecdote' } })
        setTimeout(() => {
          dispatch({ type: 'notification/resetNotification' })
        }, 5000) 
      }

    return (
      <>
        <h2>create new</h2>
        <form onSubmit={create}>
            <div><input name='anecdote'/></div>
            <button type='submit'>create</button>
        </form>
      </>
    )
}

export default AnecdoteForm