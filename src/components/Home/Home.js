
import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from 'react-router-dom';
import styled from 'styled-components';



const StyleTitle = styled.h1`
  text-transform:uppercase;
  font-size : 1rem;
  position:absolute;
  top:10%;
  left:40%;
`
const StyleWrapper = styled.div`
`
const StyleButton = styled.button`
background-color: transparent;
margin:0.5rem;
height: 40px;
text-transform: uppercase;
width:200px;
cursor: pointer;
float: right;
`







class Mainpage extends Component{
  render(){
    return(
      <div>
        <div className="wpapper__main__button">
          <Link to="/register">
            <StyleButton>Login In</StyleButton>
              </Link>
          <Link to="/login"><StyleButton>Sign in</StyleButton></Link>
        </div>
        <StyleTitle>
        <h1>Hellow</h1>  
        </StyleTitle> 
      </div>

    );
  }
}
export default Mainpage;