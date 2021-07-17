import {takeEvery, select, call, put} from 'redux-saga/effects';
import {actions} from '../../constants/counter'
import axios from 'axios'

	//https://www.fastmock.site/#/project/4033  模拟接口
export function* loginSaga(){
    console.log("loginSaga")
    yield takeEvery(actions.LOGIN,function*(){
        try {
			const state = yield select(state => state.user.data);
			const res = yield call(axios.get,'https://www.fastmock.site/mock/bf8472e01c568d7c136e7ba95a7dd945/shop1/ap',{
				params:{...state}
			})
			if(res.status === 200){
				yield put({	//发送个登录成功的 action
					type:actions.SUCCESS_LOGIN,
					token:res.data.toKen
				})
			}else{
				yield put({	//发送个登录失败的 action
					type:actions.ERROR_LOGIN
				})
			}
		} catch (error) {
			yield put({
				type:actions.ERROR_LOGIN
			})
		}
    })
}