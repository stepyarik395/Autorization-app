import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { StyleButton, StyleMain, StyleWrapperDiv, StyleEditButton, StyleButtonEdit, StyleWrapperMain } from './StyleMain'
import { connect } from 'react-redux'
import { showUsers, deleteUser, showModalEdit,updateUser } from '../../components/Actions/Actions'
import { MdDelete, MdAdd, MdCreate } from 'react-icons/md'
import ModalEdit from '../../components/Modals/ModalEdit'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'
// import preloader from '../../assets/img/Ball-1s-200px.svg'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle:true
    }
   
  }

  componentDidMount () {
    this.pageLocation()
  }

  handleClearLocalStorage = () => {
    window.localStorage.clear('token')
  }

  handleOpenModalEdit = (item) => {
    const buttonTarget = event.target
    if(buttonTarget.classList.contains('update')){
      this.setState({
        toggle:false
      })
    }
    else{
      this.setState({
        toggle:true
      })
    }
    this.props.showModalEdit(item)
  }

  pageLocation = () => {
    const currentId = parseInt(this.props.match.params.id, 10)
    console.log(this.props)
    this.props.history.push(this.props.location.pathname)
    this.props.showUsers(currentId)
  }

  render () {
    const { modalEdit, arrUsers }=this.props
    return (
      <div>
        <StyleWrapperMain>
          <Link to='/'><StyleButton onClick={this.handleClearLocalStorage}>Out</StyleButton></Link>
        </StyleWrapperMain>
        {modalEdit ? <ModalEdit updateuser={this.handleUpdateUser} adduser={this.handleAddUser} toggle={this.state.toggle} /> : null}
        <Search />
        <StyleMain>
          <StyleWrapperDiv>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Salary</th>
                  <th>Gender</th>
                  <th>Position</th>
                  <th>edit/delete</th>
                </tr>
              </thead>
              {arrUsers.map((item, i) => {
                return <tbody key={i}>
                  <tr>
                    <th>{item.firstName}</th>
                    <th>{item.lastName}</th>
                    <th>{item.salary}</th>
                    <th>{item.position}</th>
                    <th>{item.gender}</th>
                    <th><StyleEditButton className = 'update' onClick={()=>this.handleOpenModalEdit(item, event)}>edit</StyleEditButton>
                      <StyleEditButton onClick={() => this.props.deleteUser(item._id)}><MdDelete /></StyleEditButton>
                    </th>
                  </tr></tbody>
              })}
            </table>
          </StyleWrapperDiv>
          <Pagination />
          <StyleButtonEdit className = 'add' onClick={()=>this.handleOpenModalEdit(event)}>
            +
          </StyleButtonEdit>
        </StyleMain>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  showUsers: showU => dispatch(showUsers(showU)),
  showModalEdit: showedit => dispatch(showModalEdit(showedit)),
  deleteUser: delUser => dispatch(deleteUser(delUser)),
  updateUser: updateuser => dispatch(updateUser(updateuser))
})
const mapStateToProps = store => ({
  modalEdit: store.showModalEdit,
  modalUpdate: store.showModalUpdate,
  arrUsers: store.arrUsers,
  selectUser: store.selectUser
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
