/**
 * Created by Ape on 2017/7/30.
 */

import React from 'react';
import {
    Text,
} from 'react-native';

import HomeScreen from './screen/HomeScreen';
import ChatScreen from './screen/ChatScreen';


/*  使用前，需要先导入包  npm install --save react-navigation */
import {DrawerNavigator} from 'react-navigation';

const ScreenController = DrawerNavigator(

    {
        Home : { screen : HomeScreen },
        Chat : { screen : ChatScreen }
    },
);

export default ScreenController;