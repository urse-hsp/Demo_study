import dva from 'dva';
import './index.css';
// import createHistory from 'history/createBrowserHistory';//会包错误。写法过时
import { createBrowserHistory as createHistory } from "history";


// 1. Initialize
const app = dva({
  history: createHistory(),
});

// import Router from './router.js';
// import Router from './router.js';
    // console.log(Router);//import 是解构赋值


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require("./models/product").default);
require("./models").default.forEach(key => {
  app.model(key.default)
});


// 4. Router
app.router(require('./router').default);
    // console.log(require('./router')); //require是赋值

// 5. Start
app.start('#root');
