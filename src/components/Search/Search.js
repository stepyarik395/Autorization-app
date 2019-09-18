import React, { Component } from 'react';
import {StyleSearch,StyleButton,StyleWrapper} from "../Search/StyleSearch";
import {MdSearch} from 'react-icons/md';
import { connect } from "react-redux";
import {searchItems} from "../Actions/Actions";


class Search extends Component{
	constructor(props){
		super(props)
		this.state = {
			text:""
		}
		this.inputChangeValue = this.inputChangeValue.bind(this);
		this.heandleSearch = this.heandleSearch.bind(this);
	}

	heandleSearch(){
		this.props.searchItems(this.state.text)

	}
	inputChangeValue(e){
		this.setState({
			text:e.target.value
		})
	}

    render(){
    	return(
      	<StyleWrapper>
					<StyleSearch 
						value={this.state.searchValue}
						onChange={this.inputChangeValue}
						placeholder="Search"
						type="text">
					</StyleSearch>
					<StyleButton onClick={this.heandleSearch}><MdSearch /></StyleButton>
      </StyleWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
	searchItems:search =>dispatch(searchItems(search))
	

})


const mapStateToProps = state =>({
	testStore: state,
})
export default connect(mapStateToProps,mapDispatchToProps)(Search)