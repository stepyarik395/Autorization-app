import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userPost } from '../Actions/Actions'
import ErrorPassword from '../Errors/ErrorPassword'
import ModalError from '../Modals/ModalError'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValueName = this.handleValueName.bind(this)
    this.handleValuePassword = this.handleValuePassword.bind(this)
    this.handleValueEmail = this.handleValueEmail.bind(this)
  }

  handleValueName (e) {
    this.setState({ name: e.target.value })
  }

  handleValuePassword (e) {
    this.setState({ password: e.target.value })
  }

  handleValueEmail (e) {
    this.setState({ email: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.userPost(this.state)
  }

  render () {
    return (
      <div className='global'>
        {this.props.testStore.showModalError ? <ModalError inputValue={this.state} /> : null}
        <div className='wrapper__login'>
          <form onSubmit={this.handleSubmit}>
            <label>name</label>
            <input onChange={this.handleValueName} type='text' value={this.state.name} required />
            <label>email</label>
            <input
              onChange={this.handleValueEmail}
              type='email'
              value={this.state.email}
              required
            />
            <label>password</label>
            <input
              onChange={this.handleValuePassword}
              type='password'
              value={this.state.password}
              required
            />
            <br />
            {this.state.password.length < 6 ? <ErrorPassword /> : null}
            <button type='submit'>Login in</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPost: userInfo => dispatch(userPost(userInfo))
})
const mapStateToProps = state => ({
  testStore: state
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
