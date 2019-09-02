import React, { Component } from 'react';
import './App.css';
import Sign from './components/Sign/Sign';
import Login from "./components/Login/Login";
import Mainpage from "./components/Mainpage/Mainpage";
import { connect } from "react-redux";
import { Route,Link, } from 'react-router-dom';

class App extends Component {
  render() {

    return (
        <div>
          <div className="wpapper__main__button">
            <Link to="/register"> <button>Login in</button></Link>
            <Link to="/login"><button>Sign in</button></Link>
          </div>
            <Route exact path ="/" component = {Mainpage} />
            <Route path='/register' component={Login}/>
            <Route path='/login' component={Sign}/>
        </div>
    );
  }
}

export default App;
  
