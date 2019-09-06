import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {StyleButton,StyleMain} from "./StyleMain";





class Main extends Component{
	clearLocalStorage(){
		localStorage.clear()
	}

	render(){
  	return(
    	<div>
      	<div className="wpapper__main__button">
          	<Link to="/"><StyleButton onClick = {this.clearLocalStorage}>Out</StyleButton></Link>
          </div> 
		
		<StyleMain>
			
		</StyleMain>
			


      </div>
        );
    }
}

export default Main;