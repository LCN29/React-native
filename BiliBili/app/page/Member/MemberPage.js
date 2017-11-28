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

export default class MemberPage extends Component {

    static navigationOptions = {
        drawerLabel : '我的大会员',
        drawerIcon : ({tintColor} )=>{
            let img = tintColor === Config.activityColor ?  require('../../img/Drawer/member_selected.png') : require('../../img/Drawer/member.png');
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