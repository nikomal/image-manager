/**
 * Created by niko on 2017/12/14.
 */

import React, {Component} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import Login from './login/index.js'

export default class App extends Component {
    render() {
        return (<div>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/login" />)}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>)
    }
}