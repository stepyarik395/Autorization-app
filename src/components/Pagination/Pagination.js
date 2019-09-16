import React, { Component } from 'react';
import { connect } from "react-redux";
import {selectPage} from '../Actions/Actions';
import {StyleDottsButton} from './StylePagination';
import {activePage} from '../Actions/Actions';
import {nextPage} from '../Actions/Actions';
import {prevPage} from '../Actions/Actions';
import TestPagin from "../testePagination/TestPagin";


class Pagination extends Component{
	constructor(props){
		super(props)
		this.state = {
			currentPage:1

		}
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.selectPage = this.selectPage.bind(this);
	}





	selectPage(item,event){
		this.props.selectPage(item)
	}
	nextPage(){
		this.props.nextPage(this.props.testStore.page)
	}
	prevPage(){
		this.props.prevPage(this.props.testStore.page)
	}
	handlePagination(e){

	}


	

	

	

    render(){
        return(
							<div>
									<TestPagin currentPage={this.state.currentPage} lastPage={this.props.testStore.pages} clickEvent={this.handlePagination} />
								{
								//  this.pagination(1,6).map((item,i)=>{
								//  return <StyleDottsButton 
								//  className = {this.props.testStore.page === item &&`active`}
								//  onClick={()=>this.selectPage(item,event)}
								//  key={i}>{i+1}
								//  </StyleDottsButton>
								//  })
								
							}
								<button disabled = {this.props.testStore.page===1} onClick={this.prevPage}>prev</button>
								<button disabled = {this.props.testStore.page===this.props.testStore.pages}onClick={this.nextPage}>next</button>
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