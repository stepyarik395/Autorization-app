import React, { Component } from 'react';
import {StyleMessegeError} from '../Errors/StyleErrorPassword';


class ErrorPassword extends Component{
	render(){
		return(
			<div>
				<div>
					<strong>
						<StyleMessegeError>
							Вы ввели пароль меньше 6 символов
						</StyleMessegeError>
					</strong>
				</div>
		</div>
		);
	}
}

export default ErrorPassword