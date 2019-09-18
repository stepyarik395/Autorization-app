import React, { Component } from 'react'
import { StyleSearch, StyleButton, StyleWrapper } from '../Search/StyleSearch'
import { MdSearch } from 'react-icons/md'
import { connect } from 'react-redux'
import { searchItems } from '../Actions/Actions'
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleInputChangeValue = this.handleInputChangeValue.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch () {
    this.props.searchItems(this.state.text)
  }

  handleInputChangeValue (e) {
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
  testStore: state
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)
