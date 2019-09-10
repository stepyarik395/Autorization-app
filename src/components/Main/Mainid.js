import React, { Component } from 'react';
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';
import {StyleLi} from "./StyleMain";






class MainId extends Component{
    render(){
        return(
            <div>
							<ol>
							{this.props.testStore.arrUsers.map((item,i)=>{
								return <StyleLi key={i}>{item._id}</StyleLi>
							})}
							</ol>
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

export default connect(mapStateToProps,mapDispatchToProps)(MainId)







