import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";



 export const history =  createBrowserHistory();


const initialState = {
  currentUserToken: {}
}
const reducers = (state = initialState, action) =>{
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUserToken: action.payload}
    default:
      return state;
  }
}

const store = createStore(reducers);

console.log(store.getState());
ReactDOM.render(
    <Router history ={history}>
      {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    </Router>,
  document.getElementById('root')
);
