/**
 * Created by LCN on 2017/6/26 0026.
 */

import React,{ Component } from "react";
import {
    Text,
    View,
    StyleSheet,
}from 'react-native';

 // 此空间用于 BoxModel的 子项的， 但是高 需要有父级传过来， 不知道怎么修改
export default class BoxItem extends Component{

    render(){
        return (
            <View style={BoxStyles.bgred}>
                <Text style={BoxStyles.fontColor}>{this.props.name}</Text>
            </View>
        );
    }
};

const BoxStyles = StyleSheet.create({
    fontColor : {
        color : '#fdc72f',
    },
    bgred :{
        backgroundColor : '#5ac5ac',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 10,
    },
});
