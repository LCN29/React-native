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

    static navigationOptions = {
        title : 'Chat',
    };


    change(){
        /*
         * setParams 由于修改这个界面的state里面的params的值
         */
        const {setParams} = this.props.navigation;
        setParams({user : '明天'});
    }

    jumpBack(){

        /*
        *   goBack 回到上一个页面
        */
        const {goBack} = this.props.navigation;
        goBack();
    }

    render(){

        /*
        * state里面有三个参数
        *
        * params ，上面页面传递过来的参数的集合
        * routeName 这个界面的路由
        * key, 唯一的一个值，用于区分路由
        * */
        const {state} = this.props.navigation;

        return (
            <View style={styles.flex}>
                <Text style={styles.font}>ChatScreen</Text>
                <Text style={styles.font}>传递的参数:{state.params.user}</Text>
                <Text style={styles.font}>这个界面的路由名:{state.routeName}</Text>
                <Text style={styles.font}>这个界面的key:{state.key}</Text>
                <Button title="修改params的值" onPress={()=>{this.change()}}/>
                <Button title="退回去" onPress={()=>{this.jumpBack()}}/>
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