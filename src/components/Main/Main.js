import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';



class Main extends Component{
	render(){
  	return(
    	<div>
      	<div className="wpapper__main__button">
          	<Link to="/"> <button>Log out</button></Link>
          </div>  
      </div>
        );
    }
}

export default Main;