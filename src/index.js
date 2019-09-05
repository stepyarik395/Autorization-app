import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import history from './history';

const initialState = {
  currentUserToken: {},
  showModalError:false,
  ErrorText:""
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
    default:
      return state;
  }
}

const store = createStore(reducers,applyMiddleware(thunk));
// console.log(store.getState());
ReactDOM.render(
    <Router history = {history}>
      <Provider store={store}>
      <App />
    </Provider>
    </Router>,
  document.getElementById('root')
);
