/**
 * Created by LCN on 2017/9/30 0030.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class CartHeader extends Component {

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.TitleContainer}>
                    <Text style={styles.title}>购物车（2）</Text>
                </View>
                <View style={styles.actionContainer}>
                    <Text style={[styles.actionDelete, styles.actionDeleteActive]}>删除</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
    },
    title: {
        fontSize: 16,
        color: '#333',
        fontWeight: '400'
    },
    actionContainer: {
        position: 'absolute',
        right: 10
    },
    actionDelete: {
        color: '#999',
        fontSize: 14
    },
    actionDeleteActive: {
        color: '#3cb963'
    }
});
