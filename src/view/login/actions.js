/**
 * Created by niko on 2017/12/14.
 */
import {SET_USER} from './actionType';

export const setUser = (user) => ({
    type:SET_USER,
    user:user
});