import requestHendler from '../RequestHendler/RequsetHendler';


export const userPost = users => {
console.log(users);
    return dispatch => {
			const options = {
				url:'/register',
				method:'post',
				data:users,
			}
			requestHendler(options)
			.then(res =>{
				console.log(res.status);
			})
		}
  }
  // const loginUser = userObj => ({
  //     type: 'LOGIN_USER',
  //     payload: userObj
	// })

	export const userSign = user =>{
		return dispatch => {
			const options = {
				url:'/login',
				method:'post',
				data:user
			}
			requestHendler(options)
			.then(res =>{
				console.log(res);
			})
		}

	}



