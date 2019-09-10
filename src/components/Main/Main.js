import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {StyleButton,StyleMain} from "./StyleMain";
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';
import MainContactInformation from './MainContactInformation'
import MainGender from './MainGender'
import Mainid  from './Mainid'
import MainLastName from './MainLastName'
import MainFirstName from './ManFirstName'


class Main extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
	this.props.showUsers();
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
							<table>
								<tbody>
								<tr>
									<th>Id</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Gender</th>
									<th>Contact Infomation</th>
								</tr>
								<tr>
									<th>
									<Mainid />
									</th>
									<th>
									<MainFirstName />
									</th>
									<th>
									<MainLastName />
									</th>
									<th>
									<MainGender />
									</th>
									<th>
									<MainContactInformation />
									</th>
								</tr>
								</tbody>
							</table>
								
							
								
								
								
						</StyleMain>
      		</div>

        );
    }
}
const mapDispatchToProps = dispatch => ({
  showUsers: userInfo => dispatch(showUsers(userInfo))
})
const mapStateToProps = state =>({
  testStore: state
})



export default connect(mapStateToProps,mapDispatchToProps)(Main)