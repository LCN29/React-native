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

    jumpScreen(){

        const {navigate} = this.props.navigation;
        navigate('Chat',{user : '张三',age : 100});
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