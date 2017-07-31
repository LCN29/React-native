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

 /*
 *  API  StackNavigator(Routeconfigs,StackNavigatorConfig)
 *
 *  Routeconfigs  告诉 navigator 如何映射，简单的说就是跳转到哪里
 *  //格式如下
 *
 *  {
 *      页面别名 : {
 *                  screen :  一个ReactNative 控件 也就是我们要显示的页面
 *
 *                  path : 可选的，当深度链接的时候需要用到，后面再说
 *
 *                  navigationOptions: {
 *                      title : '父级进行了改变'
 *                      //同每个 页面里面的 navigationOptions 一样，通过这个可以设置页面的标题栏，页面中设置有相同的属性，可以覆盖页面中的
 *                  }
 *
 *                }
 *  }
 *
 *
 *
 *  StackNavigatorConfig 用于控制器的，既ScreenController 这个的 用于设置一些全局的变量
 *
 *  {
 *      initialRouteName : '页面名'  // 第一次显示哪个页面,没写时，按照上面screen的声明顺序
 *      initialRouteParams : { key : value} // 页面需要参数，和没有页面传递时,可以通过这个进行设定
 *      navigationOptions : { key : value} // 参数和页面中的navigationOptions一样，当页面中的某个key
 *      ，没设时，这个设了，可以显示这个，页面设置了，这个也设置了，显示页面设置的
 *
 *      mode : '模式'// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
 *
 *      headerMode : '模式' // 标题栏显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
 *
 *      cardStyle : { 样式 : 值} //通过这个给每个页面设置一些默认的样式，不会覆盖子页面的
 *
 *      onTransitionStart : 函数  // 页面切换时触发
 *
 *      onTransitionEnd : 函数 // 页面切换结束时触发
 *  }
 */

const ScreenController = StackNavigator(

    {
        Home : { screen : HomeScreen , navigationOptions : { title : '父级进行了改变'}},
        Chat : { screen : ChatScreen }
    },

    {
        /*initialRouteName : 'Chat',
        initialRouteParams: { user: '小明'},*/

        navigationOptions:{
            title : '我也进行了改变',
            headerRight: <Text>右边Header</Text>
        },

        mode : 'card',
        headerMode : 'screen',

        cardStyle : {
            backgroundColor : '#ff0'
        },

        onTransitionStart : ()=>{console.log('切换开始')},

        onTransitionEnd : ()=>{console.log('切换结束')},

    }

);

export default ScreenController;