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

export default class CachePage extends Component {

    static navigationOptions = {
        drawerLabel : '离线缓存',
        drawerIcon : ({tintColor} )=>{
            let img = tintColor === Config.activityColor ?  require('../../img/Drawer/cache_selected.png') : require('../../img/Drawer/cache.png');
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