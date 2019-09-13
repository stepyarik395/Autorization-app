import React, { Component } from 'react';
import './App.css';
import Sign from './components/Sign/Sign';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { Route,Redirect,withRouter } from 'react-router-dom';




class App extends Component {
  
  componentDidMount(){
    console.log("1111",this.props)
  }  

  render() {
   
    return (
        <div>
          <Route exact path="/" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/main" />
            ) : (
              <Home />
            )
           )} />
           <Route exact path="/login" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/main" />
            ) : (
              <Sign/>
            )
           )} />
           <Route exact path="/register" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/main" />
            ) : (
              <Login/>
            )
           )} />
             <Route exact path="/main/:id" render={() => (
            localStorage.getItem('token') ? (
              <Main />
            ) : (
              <Redirect to ="/register" />
            )
           )} />
            {/* <Route exact path="/main/:1" render={() => (
            localStorage.getItem('token') ? (
              <Main />
            ) : (
              <Redirect to ="/register" />
            )
           )} /> */}
        </div>
    );
  }
}
export default withRouter(App);
  
