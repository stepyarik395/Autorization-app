import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPage, nextPage, prevPage } from '../Actions/Actions'
import Paginator from '../Paginator/Paginator'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { StylePrev, StyleNext, StyleWrapperPagin } from './StylePagination'

class Pagination extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  handleNextPage = () => {
    this.props.nextPage(this.props.testStore.page)
  }

  handlePrevPage = () => {
    this.props.prevPage(this.props.testStore.page)
  }

  OnhandlePagination = (i) => {
    this.props.selectPage(i)
  }

  render () {
    return (
      <div>
        <Paginator
          currentPage={this.props.testStore.page}
          lastPage={this.props.testStore.pages}
          clickEvent={this.OnhandlePagination}
        />

        <StyleWrapperPagin>
          <StylePrev
            disabled={this.props.testStore.page === 1}
            onClick={this.handlePrevPage}
          >
            <MdKeyboardArrowLeft />
          </StylePrev>

          <StyleNext
            disabled={this.props.testStore.page === this.props.testStore.pages}
            onClick={this.handleNextPage}
          >
            <MdKeyboardArrowRight />
          </StyleNext>
        </StyleWrapperPagin>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  selectPage: select => dispatch(selectPage(select)),
  nextPage: next => dispatch(nextPage(next)),
  prevPage: prev => dispatch(prevPage(prev))

})

const mapStateToProps = state => ({
  testStore: state,
  arrUsers: state.arrUsers

})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
