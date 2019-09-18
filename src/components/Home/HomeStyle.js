import styled from 'styled-components';

export const StyleTitle = styled.h1`
  text-transform:uppercase;
  font-size : 1rem;
  position:absolute;
  top:10%;
  left:40%;
`
export const StyleButton = styled.button`
min-width:200px;
outline: none;
cursor: pointer;
margin:0.5rem;
height: 50px;
background-color: transparent;
border: 1px solid #9932CC;
text-transform: uppercase;
float: right;
:hover{
  color:#fff;
  transition: 0.3s all;
  border:none;
  background: rgba(248,80,50,1);/* Old Browsers */
  background: linear-gradient(135deg, rgba(248,80,50,1) 0%, rgba(245,12,229,1) 19%, rgba(240,47,23,1) 76%, rgba(231,56,39,1) 100%);/* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );
}
`
export const StyleWrapperMain = styled.div`
right:30px;
  position: absolute;
`
