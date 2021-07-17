import {all} from 'redux-saga/effects';

//导入 listSaga 跟 loginSaga
import {loginSaga} from './loginSaga';
import {listSaga} from './listSaga';

export function* defSaga(){
	yield all([loginSaga(),listSaga()])
}