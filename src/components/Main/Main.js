import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {StyleButton,StyleMain} from "./StyleMain";
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions'; 

class Main extends Component{
	constructor(props){
		super(props);
	}



tmp(){
	let newarr = this.props.testStore.arrUsers;	
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
								<th>firstName</th>
								<th>lastName</th>
								<th>gender</th>
								<th>contactInformation</th>
								</tr>
								</tbody>
							</table>
							<ul>
							{
							this.tmp()
							}
							</ul>
							
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