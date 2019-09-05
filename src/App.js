import React, { Component } from 'react';
import './App.css';
import Sign from './components/Sign/Sign';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { Route } from 'react-router-dom';

class App extends Component {
  render() {

    return (
        <div>
          <Route exact path="/" component={Home} />
          <Route path='/register' component={Login}/>
          <Route path='/login' component={Sign}/>
          <Route path='/main' component={Main}/>
        </div>
    );
  }
}

export default App;
  
