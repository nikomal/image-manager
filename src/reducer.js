/**
 * Created by niko on 2017/12/14.
 */
import * as types from './view/login/actionType';
export const user = (state = '' ,action) => {
    switch (action.type) {
        case types.SET_USER:
            return action.user;
        default:
            return state;
    }
};
