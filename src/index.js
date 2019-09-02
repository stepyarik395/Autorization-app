import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';



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

const store = createStore(reducers,window.__REDUX_DEVTOOLS__EXTENSION__ && window.__REDUX_DEVTOOLS__EXTENSION__());

console.log(store.getState());

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
