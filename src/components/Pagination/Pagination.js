import React, { Component } from 'react';
import { connect } from "react-redux";
import {selectPage} from '../Actions/Actions';
import {StyleDottsButton} from './StylePagination';
import {activePage} from '../Actions/Actions';

class Pagination extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
		this.someFunct = this.someFunct.bind(this);

	}
	selectPage(item,event){
		this.props.selectPage(item)
	}
	someFunct() {
    this.setState({ active: name })
}
    render(){
			console.log(this.props.testStore)
			const arr = []
			for(let i = 1;i <=this.props.testStore.pages;i++){
				arr.push(i)
			}

        return(
            <div>
							{
								arr.map((item,i)=>{
								return <StyleDottsButton  onClick={()=>this.selectPage(item,event)}key={i}>{i+1}</StyleDottsButton>
								})
								
							}

            </div>
        )
    }

}
const mapDispatchToProps = dispatch => ({
	selectPage: select => dispatch(selectPage(select)),
	activePage:active =>dispatch(activePage(active))

})


const mapStateToProps = state =>({
	testStore: state,
	
	arrUsers: state.arrUsers
		
})

export default connect(mapStateToProps,mapDispatchToProps)(Pagination)