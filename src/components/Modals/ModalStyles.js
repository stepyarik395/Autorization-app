import styled from 'styled-components';



export const DivWrapperModal = styled.div`
border-radius:10px;
z-index:100;
top:25%;
// right:25%;
left:34%;
position:absolute;
width:400px;
height:200px;
background-color:rgba(75, 0, 130,0.9);
text-align:center;
`

export const StyleSpanText = styled.span`
display:block;
color:#fff;
font-size:1rem;
`

export const StyleButtonClose = styled.button`\
margin-top:2rem;
text-transform:uppercase;
color:#fff;
background-color:transparent;
// border:none;
border:2px solid white;
outline:none;
cursor:pointer;
border-radius:50%;
width:50xp;
height:50px;
`

export const DivFlexContainer = styled.div`
margin-top:1rem;
display:flex;
align-items:center;
justify-content:space-around;
`