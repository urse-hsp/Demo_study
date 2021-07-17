import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../../constants/counter';

class List extends React.Component{
	constructor(props){
		super(props)
		this.state = {
            data:[]
        }
	}
	
	/*
	*组件挂载完毕后调用 请求数据
	*/
	componentDidMount(){
		let toKen= localStorage.getItem("tm-toKen");
		if(toKen){
			this.props.dispatch({
				type:actions.LTST
			})
		}else{
			this.props.history.push("/");
		}
	}
	componentWillUpdate(nextProps,nextstate){
		if(nextProps !== this.props){
			if(nextProps.state ===1 ){
				this.setState({
					data: nextProps.data
				})
			}
		}
	}
	
    render(){
        return (
            <div>
				商品列表:
				{
					this.props.data && this.props.data.map((item,index)=>{
						return <div key={index}>1{item.name}</div>
					})
				}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) =>{
	return {
		...state.list
	}
}
export default connect(mapStateToProps)(List);