/**
 * Created by niko on 2017/12/14.
 */
import {createStore,combineReducers,applyMiddleware} from 'redux';
import * as reducers from './reducer';
import thunk from 'redux-thunk';
console.log(reducers);

const reducer = combineReducers(reducers);

export const store = createStore(reducer,{user:{isLoading:false}},applyMiddleware(thunk));