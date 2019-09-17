import React, { Component } from 'react';
import './App.css';
import Sign from './components/Sign/Sign';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { Route,Redirect,withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {selectPage} from './components/Actions/Actions';



class App extends Component {
  
  render() {

    return (
        <div>
          <Route path="/" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/main" />
            ) : (
              <Home />
            )
           )} />
           <Route path="/login" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/main" />
            ) : (
              <Sign/>
            )
           )} />
           <Route path="/register" render={() => (
            localStorage.getItem('token') ? (
              <Redirect to="/main" />
            ) : (
              <Login/>
            )
           )} />
             <Route exact path="/main" render={() => (
            localStorage.getItem('token') ? (
              
              <Main />,
              <Redirect to="/main/1" />
            ) : (
              <Redirect to="/register" />
            )
           )} />
            <Route path="/main/:id" render={() => (
            localStorage.getItem('token') ? (
              <Main />
            ) : (
              <Redirect to="/register" />
            )
           )} />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
	selectPage: select => dispatch(selectPage(select)),

})
const mapStateToProps = state =>({
	testStore: state	
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
  
