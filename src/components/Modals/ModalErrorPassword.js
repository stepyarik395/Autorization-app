import React, { Component } from 'react';
import {DivWrapperModal,StyleSpanText,StyleButtonClose,DivFlexContainer} from "../Modals/ModalStyles";
import { connect } from "react-redux";
import {hideModal} from '../Actions/Actions';

class ModalErrorPassword extends Component{
	render(){
		console.log(this.props.testStore);
  	return(
    	<div>
				<DivWrapperModal>
					<DivFlexContainer>
						<StyleSpanText>
							Вы ввели не правильный email или пароль
							Или такого пользователя не существует
					</StyleSpanText>
					</DivFlexContainer>
					<StyleButtonClose onClick = {()=> {alert("123123")}}>close</StyleButtonClose>
				</DivWrapperModal>    
      </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
  hideModal: click => dispatch(hideModal(click)),
})

const mapStateToProps = state =>({
  testStore: state
})


export default connect(mapStateToProps,mapDispatchToProps)(ModalErrorPassword)






    