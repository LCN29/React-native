/**
 * Created by LCN on 2017/8/10 0010.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

export default class SpacingView extends Component{

    render(){
        return (
            <View style={styles.container}/>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: Colors.background,
    },
});