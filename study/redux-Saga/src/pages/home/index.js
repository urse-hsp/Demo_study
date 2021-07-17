import React from 'react';

import {connect} from 'react-redux';
// import { actionChannel } from 'redux-saga/effects';
import {actions} from '../../constants/counter';

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
            user:"",
			password:""
        }
	}

	handleSubmit = e =>{
		let user = this.refs.user.value;
		let possword = this.refs.possword.value;
		if(user.trim()=== "" || possword.trim()=== ""){
			return
		}else{
			this.props.dispatch({
				type:actions.LOGIN,
				data:{
					user,
					possword
				}
			})
		}
	}
	componentWillUpdate(nextProps,nextstate){
		if(nextProps !== this.props){
			const { status } = nextProps;
			if(status === 1 ){
				console.log("成功");
				nextProps.history.push("/list")
			}else{
				console.log("登录失败");
			}
		}
	}
    render(){
        return (
            <div>
				<div>
					<form>
						<p>user:<input type="text" ref ='user'/></p>
						<p>possword:<input type="possword" ref ='possword'/></p>
						{/* <p><input type="submit"/></p> */}
						
					</form>
					<button onClick={this.handleSubmit}>点击</button>
				</div>
            </div>
        )
    }

}
const mapStateToProps = state =>{
	return {
		...state.user
	}
}

export default connect(mapStateToProps)(Home)