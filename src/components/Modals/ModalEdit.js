import React, { Component } from 'react'
import { WrapperModalEdit, StyleContainerModal, StyleInput, StyleButtonAdd, ButtonCloseEdit, StyleTitle } from './ModalStyles'
import { MdClear } from 'react-icons/md'
import { addUser } from '../Actions/Actions'
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
  }
  handleAddUser = () => {
    this.props.addUser(this.state)
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
              required
            />
            <StyleInput
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Last Name'
              required
            />

            <StyleInput
              name='salary'
              value={this.state.salary}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Salary'
              required
            />
            <StyleInput
              name='position'
              value={this.state.position}
              onChange={this.handleChangeInput}
              placeholder='Position'
              type='text'
              required
            />

            <StyleInput
              name='gender'
              value={this.state.gender}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Gender'
              required
            />

            <StyleButtonAdd onClick={this.handleAddUser}>Add</StyleButtonAdd>
            <ButtonCloseEdit onClick={this.props.closeModalEdit}><MdClear /></ButtonCloseEdit>
          </WrapperModalEdit>
        </Fade>
      </StyleContainerModal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeModalEdit: () => dispatch({ type: 'CLOSE_MODAL_EDIT', payload: false }),
  addUser: editUser => dispatch(addUser(editUser))

})
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit)
