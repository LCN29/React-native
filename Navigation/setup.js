/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

import StackNavigator from './navigation/one/ScreenController';

import TabNavigator from './navigation/two/ScreenController';

import DrawerNavigator from './navigation/three/ScreenController';

//配置头部
import Header from './navigation/four/ScreenController';


// StackNavigator 进行设置
import StackNavigatorConfig from './navigation/five/ScreenController';

import TabNavigatorConfig from './navigation/six/ScreenController';

import DrawerNavigatorConfig from './navigation/seven/ScreenController';

import NavigationProp from './navigation/eight/ScreenController';

import DeepLink from './navigation/nine/ScreenController';


// DeepLink 使用需要的前缀，android访问 mychat://mychat/页面的path/参数
// android  mainfest 的 mainactivity 添加intent-filter,
/*
* <intent-filter>
     <action android:name="android.intent.action.VIEW" />
     <category android:name="android.intent.category.DEFAULT" />
     <category android:name="android.intent.category.BROWSABLE" />
     <data android:scheme="mychat" android:host="mychat" />
 </intent-filter>
* */

// 运行 使用adb命令行 adb shell am start -W -a android.intent.action.VIEW -d "mychat://mychat/chat/参数" 包名

const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

export default class setup extends Component {
    render() {
        /*<StackNavigatorConfig screenProps = {{user : 'LCN', name: 'add'}} />*/
        return (
        	<DeepLink uriPrefix={prefix} />
        );
    }
}

const styles = StyleSheet.create({

});