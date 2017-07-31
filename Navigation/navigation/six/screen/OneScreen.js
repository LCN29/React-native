/**
 * Created by Ape on 2017/7/1.
 */

import React, { Component } from 'react';
import {
    Text,
} from 'react-native';


/*
*   tabBarVisible : tab栏是否可见 默认true，
*   tabBarLabel tab文字
*   tabBarIcon  图标
*   title : 标题
* */
export default class OneScreen extends Component{

    static navigationOptions = {
        title : '标题',
        tabBarLabel : '13',
        tabBarIcon : null,
        tabBarVisible : false,
    };

    render (){
        return (
            <Text>111</Text>
        );
    }
}
