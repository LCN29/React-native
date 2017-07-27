/**
 * Created by Ape on 2017/7/23.
 */

import React , {Component}from 'react';
import {
    View,
    Image,
    StyleSheet,
}from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../../utils/Util';

export default class NavHeader extends Component{

    render(){
        return (
            <View style={styles.nav}>
                <Icon name="ios-settings" size={35} color="#cecece" />
                <Image style={styles.title} source={require('./img/title.jpg')}/>
                <Icon name="ios-chatbubbles" size={35} color="#cecece" />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    nav : {
        width : Util.size.width,
        height:60,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingTop:20, paddingBottom:5, paddingLeft:15, paddingRight:15,
        borderBottomWidth : Util.pixel,
        borderBottomColor:"#ebebeb",
        backgroundColor:"#fff",
    },
    title : {
        width:91,
        height:39
    },
});
