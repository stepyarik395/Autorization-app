import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {StyleButton,StyleMain,StyleWrapperDiv,StyleEditButton} from "./StyleMain";
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';
import {deleteUsers} from '../Actions/Actions';

import Item from '../Item/Item';


class Main extends Component{
	constructor(props){
		super(props);
		this.deleteUser = this.deleteUser.bind(this);
	}

	componentDidMount() {
	this.props.showUsers();
	}

	deleteUser(){
		this.props.deleteUsers();
	}
	clearLocalStorage(){
		localStorage.clear()
	}

	render(){
		console.log(this.props.testStore.arrUsers);
  	return(
    	<div>
      	<div className="wpapper__main__button">
          	<Link to="/"><StyleButton onClick = {this.clearLocalStorage}>Out</StyleButton></Link>
          </div> 
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
												<th><StyleEditButton></StyleEditButton><StyleEditButton></StyleEditButton></th>
												</tr>
														</tbody>
										})}
	
								</table>
								{/* <Item /> */}
							</StyleWrapperDiv>
						</StyleMain>
      		</div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
	showUsers: userInfo => dispatch(showUsers(userInfo)),
	deleteUsers :userInfo => dispatch(deleteUsers(userInfo))
})
const mapStateToProps = state =>({
  testStore: state
})



export default connect(mapStateToProps,mapDispatchToProps)(Main)