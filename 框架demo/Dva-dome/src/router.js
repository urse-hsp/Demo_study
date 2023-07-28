import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage.js';
import ReoductPage from './routes/ProductPage/ProductPage';
import Products from './routes/Products/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" component={ReoductPage} />
		    <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

/*
* 路由# 锚点模式
* <a href="#hello"></a>
*/
