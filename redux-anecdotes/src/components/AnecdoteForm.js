import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {

    const create = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value 
        props.createAnecdote(anecdote)
        event.target.anecdote.value = ''
        props.setNotification(`Created new anecdote '${anecdote}`, 5)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
}

const ConnectedAnecdotesForm = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteForm)

export default ConnectedAnecdotesForm