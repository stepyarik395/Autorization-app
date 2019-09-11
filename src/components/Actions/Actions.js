import requestHendler from '../RequestHendler/RequsetHendler';
import  { history } from '../../history';


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
				history.push('/main');
				}
			})
			.catch(error => {
				let errObj = JSON.parse(JSON.stringify(error));
				console.log(errObj);
				dispatch({type:'SHOW_MODAL',payload:true});
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
				localStorage.setItem("token", res.data.token);
				console.log(res.status);
				if(res.status === 200){
					window.location = "/main"
				}
				
			})
			.catch(error => {
				let errObj = JSON.parse(JSON.stringify(error));
				dispatch({type:'SHOW_MODAL',payload:true});
				dispatch({type:"ERROR_TEXT_SHOW",payload:error.response.data.message})
				console.log(error.response)
			});
		}
	}
	
	export const showUsers = () =>{

		return dispatch =>{

			const options = {
				url:'/',
				type:'post',
			}
			requestHendler(options)
			.then(res =>{
				console.log(res);
				dispatch({type:'SHOW_USERS',payload:res.data.workers});
			})
		}
	}

export const hideModal = () =>{
	return dispatch =>{
		dispatch({type:'CLOSE_MODAL',payload:false});
	}

}
export const deleteUser = () =>{
	return dispath=>{
		const options = {
			url:'/',
			type:'delete',
		}
		requestHendler(options)
		.then(res =>{
			console.log(res)
		})
	}
}

export const showModalEdit = () =>{
	return dispatch =>{
		dispatch({type:'OPEN_MODAL__EDIT',payload:true});
	}
}
export const closeModalEdit = () =>{
	return dispatch =>{
		dispatch({type:'CLOSE_MODAL__EDIT',payload:false});
	}
}


	


	