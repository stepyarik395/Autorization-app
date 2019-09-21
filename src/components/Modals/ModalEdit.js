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
  
  componentDidMount(){

  }
  handleAddUser = () => {
    this.props.addUser(this.state)
    this.props.closeModalEdit();
  }
  handlerUpdate = () =>{
  }

  handleChangeInput = (event) => {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
  }

  render () {
    console.log(this.props.selectUser)
    return (
      <StyleContainerModal>
        <Fade>
          <WrapperModalEdit>
            <StyleTitle>Add user</StyleTitle>
            <StyleInput
              name='firstName'
              value={this.props.selectUser.firstName}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='First Name'
            />
            <StyleInput
              name='lastName'
              value={this.props.selectUser.lastName}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Last Name'
            />

            <StyleInput
              name='salary'
              value={this.props.selectUser.salary}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Salary'
            />
            <StyleInput
              name='position'
              value={this.props.selectUser.position}
              onChange={this.handleChangeInput}
              placeholder='Position'
              type='text'
            />

            <StyleInput
              name='gender'
              value={this.props.selectUser.gender}
              onChange={this.handleChangeInput}
              type='text'
              placeholder='Gender'
            />
            {this.props.todo ? <button>1</button> : <button>2</button>}
            <ButtonCloseEdit onClick={this.props.closeModalEdit}><MdClear /></ButtonCloseEdit>
          </WrapperModalEdit>
        </Fade>
      </StyleContainerModal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  closeModalEdit: () => (
  dispatch({ type: 'CLOSE_MODAL_EDIT', payload: false }),
  dispatch({ type: 'CLEAR_USER', payload: {} })),
  addUser: editUser => dispatch(addUser(editUser))

})
const mapStateToProps = store => ({
  selectUser: store.selectUser,
  todo: store.toglebutton
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit)
