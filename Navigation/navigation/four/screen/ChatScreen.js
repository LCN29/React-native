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

export default class ChatScreen extends Component{

    // 不设死标题头部标题，标题可以通过参数进行改变




    /* //第一个标题
    // navigationOptions 可以为一个函数
    static navigationOptions = (({navigation})=>({
        title : `和${navigation.state.params.user}聊天中`,
    }));*/



    //第二个标题
    // headerRight : 给标题栏的右边添加一个视图,同时标题栏里面的内容可以通过参数做出改变
    static navigationOptions = (({navigation})=>{
        const {state,setParams} = navigation;
        const isInfo  = state.params.mode ==='info';
        const user = state.params.user;

        return ({
            title : isInfo ? `有${user}的信息` : `和${user}聊天中`,
            headerRight: (
                <Button
                    title={isInfo ? '读取' : '退出' }
                    onPress={()=>setParams({mode : isInfo ? 'none' : 'info'})} />
            ),
        });
    });

    render(){

        const { params } = this.props.navigation.state;
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>ChatScreen</Text>
                <Text style={styles.font}>{params.user}</Text>
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