import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (object) => {
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (id, updatedAnec) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnec)
  return response.data
}

export default { getAll, createAnecdote, update }