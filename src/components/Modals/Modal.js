import React, { Component } from 'react'
import { WrapperModalEdit, StyleContainerModal, StyleInput, StyleButtonAdd, ButtonCloseEdit } from './ModalStyles'
import { MdClear } from 'react-icons/md'
import { addUser, updateUser } from '../Actions/Actions'
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'

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
