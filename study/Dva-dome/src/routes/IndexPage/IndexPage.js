import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd';
import * as api from '../../services/example';
import {Link, withRouter, routerRedux } from 'dva/router'

class IndexPage extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        data:{
          name:"hsp",
          age:23
        }
      }
    }
    componentDidMount(){ 
      api.getData(this.state.data)
      .then(res=>{
        console.log(res)
      })
    }
    render(){
      return (
        <div className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to dva!</h1>
          <div className={styles.welcome} />
          <ul className={styles.list}>
            <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
            <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
          </ul>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed"><Link to="/products">Dashed</Link></Button>
          <Button type="link"><Link to="/product">Link</Link></Button>
        </div>
        </div>
      );
    }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
