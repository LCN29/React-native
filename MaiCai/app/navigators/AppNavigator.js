/**
 * Created by LCN on 2017/9/29 0029.
 */

import React, { Component } from 'react';
import {
    BackHandler,
    Platform
} from  'react-native';

import AppStackNavigator from './AppStackNavigator';

import { NAVGATION_HOME } from '../actions/actionTypes';

import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

class AppNavigator extends Component {

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }

    render(){

        let dispatch = this.props.dispatch;
        let state = this.props.nav;

        return (
            <AppStackNavigator navigation={addNavigationHelpers({ dispatch, state })} />
        );
    }

    onBackAndroid = () => {

        /*
        *
        *
        */
        const { dispatch, nav } = this.props;
        if (nav.routes.length === 1 && (nav.routes[0].index != 0)) {
            dispatch({ type: NAVGATION_HOME});
            return true
        }

        if (nav.routes.length > 1) {
            dispatch({ type: 'Navigation/BACK' });
            return true;
        }

        BackHandler.exitApp();
    }
}

const mapStateToProps = state => {
    return {
        nav: state.nav
    }
};

export default connect(mapStateToProps)(AppNavigator);
