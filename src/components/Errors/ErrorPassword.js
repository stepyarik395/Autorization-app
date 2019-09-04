import React, { Component } from 'react';



class ErrorPassword extends Component{
    render(){
			return(
					<div>
						<div>
							Вы ввели пароль меньше 6 символов
						</div>
					</div>
			);

		}
}

export default ErrorPassword