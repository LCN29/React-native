/**
 * Created by LCN on 2017/9/9 0009.
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import LoginPage from './pages/LoginPage';

export default class extends Component{

    constructor(){
        super();
        this.state = {
            store : store,
        }
    }

    render(){
        return (
            <Provider store={this.state.store}>
                <LoginPage/>
            </Provider>
        );
    }

}
