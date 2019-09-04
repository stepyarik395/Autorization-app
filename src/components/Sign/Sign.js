
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter,Route,Link } from 'react-router-dom';
import {StyleButton} from "./SignStyle";
import { withRouter } from 'react-router-dom'
import {userSign} from '../Actions/Actions';
import { connect } from "react-redux"; 

class Sign extends Component{
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password : "",
      show:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valueEmail = this.valueEmail.bind(this);
    this.valuePassword = this.valuePassword.bind(this);
  }
  
  valueEmail(e){
    this.setState({ email: e.target.value });
      }
  valuePassword(e){
    this.setState({ password: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.userSign(this.state);
  }
    render(){
    	return(
        <div>
          <div className="wpapper__main__button">
            <Link to="/register"><StyleButton>Login in</StyleButton></Link>
          </div>
         	<div className="global">
             <form onSubmit={this.handleSubmit}>
            <div className="wrapper__login">
              <label>email</label>
              <input
                id="sign-name"
                value={this.state.email}
                type="email"
                onChange={this.valueEmail}>
              </input>
              <label>password</label>
              <input id="sign-password"
               value={this.state.password}
               type="password"
               onChange={this.valuePassword}></input>
               <span></span>
              <button type = "submit">Sing In</button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSign: userInfo => dispatch(userSign(userInfo))
})
const mapStateToProps = state =>({
  testStore: state
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sign))
 

