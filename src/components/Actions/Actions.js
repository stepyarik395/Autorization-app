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
				dispatch(modalwrap);
			});
		}
	}

const modalwrap = {
	type:'SHOW_MODAL',
	payload:true
}
	



	