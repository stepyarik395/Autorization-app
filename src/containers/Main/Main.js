import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { showUsers, deleteUser, showModal, updateUser, } from '../../components/Actions/Actions'
import { MdDelete } from 'react-icons/md'
import Modal from '../../components/Modals/Modal'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search'
import MainPreloader from '../../components/Preloader/Preloader'
import styled from 'styled-components'

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

export const StyleButton = styled.button`
color:#fff;
border:none;
background: rgba(248,80,50,1);/* Old Browsers */
background: linear-gradient(135deg, rgba(248,80,50,1) 0%, rgba(245,12,229,1) 19%, rgba(240,47,23,1) 76%, rgba(231,56,39,1) 100%);/* W3C */
min-width:200px;
outline: none;
cursor: pointer;
margin:0.5rem;
height: 50px;
text-transform: uppercase;
`

export const StyleMain = styled.main`
margin-top:2rem;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const StyleWrapperDiv = styled.div`
display:flex;
border-radius:4px;
border: 1px solid #9932CC;
padding:2rem;
`
export const StyleTitle = styled.h2`
font-size:1rem;
`
export const StyleMainContainer = styled.div`
margin:0.5rem;
`
export const StyleTh = styled.th`
`
export const MainButtons = styled.button`
outline:none;
box-shadow: 0 0 5px rgba(0,0,0,0.3);
margin:0.2rem;
cursor:pointer;
width:40px;
height:40px;
border-radius:50%;
background-color:transparent;
border:2px solid #9932CC;
transition:0.3s all ease-out;
:hover{
  background:#9932CC;
  color:#fff;
}
:active{
  background-color:rgba(248,80,50,1);
}
`
export const StyleButtonEdit = styled.button`
box-shadow: 0 0 10px rgba(0,0,0,0.9);
margin-top:3rem;
outline:none;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
font-size:2rem;
background-color:#9932CC;
color:#fff;
min-width:70px;
min-height:70px;
border-radius:50%;
border:none;
`
export const StyleWrapperMain = styled.div`
right:30px;
position: absolute;
`
