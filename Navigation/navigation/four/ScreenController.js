/**
 * Created by Ape on 2017/7/30.
 */

import React from 'react';
import {
    Text,
} from 'react-native';

import HomeScreen from './screen/HomeScreen';
import ChatScreen from './screen/ChatScreen';

import {StackNavigator} from 'react-navigation';

const ScreenController = StackNavigator(

    {
        Home : { screen : HomeScreen },
        Chat : { screen : ChatScreen }
    },

);


//导出去的这个变量，也是一个页面
// 犹如 android 中的 activity ，screen 就是里面的fragment ，这个变量也可以作为一个页面来用
export default ScreenController;