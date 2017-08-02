/**
 * Created by Ape on 2017/7/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {NavigationActions} from 'react-navigation';

export default class HomeScreen extends Component{

    /*
    *   每个页面总都有一个 navigation，即使是 navigator（StackNavigator,TabNavigator）也有
    *   区别是，顶层的可能state and dispatch属性，
    *
    *   navigation 属性
    *   navigate 用于跳转页面
    *   state, 页面当前的state状态和routes路由
    *   setParams 修改state里面的参数
    *   goBack 回到上一个页面
    *   dispatch 发送一个动作到路由
    * */


    static navigationOptions = {
        title : 'Home',
    };

    jumpToChat(){

        /*
         *  navigate(路由名，传递的参数，动作)
         *  参数2,3可选
         */

        const {navigate} = this.props.navigation;
        navigate('Chat',{user : '张三'});
    }

    jumpToAction(){
        const {navigate} = this.props.navigation;
        navigate('Action',{ name : '参数'});

    }

    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>HomeScreen</Text>
                <Button title="跳转到Chat页面" onPress={()=>{this.jumpToChat()}}/>
                <Button title="跳转到Action页面" onPress={()=>{this.jumpToAction()}}/>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    flex : {
        backgroundColor : '#ffeada',
        flex : 1,
        alignItems : 'center'
    },
    font : {
        color : '#000044',
        fontSize : 30,
        fontWeight : 'bold'
    }
});