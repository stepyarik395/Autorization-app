
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter,Route,Link } from 'react-router-dom';

class Sign extends Component{
  constructor(props){
    super(props)
    this.state = {
      sessionToken: null,
      name : "",
      password : "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valueName = this.valueName.bind(this);
    this.valuePassword = this.valuePassword.bind(this);
  }
  valueName(e){
    this.setState({ name: e.target.value });
      }
  valuePassword(e){
    this.setState({ password: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:8080/login', this.state)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
  }
    render(){
    	return(
        <div>
          <div className="wpapper__main__button">
          <Link to="/register"> <button>Login in</button></Link>
        </div>
         	<div className="global">
             <form onSubmit={this.handleSubmit}>
            <div className="wrapper__login">
              <label>name</label>
              <input
                id="sign-name"
                value={this.state.name}
                type="text"
                onChange={this.valueName}>
              </input>
              <label>password</label>
              <input id="sign-password"
               value={this.state.password}
               type="password"
               onChange={this.valuePassword}></input>
              <button type="submit">Sing In</button>
            </div>
            </form>
        </div>
        </div>
    );
  }
}
export default Sign;
 

