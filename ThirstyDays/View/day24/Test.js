/**
 * Created by Ape on 2017/7/25.
 */


import React , {Component}from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomePage from "./HomePage";
import MinePage from "./MinePage";
import PopularPage from "./PopularPage";
import SubscribePage from "./SubscribePage";

import TestTabBar from './TestTabBar';


/* 安装  npm install react-native-scrollable-tab-view --save */

export default class Test extends Component{


    /*
    *  1 被<ScrollableTabView  抱起来的元素，就是显示的tab和页面, 一个tabLabel 为tab 的名字
    *
    *  2 属性 renderTabBar 默认值为 DefaultTabBar  全部tab 都显示在屏幕上 ，平均分配
     *                              ScrollableTabBar  Tab可以超过屏幕范围，滚动可以显示
     *                              TabBar  可以自定义
     *  3 tabBarPositon : 导航条的位置
     *    top : 默认值 顶部  overlayTop : 顶部，悬浮于内容之上，既本身是透明的，可以看到下面的内容
     *    bottom : 对应
     *
     *  4 onChangeTab  tab切换完触发，返回一个object对象 ，里面有 i，切换到哪个tab(从0开始) ref : 切换到的tab对象
     *
     *  5 onScroll 滑动时 触发 ,  返回一个Float的参数  范围 [0， tab数量-1]
     *
     *  6， locked 是否可以拖动切换 默认值 false 表示可以 ，true 不可以
     *
     *  7   initialPage  初始被选中的tab(从0开始)
     *
     *  8  tabBarUnderlineStyle  选中的tab下面线的样式
     *
     *  9 tabBarBackgroundColor  tab的背景颜色
     *
     *  10 tabBarActiveTextColor  选中tab中字体的颜色
     *
     *  11 tabBarInactiveTextColor  未选中的字体的颜色
     *
     *  12 abBarTextStyle  Tab文字的样式
     *
     *  13 scrollWithoutAnimation 切换时 tab 是否有动画
    * */

    constructor(){
        super();
        this.state = {
            tabNames: ['Tab1', 'Tab2', 'Tab3', 'Tab4'],
            tabIconNames: ['ios-paper', 'ios-albums', 'ios-paper-plane', 'ios-person-add'],
        };
    }

    render(){
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;

       return (
            <View style={{flex : 1, backgroundColor : '#ff0'}}>
                <ScrollableTabView
                    renderTabBar={() => <TestTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                    tabBarPosition = "overlayBottom"
                    onChangeTab={(obj)=> console.log(obj.i)}
                    onScroll = { (postion) => console.log(postion) }
                    locked = {false}
                    initialPage={3}
                    tabBarUnderlineStyle={{backgroundColor : '#ff0000'}}
                    tabBarBackgroundColor="#ff0000"
                    tabBarActiveTextColor = '#fff'
                    tabBarInactiveTextColor = '#000'
                    abBarTextStyle={{fontSize : 20,}}
                    scrollWithoutAnimation = {true}
                >
                    <HomePage tabLabel='Tab1'/>
                    <MinePage tabLabel='Tab2'/>
                    <PopularPage tabLabel='Tab3'/>
                    <SubscribePage tabLabel='Tab4'/>
                    <Text tabLabel='Tab5'/>
                    <Text tabLabel='Tab6'/>
                </ScrollableTabView>
            </View>
       );
    }

    changeEvent(obj){
        alert(obj.i);
    }

}