import React, { Component } from 'react';
import { connect } from "react-redux";
import {selectPage} from '../Actions/Actions';
import {StyleDottsButton} from './StylePagination';
import {activePage} from '../Actions/Actions';
import {nextPage} from '../Actions/Actions';
import {prevPage} from '../Actions/Actions';


class Pagination extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
		this.nextPage = this.nextPage.bind(this);
		this.prevPage=this.prevPage.bind(this);
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
    render(){
			console.log(this.props.testStore)
			const arr = []
			for(let i = 1;i <=this.props.testStore.pages;i++){
				arr.push(i)
			}

        return(
            <div>
							<button disabled = {this.props.testStore.page===1} onClick={this.prevPage}>prev</button>
							{
								arr.map((item,i)=>{
								return <StyleDottsButton 
								className = {this.props.testStore.page === item &&`active`}
								onClick={()=>this.selectPage(item,event)}
								key={i}>{i+1}</StyleDottsButton>
								})
							}
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