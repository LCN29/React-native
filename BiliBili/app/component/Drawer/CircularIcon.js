/**
 * Created by LCN on 2017/8/19 0019.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default class CircularIcon extends Component {

    static defaultProps = {
        right : 15,
    };

    render(){

        const { style , source, onPress }  = this.props;
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={ [styles.container, { marginRight: this.props.right }] } >
                    <Image source={source} style={[styles.icon, style]}/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        width : 30,
        height : 30,
        borderRadius : 15, borderColor : '#fff', borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    icon : {
        width : 15,
        height : 15,
    }
});
