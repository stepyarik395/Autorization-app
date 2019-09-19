import styled from 'styled-components'

export const StyleButton = styled.button`
width:100%;
outline: none;
cursor: pointer;
margin-top:20px;
height: 50px;
background-color: transparent;
border: 1px solid #9932CC;
text-transform: uppercase;
:hover{
  color:#fff;
  transition: 0.3s all;
  border:none;
  background: rgba(248,80,50,1);/* Old Browsers */
  background: linear-gradient(135deg, rgba(248,80,50,1) 0%, rgba(245,12,229,1) 19%, rgba(240,47,23,1) 76%, rgba(231,56,39,1) 100%);/* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );
}
`
export const StyleGlobalWrapper = styled.div`
height: 70vh;
display: flex;
justify-content:center;
align-items: center;
`
export const StyleWrapperSign = styled.div`
box-sizing: border-box;
text-align: center;
flex-direction: column;
display: flex;
`
export const StyleInputSign = styled.input`
min-width:300px;
font-size: 2rem;
border: 2px solid  #9932CC;
`
export const StyleLabel = styled.label`
display:block;
margin:1rem;
 text-transform: uppercase;
`
// export const StyleButton = styled.button`
// width:100%;
//   outline: none;
//   cursor: pointer;
//   margin-top:20px;
//   height: 50px;
//   background-color: transparent;
//   border: 1px solid #9932CC;
//   text-transform: uppercase;
// `