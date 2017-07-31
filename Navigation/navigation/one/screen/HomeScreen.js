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

export default class HomeScreen extends Component{

    // 设置默认标题, 父级没有传过来标题时，显示这个
    static navigationOptions = {
        title : 'Home',
    };

    jumpScreen(){

        // 页面的跳转需要从父级中获取到这个参数
        const {navigate} = this.props.navigation;

        // 跳转，参数1 想要跳转的页面， 参数2 json, 传递的参数
        navigate('Chat',{user : '张三'});
    }

    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>HomeScreen</Text>
                <Button title="跳转到其他页面" onPress={()=>{this.jumpScreen()}}/>
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