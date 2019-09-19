import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userPost } from '../Actions/Actions'
import ErrorPassword from '../Errors/ErrorPassword'
import ModalError from '../Modals/ModalError'
import { StyleGlobalWrapper, StyleWrapperSign, StyleInputSign, StyleLabel, StyleButton } from '../SignIn/SignStyle';

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      name: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput (event) {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
  }

  handleSubmit (e) {
    console.log(this.state)
    this.setState({
      name: '',
      email: '',
      password: ''
    })
    this.props.userPost(this.state)
  }

  render () {
    return (
      <StyleGlobalWrapper>
        {this.props.testStore.showModalError ? <ModalError /> : null}
        <StyleWrapperSign>
          <StyleLabel>name</StyleLabel>
          <StyleInputSign name='name' value={this.state.name} onChange={this.handleChangeInput} type='text' required />
          <StyleLabel>email</StyleLabel>
          <StyleInputSign
            name='email'
            value={this.state.email}
            onChange={this.handleChangeInput}
            type='email'
            required
          />
          <StyleLabel>password</StyleLabel>
          <StyleInputSign
            name='password'
            value={this.state.password}
            onChange={this.handleChangeInput}
            type='password'
            required
          />
          <br />
          {this.state.password.length < 6 ? <ErrorPassword /> : null}
          <StyleButton onClick={this.handleSubmit}>Sign up</StyleButton>
        </StyleWrapperSign>
      </StyleGlobalWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPost: userInfo => dispatch(userPost(userInfo))
})
const mapStateToProps = state => ({
  testStore: state
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
