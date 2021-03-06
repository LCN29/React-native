/**
 * Created by LCN on 2017/9/10 0010.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './page/Home';
import store from './store/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}