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