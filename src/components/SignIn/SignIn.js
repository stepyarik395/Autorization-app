import React, { Component } from 'react'
import { userSign } from '../Actions/Actions'
import { connect } from 'react-redux'
import ErrorPassword from '../Errors/ErrorPassword'
import ModalError from '../Modals/ModalError'
import { StyleGlobalWrapper, StyleWrapperSign, StyleInputSign, StyleLabel, StyleButton } from './SignStyle'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
    this.setState({
      email: '',
      password: ''

    })
    this.props.userSign(this.state)
  }

  render () {
    return (
      <div>
        <StyleGlobalWrapper>
          {this.props.testStore.showModalError ? <ModalError /> : null}
          <StyleWrapperSign>
            <StyleLabel>email</StyleLabel>
            <StyleInputSign
              name='email'
              id='sign-name'
              value={this.state.email}
              type='email'
              onChange={this.handleChangeInput}
              required
            />
            <StyleLabel>password</StyleLabel>
            <StyleInputSign
              name='password'
              id='sign-password'
              value={this.state.password}
              type='password'
              onChange={this.handleChangeInput}
              required
            />
            {this.state.password.length < 6 ? <ErrorPassword /> : null}
            <StyleButton onClick={this.handleSubmit}>Sign in</StyleButton>
          </StyleWrapperSign>
        </StyleGlobalWrapper>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userSign: userInfo => dispatch(userSign(userInfo))
})

const mapStateToProps = state => ({
  testStore: state
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
