import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import {StyleButton,StyleMain} from "./StyleMain";


class Main extends Component{
	render(){
  	return(
    	<div>
      	<div className="wpapper__main__button">
          	<Link to="/"><StyleButton>Out</StyleButton></Link>
          </div> 
		
		<StyleMain>
			
		</StyleMain>
			


      </div>
        );
    }
}

export default Main;