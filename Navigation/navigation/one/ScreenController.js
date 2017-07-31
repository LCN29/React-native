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

import {StackNavigator} from 'react-navigation';

const ScreenController = StackNavigator(

    //StackNavigator 里面有2个json参数，



    // 参数1, 用于页面的控制，
    {
        /*  页面的别名 ： { screen(key值，不能改) ： 对应的页面}*/
        Home : { screen : HomeScreen },
        Chat : { screen : ChatScreen }
    },



    //参数2，用于导航条等的设置 具体参数看官方文档
    {
        // 给导航栏的右边添加一个视图
        navigationOptions: {
            headerRight: <Text>右边Header</Text>,
        },

    }
);


//导出去的这个变量，也是一个页面
// 犹如 android 中的 activity ，screen 就是里面的fragment ，这个变量也可以作为一个页面来用
export default ScreenController;