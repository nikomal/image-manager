/**
 * Created by niko on 2017/12/14.
 */
import * as types from './view/login/actionType';
export const user = (state = {} ,action) => {
    switch (action.type) {
        case types.REQUEST_USER:
            return {...state,isLoading:true};
        case types.RECEIVE_USER:
            return {...state,user:action.user,isLoading:false};
        default:
            return state;
    }
};
