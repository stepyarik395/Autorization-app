import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { history } from './history';


const initialState = {
  currentUserToken: {},
  showModalError:false,
  showModalEdit:false,
  showModalUpdate:false,
  ErrorText:"",
  selectUser:{},
  arrUsers:[],
  pages:[],
  page:[],
  active:"active"
  


}
const reducers = (state = initialState, action) =>{
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUserToken: action.payload}
      case 'SHOW_MODAL':
      return {...state, showModalError: action.payload}
      case 'CLOSE_MODAL':
        return {...state, showModalError: action.payload}
        case 'ERROR_TEXT_SHOW':
        return {...state, ErrorText: action.payload}
        case 'SHOW_USERS':
        return {...state, arrUsers: action.payload}
        case 'OPEN_MODAL_EDIT':
        return {...state, showModalEdit: action.payload}
        case 'CLOSE_MODAL_EDIT':
        return {...state, showModalEdit: action.payload}
        case 'SHOW_MODAL_UPDATE':
        return {...state, showModalUpdate: action.payload}
        case 'CLOSE_MODAL_UPDATE':
        return {...state, showModalUpdate: action.payload}
        case 'SELECT_USER':
        return {...state, selectUser: action.payload}
        case 'ADD_PAGES':
        return {...state, pages: action.payload}
        case 'ADD_PAGE':
        return {...state, page: action.payload}
        case 'SELECT_PAGE':
        return {...state, page: action.payload}
        // case 'ACTIVE_PAGE':
        //   return {...state, active: action.payload}
    default:
      return state;
  }
}

const store = createStore(reducers,applyMiddleware(thunk));
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history}/>
    </Router>
    </Provider>,
  document.getElementById('root')
);
