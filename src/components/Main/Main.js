import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {StyleButton,StyleMain,StyleWrapperDiv,StyleEditButton,StyleButtonEdit} from "./StyleMain";
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';
import {showModalEdit} from '../Actions/Actions';
import { MdCreate} from 'react-icons/md';
import { MdDelete,MdAdd} from 'react-icons/md';
import ModalEdit from "../Modals/ModalEdit";



class Main extends Component{
	constructor(props){
		super(props);
		this.openModalEdit = this.openModalEdit.bind(this);
	}

	componentDidMount() {
	this.props.showUsers();
	}
	clearLocalStorage(){
		localStorage.clear()
	}
	openModalEdit(){
		this.props.showModalEdit()
	}

	render(){
		console.log(this.props.testStore.arrUsers);
  	return(
    	<div>
				
      	<div className="wpapper__main__button">
          	<Link to="/"><StyleButton onClick = {this.clearLocalStorage}>Out</StyleButton></Link>
          </div>

					{this.props.testStore.showModalEdit ? <ModalEdit /> : null}
					
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
												<th>{item.gender}</th>
												<th>{item.position}</th>
												<th><StyleEditButton><MdCreate /></StyleEditButton>
												<StyleEditButton><MdDelete /></StyleEditButton></th>
												</tr>
														</tbody>
										})}
								</table>
							</StyleWrapperDiv>
						</StyleMain>
						<StyleButtonEdit onClick={this.openModalEdit}>
							<MdAdd />
							</StyleButtonEdit>
						
      		</div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
	showUsers: userInfo => dispatch(showUsers(userInfo)),
	showModalEdit :modal => dispatch(showModalEdit(modal))
})
const mapStateToProps = state =>({
  testStore: state
})



export default connect(mapStateToProps,mapDispatchToProps)(Main)