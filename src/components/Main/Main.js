import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import {StyleButton,StyleMain,StyleWrapperDiv,StyleEditButton,StyleButtonEdit} from "./StyleMain";
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';
import {showModalEdit} from '../Actions/Actions';
import {deleteUser} from '../Actions/Actions';
import { MdCreate} from 'react-icons/md';
import { MdDelete,MdAdd} from 'react-icons/md';
import ModalEdit from "../Modals/ModalEdit";
import {showModalUpdate} from '../Actions/Actions';
import ModalUpdate from '../Modals/ModalUpdate';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';



class Main extends Component{
	constructor(props){
		super(props);
		this.openModalEdit = this.openModalEdit.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}
	componentDidMount(){
		let currentId = parseInt(this.props.match.params.id);
		this.props.history.push(this.props.location.pathname);
		this.props.showUsers(currentId);
	}

	clearLocalStorage(){
		localStorage.clear();
	}
	openModalEdit(){
		this.props.showModalEdit();
	}
	deleteUser(id){
		this.props.deleteUser(id);
	}
	updateUser(item){
	this.props.showModalUpdate(item);
	}


	render(){
  	return(
    	<div>
      	<div className="wpapper__main__button">
        	<Link to="/"><StyleButton onClick={this.clearLocalStorage}>Out</StyleButton></Link>
        </div>
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
										{this.props.testStore.arrUsers.map((item,i)=>{
											return <tbody key={i}>
												<tr>
												<th>{item.firstName}</th>
												<th>{item.lastName}</th>
												<th>{item.salary}</th>
												<th>{item.position}</th>
												<th>{item.gender}</th>
												<th><StyleEditButton onClick={() => this.updateUser(item)}><MdCreate /></StyleEditButton>
												<StyleEditButton onClick={() => this.deleteUser(item._id)}><MdDelete /></StyleEditButton></th>
												</tr>
											</tbody>
										})}
								</table>
							</StyleWrapperDiv>
							<Pagination/>
								<StyleButtonEdit onClick={this.openModalEdit}>
								<MdAdd />
								</StyleButtonEdit>
						</StyleMain>
      		</div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
	showUsers:showU => dispatch(showUsers(showU)),
	showModalEdit:modalEdit => dispatch(showModalEdit(modalEdit)),
	deleteUser:delUser => dispatch(deleteUser(delUser)),
	showModalUpdate:modallUp => dispatch(showModalUpdate(modallUp))
})
const mapStateToProps = state =>({
  testStore: state
})



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))