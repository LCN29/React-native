/**
 * Created by Ape on 2017/7/30.
 */

import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

import OneScreen from './screen/OneScreen';
import TwoScreen from './screen/TwoScreen';
import ThreeScreen from './screen/ThreeScreen';

import {TabNavigator} from 'react-navigation'

const ScreenController = TabNavigator(

    //TabNavigator 里面有2个json参数，

    // 参数1, 用于页面的控制，

    {
        /*
         navigationOptions: { tabBarLabel : tab的名称，tabBarIcon : 图标}
         注 2个在Ios 和 Android 上显示有区别的， Android的图标无法显示 ios可以
        */
        One : {
            screen : OneScreen,
            navigationOptions: {
                tabBarLabel : '111',
                tabBarIcon : () =>(<Image source={require('../images/home.png')} style={styles.icon} />),
            }
        },

        Two : {
            screen : TwoScreen,
            tabBarLabel : '222',
            tabBarIcon : () =>(<Image source={require('../images/smile.png')} style={styles.icon} />),
        },

        Three : {
            screen : ThreeScreen,
            navigationOptions: {
                tabBarLabel : '333',
                tabBarIcon : () => (<Image source={require('../images/me.jpg')} style={styles.icon}/>
                ),
            }
        },
    },



    //参数2，用于导航条等的设置 具体参数看官方文档
    {
        swipeEnabled: false, // 是否可以左右滑动切换tab
        tabBarPosition: 'bottom',  //tab栏的位置
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

export default ScreenController;