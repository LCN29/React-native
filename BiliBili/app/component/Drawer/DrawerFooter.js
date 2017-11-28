/**
 * Created by LCN on 2017/8/18 0018.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Config from '../../util/Config';
import Screen from '../../util/Screen';

import CircularIcon from './CircularIcon';

export default class DrawerFooter extends Component {

    render(){
        return (
            <View style={[styles.container]}>
                <View style={styles.item}>
                    <CircularIcon source={require('../../img/Drawer/gear.png')} right={5}  onPress={()=>{alert('点击了设置')}}/>
                    <Text style={styles.font}>设置</Text>
                </View>
                <View style={styles.item}>
                    <CircularIcon source={require('../../img/Drawer/windmill.png')} right={5}  onPress={()=>{alert('点击了主题')}}/>
                    <Text style={styles.font}>主题</Text>
                </View>

                <View style={styles.item}>
                    <CircularIcon source={require('../../img/Drawer/sun.png')} right={5}  onPress={()=>{alert('点击了夜间')}}/>
                    <Text style={styles.font}>夜间</Text>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container : {
        height : 70,
        backgroundColor : Config.themeColor,
        position : 'absolute',
        bottom : 10,
        width : Screen.drawerWidth,
        flexDirection : 'row',
    },
    item : {
        flexDirection: 'row',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    font : {
        color : '#a4a4a4'
    }
});