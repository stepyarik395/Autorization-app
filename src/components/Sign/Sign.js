
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyleButton } from "./SignStyle";
import {userSign} from '../Actions/Actions';
import { connect } from "react-redux";
import ErrorPassword from '../Errors/ErrorPassword';
import ModalError from '../Modals/ModalError';

class Sign extends Component{
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password : "",
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
    // this.props.modalTogle;
  }
    render(){
    	return(
        <div>
          <div className="wpapper__main__button">
            <Link to="/register"><StyleButton>Login in</StyleButton></Link>
          </div>
         	<div className="global">
             {this.props.testStore.showModalError ? <ModalError inputValue={this.state} />: null}
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
               {this.state.password.length < 6 ? <ErrorPassword /> : null}
              <button type="submit">Sing In</button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSign: userInfo => dispatch(userSign(userInfo)),
})

const mapStateToProps = state =>({
  testStore: state
})


export default connect(mapStateToProps,mapDispatchToProps)(Sign)
 

