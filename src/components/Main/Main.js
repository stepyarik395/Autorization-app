import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {StyleButton,StyleMain} from "./StyleMain";
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions'; 

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
		

  	return(
    	<div>
      	<div className="wpapper__main__button">
          	<Link to="/"><StyleButton onClick = {this.clearLocalStorage}>Out</StyleButton></Link>
          </div> 
						<StyleMain>
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