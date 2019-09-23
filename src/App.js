import React, { Component } from 'react'
import './App.css'
import SignUp from './containers/SignUp/SignUp'
import SignIn from './containers/SignIn/SignIn'
import Home from './containers/Home/Home'
import Main from './containers/Main/Main'
import { Route, Redirect } from 'react-router-dom'

const isAuth = (component) => {
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
            isAuth(<Home />)
          )}
        />
        <Route
          path='/signup' render={() => (
            isAuth(<SignUp />)
          )}
        />
        <Route
          path='/signin' render={() => (
            isAuth(<SignIn />)
          )}
        />
        <Route
          path='/main' render={() => {
            isAuth()
            return <Redirect to='/main/1' />
          }}
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
