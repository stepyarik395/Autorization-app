import React, { Component } from 'react';
import { connect } from "react-redux";
import {selectPage} from '../Actions/Actions';
import {StyleDottsButton} from './StylePagination';






class Pagination extends Component{
	constructor(props){
		super(props)
		this.state = {

		}

	}
	selectPage(item){
		console.log(item)
		this.props.selectPage(item)

	}

    render(){
			const arr = []
			for(let i = 1;i <=this.props.testStore.pages;i++){
				arr.push(i)
			}
        return(
            <div>
							{
								arr.map((item,i)=>{
								return <StyleDottsButton onClick={()=>this.selectPage(item)}key={i}>{i+1}</StyleDottsButton>
								})
								
							}

            </div>
        )
    }

}
const mapDispatchToProps = dispatch => ({
	selectPage: select => dispatch(selectPage(select)),

})


const mapStateToProps = state =>({
	testStore: state,
	
	arrUsers: state.arrUsers
		
})

export default connect(mapStateToProps,mapDispatchToProps)(Pagination)