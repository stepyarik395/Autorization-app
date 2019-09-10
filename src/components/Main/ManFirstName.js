import React, { Component } from 'react';
import { connect } from "react-redux";
import {showUsers} from '../Actions/Actions';
import {StyleList,StyleLi} from "./StyleMain";
class MainFirstName extends Component{
    render(){
        return(
            <div>
							<StyleList>
							{this.props.testStore.arrUsers.map((item,i)=>{
								return <StyleLi key={i}>{item.firstName}</StyleLi>
							})}
							</StyleList>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(MainFirstName)