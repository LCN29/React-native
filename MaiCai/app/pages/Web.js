/**
 * Created by LCN on 2017/9/27 0027.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import Screen from '../utils/Screen';

export default class Web extends Component{

    render(){
        let params = this.props.navigation.state.params;
        let url = params.url || 'www.baidu.com';
        return (
            <WebView
                source={{ uri : url}}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : Screen.width,
        height : Screen.height-20,
    }
});