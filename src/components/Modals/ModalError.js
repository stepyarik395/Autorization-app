import React from 'react'
import { DivWrapperModal, StyleSpanText, StyleButtonClose, DivFlexContainer } from './ModalStyles'
import { connect } from 'react-redux'
import { handleHideModal } from '../Actions/Actions'

const ModalErrorLogin = () => {
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

const mapDispatchToProps = dispatch => ({
  handleHideModal: modal => dispatch(handleHideModal(modal))
})

const mapStateToProps = store => {
  console.log(store)
  return {
    ErrorText: store.ErrorText
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalErrorLogin)
