import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {StyleButton,StyleMain} from "./StyleMain";
import Item from '../Item/Item';
import requestHendler from '../RequestHendler/RequsetHendler';

class Main extends Component{
	constructor(props){
		super(props);
		this.state ={
			data:[1,2,3,4,2,3]
		}
	}

	componentDidMount() {

				const options = {
					url:'/info',
					type:'get',
					// data: JSON.stringify(data),
					}
					requestHendler(options)
					.then(res =>{
								console.log(res.status);
					});
				}

		
    // axios.get(`http://yourapi.com`)
    //   .then(res => {
    //     const posts = res.data.data.children.map(obj => obj.data);
    //     this.setState({ posts });
    //   });
  




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
							{this.state.data.map((item,key) =>
							 <Item key={key}>{item} /</Item>
							)}
						</StyleMain>
      		</div>
        );
    }
}

export default Main;