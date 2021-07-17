import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

import * as api from '@/services/example';

export default class Index extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.getData();
  }
  async getData(){
    const res = await api.getData();
    console.log(res)
  }
  render(){
    return (
      <div>
        <h1 className={styles.title}>Page index<Link to="/products/1">Page index</Link>aa</h1>
        <br/>
        <Link to="/products">表格页</Link>
      </div>
    );
  }
}
