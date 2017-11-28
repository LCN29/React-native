/**
 * Created by LCN on 2017/8/22 0022.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Button,
} from 'react-native';

export default class RankPage extends Component {

    render(){

        let {style} = this.props;
        return (
            <Animated.View style={[styles.container,style]} >
                <Text>标签页面</Text>
                <Button title='关闭标签' onPress={()=>this.props.close()}/>
            </Animated.View>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#aaaaaa',
        alignItems : 'center',
        justifyContent : 'center'
    },
    font : {
        color : '#fff',
        fontSize : 30,
    }
});

