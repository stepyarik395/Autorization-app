import React, { Component } from 'react'
import { MdSearch } from 'react-icons/md'
import { connect } from 'react-redux'
import { searchItems } from '../Actions/Actions'
import styled from 'styled-components'
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSearch = () => {
    this.props.searchItems(this.state.text)
  }

  handleInputChangeValue = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    return (
      <StyleWrapper>
        <StyleSearch
          value={this.state.searchValue}
          onChange={this.handleInputChangeValue}
          placeholder='Search'
          type='text'
        />
        <StyleButton onClick={this.handleSearch}><MdSearch /></StyleButton>
      </StyleWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchItems: search => dispatch(searchItems(search))
})
const mapStateToProps = state => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)


export const StyleSearch = styled.input`
padding-left:1rem;
font-size:1.2rem;
outline:none;
border:none;
border-radius:30px;
margin-top:8px;
margin-left:20px;
width:200px;
height:50px;
color:#fff
background-color:#9932CC;
:hover{
}
`

export const StyleButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
color:#fff;
cursor:pointer;
outline: 1px dashed rgba(255,255,255,0.8);
outline-offset: -9px;
border:none;
border-radius:50%;
margin-left:10px;
width:30px;
height:30px;
background-color:#9932CC;
transition:0.3s;
:hover{
    font-size:1.5rem;
    outline:none;
}
`
export const StyleWrapper = styled.div`
display:flex;
align-items:center;
`

