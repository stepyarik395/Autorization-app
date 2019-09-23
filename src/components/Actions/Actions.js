import requestHendler from '../RequestHendler/RequsetHendler'
import { history } from '../../history'

export const showPreloader = ()=>{
  return dispatch =>{
    dispatch({ type: 'SHOW_PRELOADER', payload: true });
  }
}
export const closepreloader = () =>{
  return dispatch =>{
    dispatch({ type: 'CLOSE_PRELOADER', payload: false });
  }
}

const showErrorModal = (error) => {
  return dispatch => {
    dispatch({ type: 'SHOW_MODAL_ERROR', payload: true })
    dispatch({ type: 'ERROR_TEXT_SHOW', payload: error.response.data.message })
  }
}

const handleShow = (res) => {
  const { workers, pages, page } = res.data
  return dispatch => {
    dispatch({ type: 'SHOW_USERS', payload: workers })
    dispatch({ type: 'ADD_PAGES', payload: pages })
    dispatch({ type: 'ADD_PAGE', payload: page })
  }
}

const successfulRequest = (res) => {
  return dispatch => {
    window.localStorage.setItem('token', res.data.token)
    if (res.status === 200) {
      history.push('/main/1')
    }
  }
}

export const userSignUp = users => {
  return dispatch => {
    const options = {
      url: '/register',
      type: 'post',
      data: users
    }
    dispatch(showPreloader())
    requestHendler(options)
      .then(res => {
        setTimeout(() => { dispatch(closepreloader()) }, 500)
        dispatch(successfulRequest(res))
      })
      .catch(error => {
        if (error.data === undefined){
          alert("ooops network connection failed")
        }
        else{
          dispatch(showErrorModal());
        }
      })
  }
}

export const userSign = users => {
  return dispatch => {
    const options = {
      url: '/login',
      type: 'post',
      data: users
    }
    dispatch(showPreloader())
    requestHendler(options)
 
      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch(successfulRequest(res))
      })
      .catch(error => {
        if (error.data === undefined){
          alert("ooops network connection failed")
        }
        else{
          dispatch(showErrorModal());
        }
        
      })
  }
}

export const showUsers = (i) => {
  return dispatch => {
    const options = {
      url: '/',
      type: 'post',
      data: {
        page: i
      }
    }
    requestHendler(options)
      .then(res => {
        dispatch(handleShow(res))
      })
  }
}

export const addUser = (user) => {
  return dispatch => {
    const options = {
      url: '/create',
      type: 'post',
      data: user
    }
    dispatch(showPreloader())
    requestHendler(options)
      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch(showUsers())
      })
  }
}

export const deleteUser = (id) => {
  return dispatch => {
    const options = {
      url: `/delete/${id}`,
      type: 'delete'
    }
    dispatch(showPreloader())
    requestHendler(options)
      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch(showUsers())
      })
  }
}

export const updateUser = (user) => {
  console.log(user.id)
  return dispatch => {
    const options = {
      url: `/update/${user.id}`,
      type: 'put',
      data: user
    }
    dispatch(showPreloader())
    requestHendler(options)
      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch(showUsers())
      })
  }
}

export const selectPage = (i) => {
  return dispatch => {
    const options = {
      url: '/',
      type: 'post',
      data: {
        page: i
      }
    }
    dispatch(showPreloader())
    requestHendler(options)
      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch({ type: 'SELECT_PAGE', payload: i })
        dispatch({ type: 'SHOW_USERS', payload: res.data.workers })
        history.push(`/main/${i}`)
      })
  }
}

export const nextPage = (current) => {
  return dispatch => {
    const options = {
      url: '/',
      type: 'post',
      data: {
        page: current
      }
    }
    dispatch(showPreloader())
    requestHendler(options)

      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch(selectPage(current+1))
      })
  }
}

export const prevPage = (current) => {
  return dispatch => {
    const options = {
      url: '/',
      type: 'post',
      data: {
        page: current
      }
    }
    dispatch(showPreloader())
    requestHendler(options)
      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch(selectPage(current-1))
      })
  }
}
export const searchItems = (searchText) => {
  return dispatch => {
    const options = {
      url: '/',
      type: 'post',
      data: {
        q: searchText
      }
    }
    dispatch(showPreloader())
    requestHendler(options)
      .then(res => {
        setTimeout(()=>{dispatch(closepreloader())},500)
        dispatch(handleShow(res))
      })
  }
}

export const showModal = (item)=>{
  return dispatch => {
    dispatch({ type: 'SELECT_USER', payload: item })
    dispatch({type: 'OPEN_MODAL_MAIN', payload: true})
  }
}
