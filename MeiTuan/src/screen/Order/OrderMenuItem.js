/**
 * Created by LCN on 2017/8/12 0012.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Screen from '../../utils/Screen';

export default class OrderMenuItem extends Component{
    render(){
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Text style={styles.text}> {this.props.title}</Text>
            </TouchableOpacity>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Screen.width / 4,
        height: Screen.width / 5,
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    },
    text : {
        fontSize: 14,
        color: '#222222',
    },
});
