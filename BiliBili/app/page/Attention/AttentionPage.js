/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Config from '../../util/Config';

export default class AttentionPage extends Component {

    static navigationOptions = {
        drawerLabel : '我的关注',
        drawerIcon : ({tintColor} )=>{
            let img = tintColor === Config.activityColor ?  require('../../img/Drawer/attention_selected.png') : require('../../img/Drawer/attention.png');
            return (
                <Image source={img} style={styles.icon} />
            );
        }
    };

    render(){
        return (
            <Text>Attention</Text>
        );
    }
};

const styles = StyleSheet.create({
    icon : {
        width : 20,
        height : 20,
    }
});