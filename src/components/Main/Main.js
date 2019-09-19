import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { StyleButton, StyleMain, StyleWrapperDiv, StyleEditButton, StyleButtonEdit, StyleWrapperMain } from './StyleMain'
import { connect } from 'react-redux'
import { showUsers, showModalEdit, deleteUser, showModalUpdate } from '../Actions/Actions'
import { MdDelete, MdAdd, MdCreate } from 'react-icons/md'
import ModalEdit from '../Modals/ModalEdit'
import ModalUpdate from '../Modals/ModalUpdate'
import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search'

class Main extends Component {
  constructor (props) {
    super(props)
    this.handleOpenModalEdit = this.handleOpenModalEdit.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount () {
    this.pageLocation()
  }

  handleClearLocalStorage () {
    window.localStorage.clear('token')
  }

  handleOpenModalEdit () {
    this.props.showModalEdit()
  }

  deleteUser (id) {
    this.props.deleteUser(id)
  }

  updateUser (item) {
    this.props.showModalUpdate(item)
  }
  pageLocation(){
    const currentId = parseInt(this.props.match.params.id, 10)
    console.log(this.props)
    this.props.history.push(this.props.location.pathname)
    this.props.showUsers(currentId)
  }

  render () {
    console.log(this.props.testStore)
    return (
      <div>
        <StyleWrapperMain>
          <Link to='/'><StyleButton onClick={this.handleClearLocalStorage}>Out</StyleButton></Link>
        </StyleWrapperMain>
        {this.props.testStore.showModalEdit ? <ModalEdit /> : null}
        {this.props.testStore.showModalUpdate ? <ModalUpdate /> : null}
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
                  <th>delete/edit</th>
                </tr>
              </thead>
              {this.props.testStore.arrUsers.map((item, i) => {
                return <tbody key={i}>
                  <tr>
                    <th>{item.firstName}</th>
                    <th>{item.lastName}</th>
                    <th>{item.salary}</th>
                    <th>{item.position}</th>
                    <th>{item.gender}</th>
                    <th><StyleEditButton onClick={() => this.updateUser(item)}><MdCreate /></StyleEditButton>
                      <StyleEditButton onClick={() => this.deleteUser(item._id)}><MdDelete /></StyleEditButton>
                    </th>
                  </tr></tbody>
              })}
            </table>
          </StyleWrapperDiv>
          <Pagination />
          <StyleButtonEdit onClick={this.handleOpenModalEdit}>
            <MdAdd />
          </StyleButtonEdit>
        </StyleMain>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  showUsers: showU => dispatch(showUsers(showU)),
  showModalEdit: modalEdit => dispatch(showModalEdit(modalEdit)),
  deleteUser: delUser => dispatch(deleteUser(delUser)),
  showModalUpdate: modallUp => dispatch(showModalUpdate(modallUp))
})
const mapStateToProps = state => ({
  testStore: state
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
