/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Config from '../../util/Config';

export default class HistoryPage extends Component {

    static navigationOptions = {
        drawerLabel : '历史记录',
        drawerIcon : ({tintColor} )=>{
            let img = tintColor === Config.activityColor ?  require('../../img/Drawer/history_selected.png') : require('../../img/Drawer/history.png');
            return (
                <Image source={img} style={styles.icon} />
            );
        }
    };

    render(){
        return (
            <Text>CachePage</Text>
        );
    }
};

const styles = StyleSheet.create({
    icon : {
        width : 20,
        height : 20,
    }
});