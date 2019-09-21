import requestHendler from '../RequestHendler/RequsetHendler'
import { history } from '../../history'

const showErrorModal = (error) => {
  return dispatch => {
    dispatch({ type: 'SHOW_MODAL', payload: true })
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

export const showModalUpdate = (item) => {
  return dispatch => {
    dispatch({ type: 'SELECT_USER', payload: item })
    dispatch({ type: 'SHOW_MODAL_UPDATE', payload: true })
  }
}

export const userPost = users => {
  return dispatch => {
    const options = {
      url: '/register',
      type: 'post',
      data: users
    }
    requestHendler(options)
      .then(res => {
        dispatch(successfulRequest(res))
      })
      .catch(error => {
        dispatch(showErrorModal(error))
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
    requestHendler(options)
      .then(res => {
        dispatch(successfulRequest(res))
      })
      .catch(error => {
        dispatch(showErrorModal(error))
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
    requestHendler(options)
      .then(res => {
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
    requestHendler(options)
      .then(res => {
        dispatch(showUsers())
      })
  }
}

export const updateUser = (user) => {
  return dispatch => {
    const options = {
      url: `/update/${user.id}`,
      type: 'put',
      data: user
    }
    requestHendler(options)
      .then(res => {
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
    requestHendler(options)
      .then(res => {
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
    requestHendler(options)
      .then(res => {
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
    requestHendler(options)
      .then(res => {
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
    requestHendler(options)
      .then(res => {
        dispatch(handleShow(res))
      })
  }
}

export const showModalEdit = (item)=>{
  return dispatch => {
    dispatch({ type: 'SELECT_USER', payload: item })
    dispatch({type: 'OPEN_MODAL_EDIT', payload: true})
  }
}