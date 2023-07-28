import React from 'react';
import {Link, withRouter, routerRedux } from 'dva/router';
import * as api from '../services/example';

class Product extends React.Component{

    componentDidMount(){
        api.getProduct()
        .then(res=>{
            console.log(res)
        })
    }

    clickProductList = (event)=>{
        const currentProduct = {
            name:"苹果"
        }
        this.props.dispatch({
            type:"product/updateList",
            payload:currentProduct
        })
    }
    clickGoToHandler = (event)=>{
        this.props.history.push("/")
    }
    clickGoReduxHandler = (event)=>{
        this.props.dispatch(routerRedux.push("/"))
    }
    clickProductListAsync = (event)=>{
        const currentProduct = {
            name:"香蕉"
        }
        this.props.dispatch({
            type:"product/updataListAsync",
            payload:currentProduct
        })
    }
    clickHttpAsync = (event)=>{
        this.props.dispatch({
            type:"product/updataListHttp",
            payload:{
                id:1001
            }
        })
    }

    render(){
        const {productList} = this.props.productList
        return(
            <div>
                product商品：{this.props.title}
                <ul>
                    {
                        productList.map((element,index)=>{
                            return <li key={index}>{element.name}</li>
                        })
                    }
                </ul>
                <button onClick={this.clickProductList}>获取商品列表</button>
                <button onClick={this.clickProductListAsync}>获取商品列表Async</button>
                <button onClick={this.clickHttpAsync}>Http请求</button>

                <div><Link to="/">去首页1</Link></div>
                <button onClick={this.clickGoToHandler}>去首页2</button>
                <button onClick={this.clickGoReduxHandler}>去首页3</button>
            </div>
        )
    }
}
export default withRouter(Product)