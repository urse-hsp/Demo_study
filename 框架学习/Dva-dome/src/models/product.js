import * as api from '../services/example';

export default {
    namespace:"product",
    state:{
        productList:[
            {name:"豆子"},
            { name:"玉米"}
        ]
    },
    reducers:{
        updateList(state,action){
            let currentProductList = deepClone(state);
            currentProductList.productList.push(action.payload);
            return currentProductList
        }
    },
    
    effects: {
        *updataListAsync({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ 
                type: 'updateList',
                payload 
            });
        },
        *updataListHttp({ payload }, { call, put}) {
            const result = yield call(api.getProduct, payload);
            console.log(payload)
            const data = result.data;
            if(data){
                yield put({
                    type:"updateList",
                    payload:data
                })
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            window.onresize = () =>{
                const currentProduct = {
                    name:"苹果5"
                }
                dispatch({
                    type:"product/updateList",
                    payload:currentProduct
                })
            }
        },
        setupHistory({ dispatch, history }) {  // eslint-disable-line
            history.listen((location)=>{
                console.log(location)
            })
        },
    },
}

//redux中直接操作state可能会导致视图不更新，页面内state没有更新过来，这变使用一个热更新克隆
function deepClone(arr){
    let _obj = JSON.stringify(arr),
        objClone = JSON.parse(_obj)
    return objClone;
}