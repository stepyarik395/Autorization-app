import React, { Component } from 'react'
import { WrapperModalEdit, StyleContainerModal, StyleInput, StyleButtonAdd, ButtonCloseEdit, StyleTitle } from './ModalStyles'
import { MdClear } from 'react-icons/md'
import { addUser, updateUser } from '../Actions/Actions'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

class ModalEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: this.props.selectUser.firstName,
      lastName: this.props.selectUser.lastName,
      salary: this.props.selectUser.salary,
      position: this.props.selectUser.position,
      gender: this.props.selectUser.gender
    }
  }
  
  componentDidMount(){

  }
  handleAddUser = () => {
    this.props.addUser(this.state)
    this.props.closeModalEdit();
  }
  handlerUpdate = () =>{
    this.props.updateUser(this.props.selectUser)
    this.props.closeModalEdit();
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
            <StyleTitle>Add user</StyleTitle>
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
            {this.props.toggle ? <button onClick={this.handleAddUser}>add</button> :  <button onClick={this.handlerUpdate}>update</button>}
            <ButtonCloseEdit onClick={this.props.closeModalEdit}><MdClear /></ButtonCloseEdit>
          </WrapperModalEdit>
        </Fade>
      </StyleContainerModal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeModalEdit: () => 
  dispatch({ type: 'CLOSE_MODAL_EDIT', payload: false }),
  // dispatch({ type: 'CLEAR_USER', payload: {} })),
  addUser: editUser => dispatch(addUser(editUser)),
  updateUser: update => dispatch(updateUser(update))
})
const mapStateToProps = store => ({
  selectUser: store.selectUser,
  todo: store.toglebutton
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit)
