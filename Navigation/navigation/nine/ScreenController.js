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


    // path : '自定义的路径名/:需要传递的参数key'

    {
        Home : {
            screen : HomeScreen
        },

        Chat : {
            screen : ChatScreen,
            path: 'chat/:user',
        }
    },


);
export default ScreenController;