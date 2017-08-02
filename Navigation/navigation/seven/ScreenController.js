/**
 * Created by Ape on 2017/7/30.
 */

import React from 'react';
import {
    Text,
    ScrollView,
} from 'react-native';

import HomeScreen from './screen/HomeScreen';
import ChatScreen from './screen/ChatScreen';


import {DrawerNavigator} from 'react-navigation';


/*
 * DrawerNavigator 和 StackNavigator一样 也有一个 screenProps 用法一样
 * */



/*
*   API DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)
*
*   RouteConfig 和 StackNavigator 类似
*
*   DrawerNavigatorConfig
*
*   drawerWidth  抽屉的宽度
*   drawerPosition 抽屉的位置 默认left
*   contentComponent 参数 函数返回视图 自定义抽屉的样式 系统自带的抽屉是不能滚动的，如果需要滚动，可以自定义
*   contentOptions : {
*       initialRouteName 初始的视图
*       order 数组， 视图的顺序
*       backBehavior : 和TabNavigation 一样
*       paths : 后面再说
*
*       contentOptions : {
*           抽屉里面的item的样式设定
*
*           items ：数组，页面的数组集合，能被改变和覆盖  （看不出有什么效果）
*           activeTintColor 选中的item的文字颜色
*           activeBackgroundColor 选中item 的背景
            inactiveBackgroundColor 未选中的背景
            inactiveTintColor  未选中的item的文字颜色
            style 抽屉的样式
            labelStyle item中文字的设置

            onItemPress item点击触发事件，试不出效果
*       }
*   }
*
* */

const ScreenController = DrawerNavigator(

    {
        Home : { screen : HomeScreen },
        Chat : { screen : ChatScreen }
    },

    {
        drawerWidth : 200,
        drawerPosition : 'right',
        /*contentComponent : ()=>{
            return (
                <ScrollView>
                    <Text style={{height:200,backgroundColor : '#ff0'}}>1</Text>
                    <Text style={{height:200,backgroundColor : '#ff0000'}}>1</Text>
                    <Text style={{height:200,backgroundColor : '#eeaff0'}}>1</Text>
                </ScrollView>
            );
        },*/

        initialRouteName : 'Home',
        order : ['Chat','Home'],

        contentOptions : {
            items : ['Home','Chat','Welcome'],
            activeItemKey : 'Chat',
            activeTintColor : '#ff0',
            activeBackgroundColor : '#faeafa',
            inactiveBackgroundColor : '#000000',
            inactiveTintColor : '#eafaac',
            style : {
                backgroundColor : '#ff0000',
                marginTop : 10,
                height : 400,
            },
            labelStyle : {
              color : '#eaf',
                backgroundColor: '#afeac5'
            },

            onItemPress : (route)=>{alert(route)}
        }

    },



);

export default ScreenController;