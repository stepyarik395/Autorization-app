import React, { Component } from 'react';

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }



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