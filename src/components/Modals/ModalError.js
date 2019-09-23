import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
class ModalErrorLogin extends Component {
  render () {
    const { ErrorText } = this.props
    return (
      <div>
        <DivWrapperModal>
          <DivFlexContainer>
            <StyleSpanText>
              {ErrorText}
            </StyleSpanText>
          </DivFlexContainer>
          <StyleButtonClose onClick={this.props.handleHideModal}>close</StyleButtonClose>
        </DivWrapperModal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleHideModal: () => dispatch({ type: 'SHOW_MODAL_ERROR', payload: false })
})

const mapStateToProps = store => {
  return {
    ErrorText: store.ErrorText
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalErrorLogin)

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
