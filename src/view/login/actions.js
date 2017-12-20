/**
 * Created by niko on 2017/12/14.
 */
import {RECEIVE_USER,REQUEST_USER} from './actionType';
import {request} from '../../utils/index';

const requestUser = () =>({
    type:REQUEST_USER
});

const receiveUser = (user) => ({
    type:RECEIVE_USER,
    user:user
});

export const userLogin = (userInfo) => {
    return (dispatch) => {
         dispatch(requestUser());
         return request('/login', {
             method: 'post',
             data: {
                 username: userInfo.username,
                 password: userInfo.password
             }
         }).then((data) => {
             console.log(data);
             dispatch(receiveUser(data.user));
         })
    }
};