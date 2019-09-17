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
				history.push('/main/1');
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
				// let errObj = JSON.parse(JSON.stringify(error));
				dispatch({type:'SHOW_MODAL',payload:true});
				dispatch({type:"ERROR_TEXT_SHOW",payload:error.response.data.message})
				console.log(error.response)
			});
		}
	}

	export const showUsers = (i) =>{
		return dispatch =>{
			const options = {
				url:'/',
				type:'post',
				data:{
					page:i
				}
			}
			requestHendler(options)
			.then(res =>{
				console.log(res);
				dispatch({type:'SHOW_USERS',payload:res.data.workers});
				dispatch({type:'ADD_PAGES',payload:res.data.pages});
				dispatch({type:'ADD_PAGE',payload:res.data.page});
			})
		}
	}

export const hideModal = () =>{
	return dispatch =>{
		dispatch({type:'CLOSE_MODAL',payload:false});
	}
}

export const showModalEdit = () =>{
	return dispatch =>{
		dispatch({type:'OPEN_MODAL_EDIT',payload:true});
	}
}

export const closeModalEdit = () =>{
	return dispatch =>{
		dispatch({type:'CLOSE_MODAL_EDIT',payload:false});
	}
}

export const addUser = (user) =>{
	return dispatch =>{
		console.log(user);
		const options = {
			url:'/create',
			type:'post',
			data: JSON.stringify(user),
			}
			requestHendler(options)
			.then(res =>{
				console.log(res)
				dispatch(showUsers());
				dispatch({type:'CLOSE_MODAL_EDIT',payload:false});
		})
	}
}

export const deleteUser = (id) =>{
	return dispatch =>{
		const options = {
			url:`/delete/${id}`,
			type:'delete',
		}
			console.log(options);
			requestHendler(options)
			.then(res =>{
				console.log(res)
				dispatch(showUsers());
		})
	}
}

export const showModalUpdate = (item) =>{
	console.log(item)
	return dispatch =>{
		dispatch({type:'SELECT_USER',payload:item});
		dispatch({type:'SHOW_MODAL_UPDATE',payload:true});
	}
}
export const closeModalUpdate = () =>{
	return dispatch =>{
		dispatch({type:'CLOSE_MODAL_UPDATE',payload:false});
	}
}

export const updateUser = (user) =>{
	console.log(user);
	return dispatch =>{
		const options = {
			url:`/update/${user.id}`,
			type:'put',
			data:user
		}
			console.log(options);
			requestHendler(options)
			.then(res =>{
				console.log(res)
				dispatch(showUsers());
				dispatch(closeModalUpdate());
		})
	}
}

export const selectPage = (i) =>{
	return dispatch =>{
		const options = {
			url:'/',
			type:'post',
			data:{
				page: i
			}
		}
			requestHendler(options)
			.then(res=>{
				console.log(res)
				console.log(res.data)
				dispatch({type:'SELECT_PAGE',payload:i});
				dispatch({type:'SHOW_USERS',payload:res.data.workers});
				history.push(`/main/${i}`);
		})
	}
}

export const nextPage = (current) =>{
	return dispatch =>{
		console.log(current);
		const options = {
			url:'/',
			type:'post',
			data:{
				page: current + 1
			}
		}
			requestHendler(options)
			.then(res=>{
				console.log(res)
				console.log(res.data)
				dispatch({type:'SELECT_PAGE',payload:current+1});
				dispatch({type:'SHOW_USERS',payload:res.data.workers});
			  history.push(`/main/${current + 1}`);
		})
	}

}


export const prevPage = (current) =>{
	return dispatch =>{
		console.log(current);
		const options = {
			url:'/',
			type:'post',
			data:{
				page: current -1
			}
		}
			requestHendler(options)
			.then(res=>{
				console.log(res)
				console.log(res.data)
				dispatch({type:'SELECT_PAGE',payload:current-1});
				dispatch({type:'SHOW_USERS',payload:res.data.workers});
				history.push(`/main/${current + -1}`);
		})
	}

}
export const searchItems = (searchText) =>{
	return dispatch =>{
		const options = {
			url:'/',
			type:'post',
			data:{
				q:searchText
			}
		}
			console.log(options)
			requestHendler(options)
			.then(res=>{
				console.log(res)
				console.log(res.data)
				dispatch({type:'SHOW_USERS',payload:res.data.workers});
				dispatch({type:'ADD_PAGES',payload:res.data.pages});
				dispatch({type:'ADD_PAGE',payload:res.data.page});
		})
	}
}







	