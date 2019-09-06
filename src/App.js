import React, { Component } from 'react';
import './App.css';
import Sign from './components/Sign/Sign';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { Route,Redirect,Switch } from 'react-router-dom';
import  { history } from './history';




class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
   
    return (
        <div>
          <Route exact path="/" render={() => (
            localStorage.getItem('token') ? (
              <Main />
            ) : (
              <Home />
            )
           )} />
           <Route exact path="/login" render={() => (
            localStorage.getItem('token') ? (
             <Main />
            ) : (
              <Sign/>
            )
           )} />
           <Route exact path="/register" render={() => (
            localStorage.getItem('token') ? (
             <Main />
            ) : (
              <Login/>
            )
           )} />
            <Route exact path="/main" render={() => (
            localStorage.getItem('token') ? (
              <Main />
            ) : (
              <Redirect to ="/register" />
            )
           )} />



               {/* <Route exact path='/' component={Home}/>
               <Route path='/register' component={Login}/>
               <Route path='/login' component={Sign}/> 
               <Route path='/main' component={Main}/>  */}
        </div>
    );
  }
}

export default App;
  
