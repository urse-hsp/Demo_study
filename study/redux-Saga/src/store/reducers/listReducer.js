import { actions } from "../../constants/counter";

export function listReducer(state = {},action){
    switch(action.type){
        case actions.LTST:
            //异步的action
            return Object.assign({}, state,action);
			
        case actions.SUCCESS_LIST:
            const {data} = action;
            return{
                state:1,
                data:[...data]
            }
        case actions.ERROR_LIST:
            return{
                state:2
            }
        case actions.ONAUTHORIZATION:
            return{
                state:3
            }
        default:
            return state;
    }
}