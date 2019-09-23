import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { StyleButton, StyleMain, StyleWrapperDiv, MainButtons, StyleButtonEdit, StyleWrapperMain } from './StyleMain'
import { connect } from 'react-redux'
import { showUsers, deleteUser, showModal, updateUser, } from '../../components/Actions/Actions'
import { MdDelete } from 'react-icons/md'
import Modal from '../../components/Modals/Modal'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'
import MainPreloader from '../../components/Preloader/Preloader'


class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      changeButton:true
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
        changeButton:false
      })
    }
    else{
      this.setState({
        changeButton:true
      })
    }
    this.props.showModal(item)
  }

  pageLocation = () => {
    const currentId = parseInt(this.props.match.params.id, 10)
    this.props.history.push(this.props.location.pathname)
    this.props.showUsers(currentId)
  }

  render () {
    const { modal, arrUsers, preloader }=this.props
  
    return (
      <div>
        <div>
        {preloader ? <MainPreloader /> : <div>
        <StyleWrapperMain>
          <Link to='/'><StyleButton onClick={this.handleClearLocalStorage}>Out</StyleButton></Link>
        </StyleWrapperMain>
          {modal ? <Modal updateuser={this.handleUpdateUser} 
            adduser={this.handleAddUser}
            change={this.state.changeButton} /> : null}
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
                    <th><MainButtons className='update' onClick={()=>this.handleOpenModalEdit(item, event)}>edit</MainButtons>
                      <MainButtons onClick={() => this.props.deleteUser(item._id)}><MdDelete /></MainButtons>
                    </th>
                  </tr></tbody>
              })}
            </table>
          </StyleWrapperDiv>
          <Pagination />
          <StyleButtonEdit className='add' onClick={()=>this.handleOpenModalEdit(event)}>
            +
          </StyleButtonEdit>
        </StyleMain>

        </div>}
       
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  showUsers: showU => dispatch(showUsers(showU)),
  showModal: showedit => dispatch(showModal(showedit)),
  deleteUser: delUser => dispatch(deleteUser(delUser)),
  updateUser: updateuser => dispatch(updateUser(updateuser)),
})
const mapStateToProps = store => ({
  modal: store.showModal,
  arrUsers: store.arrUsers,
  selectUser: store.selectUser,
  preloader:store.isFetch
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
