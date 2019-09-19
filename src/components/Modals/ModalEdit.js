import React, { Component } from 'react'
import { WrapperModalEdit, StyleContainerModal, StyleInput, StyleButtonAdd, ButtonCloseEdit, StyleTitle } from './ModalStyles'
import { MdClear } from 'react-icons/md'
import { closeModalEdit, addUser } from '../Actions/Actions'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

class ModalEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      salary: '',
      position: '',
      gender: ''
    }
    this.handleCloseModalEdit = this.handleCloseModalEdit.bind(this)
    this.handleAddUser = this.handleAddUser.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleCloseModalEdit () {
    this.props.closeModalEdit()
  }

  handleAddUser () {
    this.props.addUser(this.state)
  }

  handleChangeInput (event) {
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

            <StyleButtonAdd onClick={this.handleAddUser}>Add</StyleButtonAdd>
            <ButtonCloseEdit onClick={this.handleCloseModalEdit}><MdClear /></ButtonCloseEdit>
          </WrapperModalEdit>
        </Fade>
      </StyleContainerModal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeModalEdit: closeEdit => dispatch(closeModalEdit(closeEdit)),
  addUser: editUser => dispatch(addUser(editUser))

})

export default connect(mapDispatchToProps)(ModalEdit)
