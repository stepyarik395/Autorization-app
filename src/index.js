import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import { history } from './history'
import { reducers } from './components/Reducers/Reducer'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
