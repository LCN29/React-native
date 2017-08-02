/**
 * Created by Ape on 2017/7/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ChatScreen extends Component{

    static navigationOptions = {
        drawerLabel: 'Chat',
        drawerIcon: ()=><Image source={require('../../images/smile.png')} style={styles.icon}/>
    };

    render(){

        return (
            <View style={styles.flex}>
                <Text style={styles.font}>ChatScreen</Text>
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
    },
    icon : {
        width : 24,
        height : 24,
    }
});