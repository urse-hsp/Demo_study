import {createStore, combineReducers, applyMiddleware} from 'redux';

import {userReducer} from './reducers/userReducer'

import {listReducer} from './reducers/listReducer';

//关联saga 
import createSagaMiddleware from 'redux-saga';

import {defSaga} from './sagas'

const middware = createSagaMiddleware();//调用一下得到中间件


export default createStore(
    combineReducers({
        user:userReducer,
        list:listReducer
    }),{},applyMiddleware(middware)
); //applyMiddleware吧中间件关联到store中

middware.run(defSaga)