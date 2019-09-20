import React, { Component } from 'react'
import { DivWrapperModal, StyleSpanText, StyleButtonClose, DivFlexContainer } from './ModalStyles'
import { connect } from 'react-redux'

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
  handleHideModal: () => dispatch({ type: 'CLOSE_MODAL', payload: false })
})

const mapStateToProps = store => {
  return {
    ErrorText: store.ErrorText
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalErrorLogin)
