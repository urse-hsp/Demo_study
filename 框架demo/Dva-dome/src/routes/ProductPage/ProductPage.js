import React from 'react';
import Product from '../../components/Product';
import {connect} from 'dva';

class IndexPage extends React.Component{

	render(){
		const {productList,dispatch,history} = this.props;
		// console.log(this.props)
		return(
			<div>
				<b>IndexPage父级：</b>
				<Product title="苹果" productList={productList} dispatch={dispatch}/>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		productList:state.product
	}
}

export default connect(mapStateToProps)(IndexPage)