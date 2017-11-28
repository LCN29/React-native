/**
 * Created by LCN on 2017/8/29 0029.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native';

import Screen from '../../util/Screen';

export default class Icon extends  Component {

    render (){
        return (
            <TouchableHighlight  onPress={()=> this.iconClik()} underlayColor='#8c8888'>
                <View style={styles.container}>
                    <Image source={this.props.source} style={styles.img}/>
                    <Text style={styles.font}>{this.props.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    iconClik(){
        this.props.iconClik();
    }
};

const styles = StyleSheet.create({
    container : {
        width : (Screen.width-20)/4,
        paddingTop : 10,
        paddingBottom : 10,
        alignItems : 'center',
    },
    img : {
        width : 40,
        height : 40,
        resizeMode : 'contain',
    },
    font : {
        fontSize : 14,
        textAlign  : 'center',
        color : '#6a6a6a',
        marginTop : 4,
    }
});
