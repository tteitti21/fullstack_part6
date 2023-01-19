import { useDispatch, useSelector } from "react-redux";

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
  
    const vote = (anecdote) => {
      dispatch({ type:'anecdotes/voteAnecdote', payload: anecdote.id })
      dispatch({ type: 'notification/changeNotification', 
        payload: { anecdote: anecdote, text: 'You voted' } })
      setTimeout(() => {
        dispatch({ type: 'notification/resetNotification' })
      }, 5000) 
      
    }

    return (
      anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
    </div>
    )
  )
}

export default AnecdoteList