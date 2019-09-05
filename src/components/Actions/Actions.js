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
					
				}
			})
			.catch(error => {
				let errObj = JSON.parse(JSON.stringify(error));
				console.log(errObj);
				dispatch(modalwrap);
				dispatch({type:"ERROR_TEXT_SHOW",payload:error.response.data.message})
				console.log(error.response)
			});
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
				if(res.status === 200){
					window.location = "/main"
				}
				
			})
			.catch(error => {
				let errObj = JSON.parse(JSON.stringify(error));
				dispatch(modalwrap);
				dispatch({type:"ERROR_TEXT_SHOW",payload:error.response.data.message})
				console.log(error.response)
			});
		}
	}

const modalwrap = {
	type:'SHOW_MODAL',
	payload:true
}

export const hideModal = toggle =>{
	return dispatch =>{
		dispatch(modalClose);
	}

}
	
const modalClose = {
	type:'CLOSE_MODAL',
	payload:false
}



	