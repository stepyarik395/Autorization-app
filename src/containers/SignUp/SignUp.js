import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSignUp } from '../../components/Actions/Actions'
import ErrorPassword from '../../components/Errors/ErrorPassword'
import ModalError from '../../components/Modals/ModalError'
import { StyleGlobalWrapper, StyleWrapperSign, StyleInputSign, StyleLabel, StyleButton } from '../SignIn/SignIn'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: '',
      name: '',
      email: ''
    }
  }

  handleChangeInput = (event) => {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
  }

  handleSubmit = (e) => {
    this.setState({
      name: '',
      email: '',
      password: ''
    })
    this.props.userSignUp(this.state)
  }

  render () {
    const {modalError} = this.props
    return (
      <StyleGlobalWrapper>
        {modalError ? <ModalError /> : null}
        <StyleWrapperSign>
          <StyleLabel>name</StyleLabel>
          <StyleInputSign name='name'
            value={this.state.name} 
            onChange={this.handleChangeInput}
            type='text' 
           />
          <StyleLabel>email</StyleLabel>
          <StyleInputSign
            name='email'
            value={this.state.email}
            onChange={this.handleChangeInput}
            type='email'
          />
          <StyleLabel>password</StyleLabel>
          <StyleInputSign
            name='password'
            value={this.state.password}
            onChange={this.handleChangeInput}
            type='password'
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
  userSignUp: userInfo => dispatch(userSignUp(userInfo))
})
const mapStateToProps = store => ({
  modalError:store.showModalError
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
