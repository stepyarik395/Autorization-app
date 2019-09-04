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
				console.log(res.status);
				localStorage.setItem("token", res.data.token);
			})
		}
  }
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
	})
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
		}
	}



