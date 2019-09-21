import React, { Component } from 'react'
import { userSign } from '../../components/Actions/Actions'
import { connect } from 'react-redux'
import ErrorPassword from '../../components/Errors/ErrorPassword'
import ModalError from '../../components/Modals/ModalError'
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
    const { modalError } = this.props
    return (
      <div>
        <StyleGlobalWrapper>
          {modalError ? <ModalError /> : null}
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

const mapStateToProps = store => ({
  modalError:store.showModalError
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
