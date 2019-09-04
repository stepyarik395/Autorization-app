import React, { Component } from 'react';
import {DivWrapperModal,StyleSpanText} from "../Modals/ModalStyles";








class ModalErrorPassword extends Component{
    render(){
        return(
            <div>
							<DivWrapperModal>
							<StyleSpanText>
								Вы ввели не правильное имя или пароль
								</StyleSpanText>
							</DivWrapperModal>
                
            </div>

        );
    }
}

export default ModalErrorPassword;






    