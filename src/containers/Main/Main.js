import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { StyleButton, StyleMain, StyleWrapperDiv, StyleEditButton, StyleButtonEdit, StyleWrapperMain } from './StyleMain'
import { connect } from 'react-redux'
import { showUsers, deleteUser, showModalUpdate } from '../../components/Actions/Actions'
import { MdDelete, MdAdd, MdCreate } from 'react-icons/md'
import ModalEdit from '../../components/Modals/ModalEdit'
import ModalUpdate from '../../components/Modals/ModalUpdate'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'
// import preloader from '../../assets/img/Ball-1s-200px.svg'

class Main extends Component {
  constructor (props) {
    super(props)
    this.handleOpenModalEdit = this.handleOpenModalEdit.bind(this)
  }

  componentDidMount () {
    this.pageLocation()
  }

  handleClearLocalStorage = () => {
    window.localStorage.clear('token')
  }

  handleOpenModalEdit = () => {
    this.props.showModalEdit()
  }

  pageLocation = () => {
    const currentId = parseInt(this.props.match.params.id, 10)
    console.log(this.props)
    this.props.history.push(this.props.location.pathname)
    this.props.showUsers(currentId)
  }

  render () {
    return (
      <div>
        <StyleWrapperMain>
          <Link to='/'><StyleButton onClick={this.handleClearLocalStorage}>Out</StyleButton></Link>
        </StyleWrapperMain>
        {this.props.testStore.showModalEdit ? <ModalEdit /> : null}
        {this.props.testStore.showModalUpdate ? <ModalUpdate /> : null}
        <Search />
        <StyleMain>
          {/* {this.props.testStore.isFetch ? <img src={preloader} /> : null} */}
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
                    <th><StyleEditButton onClick={() => this.props.showModalUpdate(item)}><MdCreate /></StyleEditButton>
                      <StyleEditButton onClick={() => this.props.deleteUser(item._id)}><MdDelete /></StyleEditButton>
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
  showModalEdit: () => dispatch({ type: 'OPEN_MODAL_EDIT', payload: true }),
  deleteUser: delUser => dispatch(deleteUser(delUser)),
  showModalUpdate: modallUp => dispatch(showModalUpdate(modallUp))
})
const mapStateToProps = state => ({
  testStore: state
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
