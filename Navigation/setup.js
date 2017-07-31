/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import StackNavigator from './navigation/one/ScreenController';

import TabNavigator from './navigation/two/ScreenController';

import DrawerNavigator from './navigation/three/ScreenController';

//配置头部
import Header from './navigation/four/ScreenController';


// StackNavigator 进行设置
import StackNavigatorConfig from './navigation/five/ScreenController';



import TabNavigatorConfig from './navigation/six/ScreenController';


export default class setup extends Component {
    render() {
        /*<StackNavigatorConfig screenProps = {{user : 'LCN', name: 'add'}} />*/
        return (
        	<TabNavigatorConfig/>
        );
    }
}

const styles = StyleSheet.create({

});