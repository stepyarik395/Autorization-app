import React, { Component } from 'react'
import './App.css'
import Sign from './components/Sign/Sign'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import { Route, Redirect } from 'react-router-dom'

const isAut = (component) => {
  return (
    <div>
      {window.localStorage.getItem('token') ? (
        <Redirect to='/main' />
      ) : (
        component
      )}
    </div>

  )
}
class App extends Component {
  render () {
    return (
      <div>
        <Route
          path='/' render={() => (
            isAut(<Home />)
          )}
        />
        <Route
          path='/login' render={() => (
            isAut(<Sign />)
          )}
        />
        <Route
          path='/register' render={() => (
            isAut(<Login />)
          )}
        />
        <Route
          path='/main' render={() => (
            isAut()
            // <Main />
          )}
        />
        <Route
          path='/main/:id' render={() => (
            <Main />
          )}
        />
      </div>
    )
  }
}
export default (App)
