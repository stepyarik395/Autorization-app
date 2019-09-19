import React, { Component } from 'react'
import { WrapperModalEdit, StyleContainerModal, StyleInput, StyleButtonAdd, ButtonCloseEdit, StyleTitle } from './ModalStyles'
import { MdClear } from 'react-icons/md'
import { closeModalUpdate, selectUser, updateUser } from '../Actions/Actions'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

class ModalUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.testStore.selectUser._id,
      firstName: props.testStore.selectUser.firstName,
      lastName: props.testStore.selectUser.lastName,
      salary: props.testStore.selectUser.salary,
      position: props.testStore.selectUser.position,
      gender: props.testStore.selectUser.gender
    }
    // this.handleName = this.handleName.bind(this)
    // this.handleLastName = this.handleLastName.bind(this)
    // this.handleSalary = this.handleSalary.bind(this)
    // this.handlePosition = this.handlePosition.bind(this)
    // this.handleGender = this.handleGender.bind(this)
    this.handleCloseModalUpdate = this.handleCloseModalUpdate.bind(this)
    this.handleUpdateUser = this.handleUpdateUser.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput (event) {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
  }

  handleCloseModalUpdate () {
    this.props.closeModalUpdate()
  }

  handleUpdateUser () {
    this.props.updateUser(this.state)
  }

  render () {
    return (
      <div>
        <StyleContainerModal>
          <Fade>
            <WrapperModalEdit>
              <StyleTitle>Update user</StyleTitle>
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
              <StyleButtonAdd onClick={this.handleUpdateUser}>Update</StyleButtonAdd>
              <ButtonCloseEdit onClick={this.handleCloseModalUpdate}><MdClear /></ButtonCloseEdit>
            </WrapperModalEdit>
          </Fade>
        </StyleContainerModal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeModalUpdate: close => dispatch(closeModalUpdate(close)),
  selectUser: select => dispatch(selectUser(select)),
  updateUser: update => dispatch(updateUser(update))
})
const mapStateToProps = state => ({
  testStore: state
})
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdate)
