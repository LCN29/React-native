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

    static navigationOptions = {
        title : 'Home',
    };

    // 此处的index 对应了 ChatScreen 里面的标题几， 阅读的时候，请将index的值改为对应的标题
    //ChatScreen 也应该将不是对应的标题注释
    jumpScreen(index){
        const {navigate} = this.props.navigation;

        switch (index){
            case 1 :
                navigate('Chat',{user : '张三'});
                break;

            case 2 :
                navigate('Chat',{ user : '张三', mode : 'info'});
                break;
        }
    }

    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>HomeScreen</Text>
                <Button title="跳转到其他页面" onPress={()=>{this.jumpScreen(2)}}/>
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