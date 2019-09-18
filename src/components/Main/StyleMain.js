import styled from 'styled-components';

export const StyleButton = styled.button`
color:#fff;
  border:none;
  background: rgba(248,80,50,1);/* Old Browsers */
  background: linear-gradient(135deg, rgba(248,80,50,1) 0%, rgba(245,12,229,1) 19%, rgba(240,47,23,1) 76%, rgba(231,56,39,1) 100%);/* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );
min-width:200px;
outline: none;
cursor: pointer;
margin:0.5rem;
height: 50px;
text-transform: uppercase;
float: right;
:hover{
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
width:70px;
height:70px;
border-radius:50%;
border:none;
`
