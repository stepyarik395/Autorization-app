import requestHendler from '../RequestHendler/RequsetHendler';



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
				console.log(res.status);
				
			})
			.catch(error => {
				let errObj = JSON.parse(JSON.stringify(error));
				console.log(errObj);
			});
		}
	}


	export const modalTogle = users => {

		return dispatch =>{
			// dispatch(modalToggle)


		}


	}



	