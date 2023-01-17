const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
/** Returns integer */
const getId = () => (100000 * Math.random()).toFixed(0)

/** Creates store object of anecdotes. */
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const createVoteDispatch = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'CREATE',
    data: { anecdote }
  }
}

/** Makes list of store objects */
const initialState = anecdotesAtStart.map(asObject)

/** Do something to the state.*/
const reducer = (state = initialState, action) => {

  //const ordState = state.sort( (a,b) => a.value - b.value) no work?

  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const withAddedVote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anec => anec.id !== id ? anec : withAddedVote)
        .sort( (a,b) => b.votes - a.votes)
      
      case 'CREATE':
        const newAnec = asObject(action.data.anecdote)
        return state.concat(newAnec)
          .sort( (a,b) => b.votes - a.votes)
    default: 
      return state
    }
}

export default reducer