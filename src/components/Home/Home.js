
import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from 'react-router-dom';

class Mainpage extends Component{
  render(){
    return(
      <div>
        <div className="wpapper__main__button">
          <Link to="/register"> <button>Login in</button></Link>
          <Link to="/login"><button>Sign in</button></Link>
        </div>   
      </div>

    );
  }
}
export default Mainpage;