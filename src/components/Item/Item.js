import React, { Component } from 'react';
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';





class Item extends Component{
    render(){
        return(
            <div>		
            </div>

        );
    }
}
const mapDispatchToProps = dispatch => ({
	showUsers: userInfo => dispatch(showUsers(userInfo)),
})
const mapStateToProps = state =>({
  testStore: state
})



export default connect(mapStateToProps,mapDispatchToProps)(Item)