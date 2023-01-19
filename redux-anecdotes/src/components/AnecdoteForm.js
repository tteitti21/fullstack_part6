import { useDispatch } from "react-redux";

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch({ type:'anecdotes/createAnecdote', payload: anecdote })
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