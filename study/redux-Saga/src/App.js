import React from 'react';

import {Provider} from 'react-redux';
import store from './store';
import Approuter from './AppRouter.js';

export default function App(){
  return(
    <Provider store={store}>
        <div className="app">
          <Approuter/>
        </div>
     </Provider>
  )
}