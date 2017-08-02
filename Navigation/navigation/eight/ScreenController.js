/**
 * Created by Ape on 2017/7/30.
 */

import React from 'react';
import HomeScreen from './screen/HomeScreen';
import ChatScreen from './screen/ChatScreen';
import TestScreen from './screen/TestScreen';
import ActionScreen from './screen/ActionScreen';


import {StackNavigator} from 'react-navigation';

const ScreenController = StackNavigator(

    {
        Home : { screen : HomeScreen },
        Chat : { screen : ChatScreen },
        Test : { screen : TestScreen },
        Action : { screen : ActionScreen }
    },
);

export default ScreenController;