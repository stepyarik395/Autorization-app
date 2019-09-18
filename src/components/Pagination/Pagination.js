import React, { Component } from 'react';
import { connect } from "react-redux";
import {selectPage} from '../Actions/Actions';
import {activePage} from '../Actions/Actions';
import {nextPage} from '../Actions/Actions';
import {prevPage} from '../Actions/Actions';
import Paginator from "../Paginator/Paginator";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md';
import {StylePrev,StyleNext,StyleWrapperPagin} from "./StylePagination";

class Pagination extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.handlePagination = this.handlePagination.bind(this);
	}
	
	nextPage(){
		this.props.nextPage(this.props.testStore.page)
	}
	prevPage(){
		this.props.prevPage(this.props.testStore.page)
	}
	handlePagination(i){
		this.props.selectPage(i)
	}

    render(){
    	return(
				<div>
					<Paginator
						currentPage={this.props.testStore.page}
						lastPage={this.props.testStore.pages}
						clickEvent={this.handlePagination} />

						<StyleWrapperPagin>
							<StylePrev 
								disabled={this.props.testStore.page===1}
								onClick={this.prevPage}>
								<MdKeyboardArrowLeft />
							</StylePrev>
							<StyleNext
								 	disabled={this.props.testStore.page===this.props.testStore.pages}
									onClick={this.nextPage}>
									<MdKeyboardArrowRight />
							</StyleNext>
						</StyleWrapperPagin>	
			</div>
  	)
  }
}

const mapDispatchToProps = dispatch => ({
	selectPage: select => dispatch(selectPage(select)),
	activePage:active =>dispatch(activePage(active)),
	nextPage:next =>dispatch(nextPage(next)),
	prevPage:prev =>dispatch(prevPage(prev))

})


const mapStateToProps = state =>({
	testStore: state,
	arrUsers: state.arrUsers
		
})

export default connect(mapStateToProps,mapDispatchToProps)(Pagination)