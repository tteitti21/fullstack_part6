import { useDispatch } from "react-redux";

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch({ type:'anecdotes/createAnecdote', payload: anecdote })
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