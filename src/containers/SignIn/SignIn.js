import React, { Component } from 'react'
import { userSign } from '../../components/Actions/Actions'
import { connect } from 'react-redux'
import ErrorPassword from '../../components/Errors/ErrorPassword'
import ModalError from '../../components/Modals/ModalError'
import styled from 'styled-components'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangeInput = (event) => {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
  }

  handleSubmit = (e) => {
    this.props.userSign(this.state)
    this.setState({
      email: '',
      password: ''

    })
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

export const StyleButton = styled.button`
width:100%;
outline: none;
cursor: pointer;
margin-top:20px;
height: 50px;
background-color: transparent;
border: 1px solid #9932CC;
text-transform: uppercase;
:hover{
  color:#fff;
  transition: 0.3s all;
  border:none;
  background: rgba(248,80,50,1);/* Old Browsers */
  background: linear-gradient(135deg, rgba(248,80,50,1) 0%, rgba(245,12,229,1) 19%, rgba(240,47,23,1) 76%, rgba(231,56,39,1) 100%);/* W3C */


}
`
export const StyleGlobalWrapper = styled.div`
height: 70vh;
display: flex;
justify-content:center;
align-items: center;
`
export const StyleWrapperSign = styled.div`
box-sizing: border-box;
text-align: center;
flex-direction: column;
display: flex;
`
export const StyleInputSign = styled.input`

width:100%;
font-size: 2rem;
border: 2px solid  #9932CC;
@media (max-width: 767.98px) {
}
`
export const StyleLabel = styled.label`
display:block;
margin:1rem;
 text-transform: uppercase;
`
