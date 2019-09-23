const initialState = {
  currentUserToken: {},
  showModalError: false,
  showModal: false,
  ErrorText: '',
  selectUser: {},
  arrUsers: [],
  pages: [],
  page: [],
  isFetch: false,
}

export function reducers (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, currentUserToken: action.payload }
    case 'SHOW_MODAL_ERROR':
      return { ...state, showModalError: action.payload }
    case 'ERROR_TEXT_SHOW':
      return { ...state, ErrorText: action.payload }
    case 'SHOW_USERS':
      return { ...state, arrUsers: action.payload }
    case 'OPEN_MODAL_MAIN':
      return { ...state, showModal: action.payload }
    case 'SELECT_USER':
      return { ...state, selectUser: action.payload }
    case 'ADD_PAGES':
      return { ...state, pages: action.payload }
    case 'ADD_PAGE':
      return { ...state, page: action.payload }
    case 'SHOW_PRELOADER':
      return { ...state, isFetch: action.payload }

    default:
      return state
  }
}
