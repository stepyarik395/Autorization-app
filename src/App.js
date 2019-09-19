import React, { Component } from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
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
          path='/signup' render={() => (
            isAut(<SignUp />)
          )}
        />
        <Route
          path='/signin' render={() => (
            isAut(<SignIn />)
          )}
        />
        <Route
          path='/main' render={() => {
            isAut()
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
