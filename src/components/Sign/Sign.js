import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleButton } from './SignStyle'
import { userSign } from '../Actions/Actions'
import { connect } from 'react-redux'
import ErrorPassword from '../Errors/ErrorPassword'
import ModalError from '../Modals/ModalError'

class Sign extends Component {
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
        <div className='wpapper__main__button'>
          <Link to='/register'><StyleButton>Login in</StyleButton></Link>
        </div>
        <div className='global'>
          {this.props.testStore.showModalError ? <ModalError /> : null}
          <div className='wrapper__login'>
            <label>email</label>
            <input
              name='email'
              id='sign-name'
              value={this.state.email}
              type='email'
              onChange={this.handleChangeInput}
              required
            />
            <label>password</label>
            <input
              name='password'
              id='sign-password'
              value={this.state.password}
              type='password'
              onChange={this.handleChangeInput}
              required
            />
            {this.state.password.length < 6 ? <ErrorPassword /> : null}
            <button onClick={this.handleSubmit}>Sing In</button>
          </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Sign)
