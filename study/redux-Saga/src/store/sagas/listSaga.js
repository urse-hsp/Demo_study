import {takeEvery, call, put} from 'redux-saga/effects'
import {actions} from '../../constants/counter'

import axios from "axios";

export function* listSaga(){
    console.log("listSaga1")
    yield takeEvery(actions.LTST,function* (){
        try {
           const token = localStorage.getItem("tm-toKen");
            //设置给请求头的时候注意，不要直接传入token, 所以前面要拼接一个 Bearer toker
           const res = yield call(axios.get,'https://www.fastmock.site/mock/bf8472e01c568d7c136e7ba95a7dd945/shop1/ap',{
                headers:{
                    Authorization:"Bearer"+token
                }
            }) 
            if(res.status === 200){
                yield put({
                    type:actions.SUCCESS_LIST,
                    data:[...res.data.data]
                })
            }else{
                yield put({
                    type:actions.ERROR_LIST
                })
            }
        } catch(error){
            yield put({
                type:actions.ONAUTHORIZATION
            })
        }
    })
}