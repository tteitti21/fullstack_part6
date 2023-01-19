import { useDispatch, useSelector } from "react-redux";

const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
  
    const vote = (id) => {
      dispatch({ type:'anecdotes/voteAnecdote', payload: id })
    }

    return (
      anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
    </div>
    )
  )
}

export default AnecdoteList