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

export default class OrderPage extends Component {

    static navigationOptions = {
        drawerLabel : '会员购订单',
        drawerIcon : ({tintColor} )=>{
            let img = tintColor === Config.activityColor ?  require('../../img/Drawer/order_selected.png') : require('../../img/Drawer/order.png');
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