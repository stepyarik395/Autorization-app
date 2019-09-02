
import React, { Component } from 'react';
import axios from 'axios';

class Sign extends Component{
  constructor(props){
    super(props)

    this.state = {
      sessionToken: null,
      name : "",
      password : "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ValueName = this.ValueName.bind(this);
    this.ValuePassword = this.ValuePassword.bind(this);
  }
  ValueName(e){
    this.setState({ name: e.target.value });
      }
  ValuePassword(e){
    this.setState({ password: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:8080/login', this.state)
    .then(res => {
      console.log(res);
    })

  }
    render(){
    	return(
         	<div className="global">
             <form onSubmit={this.handleSubmit}>
            <div className="wrapper__login">
              <label>name</label>
              <input
                id="sign-name"
                value={this.state.name}
                type="text"
                onChange={this.ValueName}>
              </input>
              <label>password</label>
              <input id="sign-password"
               value={this.state.password}
               type="password"
               onChange={this.ValuePassword}></input>
              <button type="submit">Sing In</button>
            </div>
            </form>
        </div>
    );
  }
}
export default Sign;
 

