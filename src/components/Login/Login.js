import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom'

class Login extends Component{
  constructor(props){
    super(props)
    this.token = this.token;
    this.state = {
      name : "",
      password : "",
      email:"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valueName = this.valueName.bind(this);
    this.valuePassword = this.valuePassword.bind(this);
    this.valueEmail = this.valueEmail.bind(this);
  }
  valueName(e){
    this.setState({ name: e.target.value });
      }
  valuePassword(e){
    this.setState({ password: e.target.value });
  }
  valueEmail(e){
    this.setState({ email: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:8080/register',this.state )
    .then(res => {
      console.log(res);
      const token = res.data.token;
      console.log(token)
      this.props.history.push('/main');
      this.props.onAddToken(token);
    })
    .catch(error => {
      console.log(error);
    });
  }

  requestHendler(){
    
  }

  render(){
    return(
      <div className="global">
        <div className="wrapper__login">
          <form onSubmit={this.handleSubmit}>
          <label>name</label>
          <input onChange={this.valueName}type="text"></input>
          <label>email</label>
          <input onChange = {this.valueEmail}type="email"></input>
          <label>password</label><input onChange = {this.valuePassword} type="password"></input>
          <br></br>
          <button type  ="submit">Login in</button>
          </form>
         </div>
        </div>
        );
  }
}
export default withRouter(connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddToken: (token) => {
      dispatch({ type: 'LOGIN_USER', payload: token });
    }
  })

)(Login))
  
// )(Login);
  



