import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import phoneReducer from './reducers/phoneReducer'
import filterReducer from './reducers/filterReducer.js'
import './index.css'

const reducer = combineReducers({
  persons: phoneReducer,
  filter: filterReducer
})

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
