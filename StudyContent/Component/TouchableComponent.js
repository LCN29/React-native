/**
 * Created by Ape on 2017/7/2.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

/*
*   TouchableHighlight          点击高亮
*   TouchableOpacity            点击透明度变化
*   TouchableWithoutFeedback   点击无反馈
* */

/*  TouchableHighlight
*   underlayColor = '#fadaff'  按下后显示什么颜色 ，貌似需要一个backgroundColor的属性才能看到效果
*   onshowunderlay  背景开始变化是触发事件
*   onHideUnderlay  背景开始消失出发的事件
*
*   TouchableOpacity
*   activeOpacity={0.2}  按下透明度变化，
*
*
*   TouchableWithoutFeedback
*   官方不推荐使用，除了特殊情况
*
*   onLongPress  长按事件
*   onPressIn  触摸开始
*   onPressOut  触摸结束
*
* */

export default class TouchableComponent extends Component {

    show(text){
        alert(text);
    };

    render () {
        return (
            <View>
                <TouchableHighlight
                    style={{backgroundColor : '#eaefaf'}}
                    onPress={()=>{
                        this.show("你干嘛点我");
                    }}

                    onshowunderlay={()=>{
                        this.show("背景颜色出现中");
                    }}

                    onHideUnderlay={()=>{
                        this.show("背景颜色消失中，，");
                    }}
                    underlayColor="#ff0000"
                >
                    <Text>点击</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    onPress={()=>{
                        this.show("你竟然又点了");
                    }}
                    activeOpacity={0.2}
                >
                    <Text>不能再点了</Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback

                    onLongPress={()=>{
                        this.show("长按事件");
                    }}
                    onPress={()=>{
                        this.show("我在哪里？");
                    }}
                    onPressOut={()=>{
                        this.show("点击结束");
                    }}

                    onPressIn={()=>{
                        this.show("点击开始");
                    }}
                >
                    <Text>随你了</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
};
