import React, { Component } from 'react'
import { MdClear } from 'react-icons/md'
import { addUser, updateUser } from '../Actions/Actions'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

class ModalEdit extends Component {
  constructor (props) {
    super(props)
    const {firstName,lastName, salary, position, gender, _id } = this.props.selectUser
    this.state = {
      firstName: firstName || '',
      lastName: lastName || '',
      salary: salary || '',
      position: position ||'',
      gender: gender || '',
      id: _id
    }
  }
  
  componentDidMount(){

  }
  handleAddUser = () => {
    this.props.addUser(this.state)
    this.props.closeModal();
  }
  handlerUpdate = () =>{
    this.props.updateUser(this.state)
    this.props.closeModal();
  }

  handleChangeInput = (event) => {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
  }

  render () {
    return (
      <StyleContainerModal>
        <Fade>
          <WrapperModalEdit>
            <StyleInput
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='First Name'
            />
            <StyleInput
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Last Name'
            />

            <StyleInput
              name='salary'
              value={this.state.salary}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Salary'
            />
            <StyleInput
              name='position'
              value={this.state.position}
              onChange={this.handleChangeInput}
              placeholder='Position'
              type='text'
            />

            <StyleInput
              name='gender'
              value={this.state.gender}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Gender'
            />
            {this.props.change ? <StyleButtonAdd onClick={this.handleAddUser}>add</StyleButtonAdd> : 
             <StyleButtonAdd onClick={this.handlerUpdate}>update</StyleButtonAdd>}
            <ButtonCloseEdit onClick={this.props.closeModal}><MdClear /></ButtonCloseEdit>
          </WrapperModalEdit>
        </Fade>
      </StyleContainerModal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => 
  dispatch({ type: 'CLOSE_MODAL_MAIN', payload: false }),
  addUser: editUser => dispatch(addUser(editUser)),
  updateUser: update => dispatch(updateUser(update))
})
const mapStateToProps = store => ({
  selectUser: store.selectUser,
  todo: store.toglebutton
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit)


export const StyleContainerModal = styled.div`
top:5%;
// left:32%;
display:flex;
justify-content:center;
width:100%;
position:absolute;
align-items:center;
height:60vh;
`
export const WrapperModalEdit = styled.div`
position:relative;
padding:3rem;
background-color:#1B0A2A;
border:1px solid green;
min-width:300px;
display:flex;
flex-direction:column;
`
export const StyleInput = styled.input`
color:#fff;
background-color:transparent;
outline:none;
border-left:none;
border-right:none;
border-top:none;
border-bottom:1px solid #9932CC;
margin:1rem;

    :focus{
        border-bottom:1px solid #fff;
    }

`
export const StyleButtonAdd = styled.button`
cursor:pointer;
margin:1rem;
background-color:transparent;
border:2px solid #fff;
color:#fff;
outline:none;
height:50px;
text-transform:uppercase;
box-shadow: 0 0 10px rgba(255,255,255,0.8);
text-shadow: 1px 1px 2px black, 0 0 1em white;
`
export const ButtonCloseEdit = styled.button`
position:absolute;
right:10px;
top:8px;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
width:30px;
height:30px;
border-radius:50%;
color:#fff;
outline:none;
cursor:pointer;
border:2px solid white;
font-size:1.5rem;
text-shadow: 1px 1px 2px black, 0 0 1em white;
`

