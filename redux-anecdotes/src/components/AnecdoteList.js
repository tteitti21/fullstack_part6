import { connect } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes
  
    const vote = (anecdote) => {
      props.voteAnecdote(anecdote)
      props.setNotification(`you voted '${anecdote.content}`, 5)  
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
}

const ConnectedAnecdotesList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)

export default ConnectedAnecdotesList