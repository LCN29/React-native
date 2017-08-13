/**
 * Created by LCN on 2017/8/9 0009.
 */

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import Screen from '../../utils/Screen';

export default class HomeMenuItem extends Component{

    render(){
        return (
            <TouchableOpacity onPress={()=>{this.props.onPress()}} style={styles.container}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon}/>
                <Text style={styles.text} >{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        width: Screen.width / 5,
        height: Screen.width / 5,
    },
    icon : {
        width: Screen.width / 9,
        height: Screen.width / 9,
        margin: 5,
    },
    text : {
        fontSize: 14,
        color: '#222222',
    }
});