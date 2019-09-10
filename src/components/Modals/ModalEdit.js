import React, { Component } from 'react';
import {WrapperModalEdit,StyleContainerModal,StyleInput,StyleButtonAdd,ButtonCloseEdit} from "./ModalStyles";
import {MdClear} from 'react-icons/md';


class ModalEdit extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:"",
            lasttName:"",
            salary:"",
            position:"",
            gender:""
				}
				this.handleName = this.handleName.bind(this);
				this.handleLastName = this.handleLastName.bind(this);
				this.handleSalary = this.handleSalary.bind(this);
				this.handlePosition = this.handlePosition.bind(this);
				this.handleGender = this.handleGender.bind(this);

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
		
    render(){
        return(
					<StyleContainerModal>
            <WrapperModalEdit>
								<StyleInput value={this.state.firstName}
								onChange={this.handleName}
								type="text"
								placeholder = "First Name"
								>
								</StyleInput>
								<StyleInput value={this.state.lastName}
								onChange={this.handleLastName}
								type="text"
								placeholder = "Last Name"
								></StyleInput>
								<StyleInput value={this.state.salary}
								onChange={this.handleSalary}
								type="text"
								placeholder = "Salary"
								></StyleInput>
								<StyleInput value={this.state.position}
								onChange={this.handlePosition}
								placeholder = "Position"
								type="text"
								></StyleInput>
								<StyleInput value={this.state.gender}
								onChange={this.handleGender}
								type="text"
								placeholder = "Gender"
								></StyleInput>
                <StyleButtonAdd>Add</StyleButtonAdd>
                <ButtonCloseEdit><MdClear /></ButtonCloseEdit>
            </WrapperModalEdit>
					</StyleContainerModal>

        );
    }

}
export default ModalEdit;