import requestHendler from '../RequestHendler/RequsetHendler';
import { Route, Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'


export const userPost = users => {
console.log(users);
    return dispatch => {
			const options = {
				url:'/register',
				type:'post',
				data: JSON.stringify(users),
			}
			requestHendler(options)
			.then(res =>{
				localStorage.setItem("token", res.data.token);
				console.log(res.status);
				if(res.status === 200){
					window.location = "/main"
				}
			})
		}
  }
  // const loginUser = userObj => ({
  //     type: 'LOGIN_USER',
  //     payload: userObj
	// })

	export const userSign = users =>{
		return dispatch => {
			const options = {
				url:'/login',
				type:'post',
				data: JSON.stringify(users)
			}
			requestHendler(options)
			.then(res =>{
				console.log(res);
			})
			.catch(error => {
				let errObj = JSON.parse(JSON.stringify(error));
				alert("Пользователь не существует авторизируйтесь")
				window.location = "/register"
			});
		}
	}




	