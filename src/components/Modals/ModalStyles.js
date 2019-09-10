import styled from 'styled-components';



export const DivWrapperModal = styled.div`
border-radius:10px;
z-index:100;
top:25%;
// right:25%;
left:37.5%;
position:absolute;
width:400px;
height:200px;
background-color:rgba(75, 0, 130,0.9);
text-align:center;
`
export const StyleSpanText = styled.span`
padding:0.5rem;
display:block;
color:#fff;
font-size:1rem;
`

export const StyleButtonClose = styled.button`
text-shadow: 1px 1px 2px black, 0 0 1em white;
box-shadow: 0 0 15px rgba(255,255,255,0.5);
margin-top:2rem;
text-transform:uppercase;
color:#fff;
background-color:transparent;
// border:none;
border:2px solid white;
outline:none;
cursor:pointer;
border-radius:50%;
width:60xp;
height:60px;
`

export const DivFlexContainer = styled.div`
margin-top:1rem;
display:flex;
align-items:center;
justify-content:space-around;
`
export const WrapperModalEdit = styled.div`
position:relative;
padding:3rem;
background-color:#1B0A2A;
border:1px solid green;
width:500px;
display:flex;
flex-direction:column;

`
export const StyleInput = styled.input`
color:#fff;
background-color:transparent;
outline:none;
border-left:none;
border-right:none;
border-top:none;
border-bottom:1px solid #9932CC;
margin:1rem;

    :focus{
        border-bottom:1px solid #fff;
    }

`
export const StyleContainerModal = styled.div`
top:10%;
left:34%;
position:absolute;
`
export const StyleButtonAdd = styled.button`
cursor:pointer;
margin:1rem;
background-color:transparent;
border:2px solid #fff;
color:#fff;
outline:none;
height:50px;
text-transform:uppercase;
box-shadow: 0 0 10px rgba(255,255,255,0.8);
text-shadow: 1px 1px 2px black, 0 0 1em white;
`
export const ButtonCloseEdit = styled.button`
position:absolute;
right:10px;
top:8px;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
width:30px;
height:30px;
border-radius:50%;
color:#fff;
outline:none;
cursor:pointer;
border:2px solid white;
font-size:1.5rem;
text-shadow: 1px 1px 2px black, 0 0 1em white;
`