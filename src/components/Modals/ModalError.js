import React, { Component } from 'react';
import { DivWrapperModal,StyleSpanText,StyleButtonClose,DivFlexContainer } from "./ModalStyles";
import { connect } from "react-redux";
import { hideModal } from '../Actions/Actions';

class ModalErrorLogin extends Component{

	componentDidMount(){
		this.setState(()=>{
			this.props.inputValue.name = ""
			this.props.inputValue.email = ""
			this.props.inputValue.password = ""
		})
	}
	render(){
		const{ErrorText}=this.props
			return(
				<div>
					<DivWrapperModal>
						<DivFlexContainer>
							<StyleSpanText>
								 {ErrorText}
								</StyleSpanText>
						</DivFlexContainer>
					<StyleButtonClose onClick={this.props.hideModal}>close</StyleButtonClose>
				</DivWrapperModal>    
      </div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
  hideModal: modal => dispatch(hideModal(modal)),
})

const mapStateToProps = store =>{
	console.log(store)
	return{
		ErrorText:store.ErrorText
	}
  // testStore: state
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalErrorLogin)