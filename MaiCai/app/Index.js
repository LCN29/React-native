/**
 * Created by LCN on 2017/9/26 0026.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

import Splash from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import AppNavigator from './navigators/AppNavigator';
import store from './store/store';

export default class Index extends Component {

    componentDidMount() {
        Splash.hide();
    }

    render(){
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}


