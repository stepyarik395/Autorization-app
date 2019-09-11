import React, { Component } from 'react';
import {WrapperModalEdit,StyleContainerModal,StyleInput,StyleButtonAdd,ButtonCloseEdit,StyleTitle} from "./ModalStyles";
import {MdClear} from 'react-icons/md';
import {closeModalUpdate} from '../Actions/Actions';
import {connect} from "react-redux";
import {addUser} from '../Actions/Actions';
import {selectUser} from '../Actions/Actions';
import {updateUser} from '../Actions/Actions';
import Fade from 'react-reveal/Fade';


class ModalUpdate extends Component{
    constructor(props){
        super(props)
        this.state = {
					id:props.testStore.selectUser._id,
          firstName:props.testStore.selectUser.firstName,
          lastName:props.testStore.selectUser.lastName,
          salary:props.testStore.selectUser.salary,
          position:props.testStore.selectUser.position,
					gender:props.testStore.selectUser.gender,
				}
				this.handleName=this.handleName.bind(this);
				this.handleLastName=this.handleLastName.bind(this);
				this.handleSalary=this.handleSalary.bind(this);
				this.handlePosition=this.handlePosition.bind(this);
				this.handleGender=this.handleGender.bind(this);
				this.closeModalUpdate=this.closeModalUpdate.bind(this);
				this.updateUser=this.updateUser.bind(this);

		}
		componentDidMount(){

		}
		handleName(e){
			this.setState({ firstName: e.target.value });
		}
		handleLastName(e){
			this.setState({ lastName: e.target.value });
		}
		handleSalary(e){
			this.setState({ salary: e.target.value });
		}
		handlePosition(e){
			this.setState({ position: e.target.value });
		}
		handleGender(e){
			this.setState({ gender: e.target.value });
		}
		closeModalUpdate(){
			this.props.closeModalUpdate();
		}
		updateUser(){
			this.props.updateUser(this.state);
		}
    render(){
			console.log(this.props.testStore.selectUser.firstName)
        return(
					<div>
					
					<StyleContainerModal >
					<Fade>
            <WrapperModalEdit>
							<StyleTitle>Update user</StyleTitle>
								<StyleInput value={this.state.firstName}
								onChange={this.handleName}
								type="text"
								placeholder="First Name"
								>
								</StyleInput>
								<StyleInput value={this.state.lastName}
								onChange={this.handleLastName}
								type="text"
								placeholder="Last Name"
								>
								</StyleInput>
								<StyleInput value={this.state.salary}
								onChange={this.handleSalary}
								type="text"
								placeholder = "Salary"
								></StyleInput>
								<StyleInput value={this.state.position}
								onChange={this.handlePosition}
								placeholder="Position"
								type="text"
								></StyleInput>
								<StyleInput value={this.state.gender}
								onChange={this.handleGender}
								type="text"
								placeholder="Gender"
								></StyleInput>
                <StyleButtonAdd onClick={this.updateUser}>Update</StyleButtonAdd>
                <ButtonCloseEdit onClick={this.closeModalUpdate}><MdClear /></ButtonCloseEdit>
            </WrapperModalEdit>
						</Fade>
					</StyleContainerModal>
				
				</div>

        );
    }

}

const mapDispatchToProps = dispatch => ({
	closeModalUpdate:colol => dispatch(closeModalUpdate(colol)),
	selectUser: select => dispatch(selectUser(select)),
	updateUser: update => dispatch(updateUser(update)),
	

})
const mapStateToProps = state =>({
  testStore: state
})
export default connect(mapStateToProps,mapDispatchToProps)(ModalUpdate)