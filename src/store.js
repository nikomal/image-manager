/**
 * Created by niko on 2017/12/14.
 */
import {createStore,combineReducers} from 'redux';
import * as reducers from './reducer';
console.log(reducers);

const reducer = combineReducers(reducers);

export const store = createStore(reducer,{});