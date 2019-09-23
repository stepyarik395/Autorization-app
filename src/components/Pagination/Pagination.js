import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPage, nextPage, prevPage } from '../Actions/Actions'
import Paginator from '../Paginator/Paginator'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'

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

export const StylePrev = styled.button`
cursor:ponter;
outline:none;
border-radius:20px 0 0 0 ;
width:30px;
height:30px;
background-color:#E6E6FA
color:#4B0082;
display:flex;
justify-content:center;
align-items:center;
`
export const StyleNext = styled.button`
display:flex;
justify-content:center;
align-items:center;
color:#4B0082;
cursor:ponter;
outline:none;
border-radius:0 0 20px 0 ;
width:30px;
height:30px;
background-color:#E6E6FA
`
export const StyleWrapperPagin = styled.div`
margin-top:10px;
display:flex;
justify-content:center;
`

