import {actions} from '../../constants/counter'

export function userReducer(state = {},action){
    switch(action.type){
        case actions.LOGIN:
            return Object.assign({},state,action); //转换，获取数据，
		case actions.SUCCESS_LOGIN:
				//登录成功，缓存到本地
				const {token} = action;
				localStorage.setItem("tm-toKen",token);
			return {
				status:1
			}
		case actions.ERROR_LOGIN:
			return {
				status:2
			}
        default:
            return state;
    }
}