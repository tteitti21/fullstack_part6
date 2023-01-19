import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import reduxStore from './store'

const store = reduxStore

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
)
