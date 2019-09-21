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
    this.props.nextPage(this.props.page)
  }

  handlePrevPage = () => {
    this.props.prevPage(this.props.page)
  }

  OnhandlePagination = (i) => {
    this.props.selectPage(i)
  }

  render () {
    const {page, pages} = this.props
    return (
      <div>
        <Paginator
          currentPage={page}
          lastPage={pages}
          clickEvent={this.OnhandlePagination}
        />

        <StyleWrapperPagin>
          <StylePrev
            disabled={page === 1}
            onClick={this.handlePrevPage}
          >
            <MdKeyboardArrowLeft />
          </StylePrev>

          <StyleNext
            disabled={page === pages}
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

const mapStateToProps = store => ({
  arrUsers: store.arrUsers,
  page: store.page,
  pages: store.pages

})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
