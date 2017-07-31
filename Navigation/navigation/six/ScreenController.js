/**
 * Created by Ape on 2017/7/30.
 */

import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import OneScreen from './screen/OneScreen';
import TwoScreen from './screen/TwoScreen';
import ThreeScreen from './screen/ThreeScreen';

import {TabNavigator} from 'react-navigation'



/*
* TabNavigator 和 StackNavigator一样 也有一个 screenProps 用法一样
* */


/*
*  API TabNavigator(RouteConfigs, TabNavigatorConfig)
*
*  RouteConfigs 告诉 navigator 如何映射，简单的说就是跳转到哪里和设置tab的样子(Android的图标不显示)
*
*   页面别名 : {
 *
 *                  navigationOptions: {
 *                      tabBarLabel : tab的名称
 *                      tabBarIcon  : 函数  返回图标
 *                  }
 *
 *                  其他参数和StackNavigation 一样
 *            }
*
*
*   TabNavigatorConfig
*
*   swipeEnabled : boolean 页面是否可以滑动切换
*   tabBarPostiont : 'top/bottom' tab栏的位置
*
*   tabBarComponent : 自定义tab栏
*
*   animationEnabled : boolean 变换tabs的时候是否开启动画效果(试了一下，貌似没什么区别)
*
*   lazy : boolean  是否在需要的时候才惰性加载tabs,代替预渲染(试了一下，没看出什么区别)
*
*   initialRouteName : String 一开始显示哪个
*
*   order : 字符串数组  定义了各个tab的排列顺序
*
*   paths :提供routeName到path配置的映射,重写routeConfigs里的paths设置 后面再说
*
*   backBehavior : true/none  back button是不是应该导致tab切换到初始的tab
*   如果是的话,设定initialRoute,否则就是none.默认到initialRoute的行为  (没看懂)
*   tabBarOptions :{
*
*       activeTintColor // 选中的tab的字体颜色
*       inactiveTintColor  //未选中的tab的字体颜色
*
*       activeBackgroundColor //选中的背景颜色  IOS
*       inactiveBackgroundColor //未选中的背景颜色  IOS
*       showLabel 是否显示tab 默认true
*       showIcon  //显示图标 默认false  Android
*       upperCaseLabel // 是否自动转为大写 , 默认 true, Android
*       pressColor 按下涟漪的颜色 Android >= 5.0  看不出效果，，  Android
*       pressOpacity 按下透明度的改变   Android和IOS < 5.0
*
*       scrollEnabled // tab栏是否可以滑动 Android
*       indicatorStyle //显得横线的设置  设置了 tabStyle 会失效
*
*       style  整个tab栏的样式
*       labelStyle tab文字的设置
*       tabStyle tab的设置
*       iconStyle 图标的样式
*
*
*      }
*
*   }
*
* */

const ScreenController = TabNavigator(

    {
        One : {
            screen : OneScreen,
            navigationOptions: {
                tabBarLabel : '111',
                tabBarIcon : () =>(<Image source={require('../images/home.png')} style={styles.icon} />),
            },
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
                tabBarIcon : () => (<Image source={require('../images/me.jpg')} style={styles.icon}/>),
            }
        },

    },

    {
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        /*tabBarComponent :()=><Text>6598</Text>,*/
        animationEnabled : false,
        lazy : false,
        initialRouteName : 'Two',
        order : ['Three','One','Two'],
        initialRoute :'Three',
        backBehavior : true,
        tabBarOptions : {
            activeTintColor : '#ff0000',
            inactiveTintColor : '#000000',
            upperCaseLabel : false,

            showIcon : true,

            pressColor : '#ffafad',
            scrollEnabled : false,

            indicatorStyle : {
                backgroundColor : '#ff0000'
            },

            style : {
                backgroundColor : '#cce'
            },

            tabStyle : {

            },

            labelStyle : {
                backgroundColor : '#adcaea'
            },

            iconStyle : {
                width: 10,
                height: 10,
            }
        },
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

export default ScreenController;