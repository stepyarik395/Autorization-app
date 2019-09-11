
import styled from 'styled-components';

export const StyleButton = styled.button`
background-color: transparent;
margin:0.5rem;
height: 40px;
text-transform: uppercase;
width:200px;
cursor: pointer;
float: right;
`

export const StyleMain = styled.main`
height:60vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`




export const StyleWrapperDiv = styled.div`
display:flex;
border-radius:4px;
border: 1px solid #9932CC;
padding:2rem;

`
export const StyleTitle = styled.h2`
font-size:1rem;
`
export const StyleMainContainer = styled.div`
margin:0.5rem;
`
export const StyleTh = styled.th`
`
export const StyleEditButton = styled.button`
outline:none;
box-shadow: 0 0 5px rgba(0,0,0,0.3);
margin:0.2rem;
cursor:pointer;
width:30px;
height:30px;
border-radius:50%;
background-color:transparent;
border:2px solid #9932CC;
transition:0.3s all ease-out;
:hover{
    
    background:#9932CC;
    color:#fff;
}
:active{
    background-color:rgba(248,80,50,1);
}
`
export const StyleButtonEdit = styled.button`
box-shadow: 0 0 10px rgba(0,0,0,0.9);
margin-top:3rem;
outline:none;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
font-size:2rem;
background-color:#9932CC;
color:#fff;
width:100px;
height:100px;
border-radius:50%;
border:none;
`