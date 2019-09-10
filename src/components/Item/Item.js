import React, { Component } from 'react';
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';





class Item extends Component{
    render(){
        return(
            <div>
                {this.props.testStore.arrUsers.map((item,i)=>{
								return <div key={i}>
                                        <div>{item._id}</div>
                                        <div>{item.firstName}</div>
                                        <div>{item.lastName}</div>
                                        <div>{item.gender}</div>
                                        </div>
							})}
						
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