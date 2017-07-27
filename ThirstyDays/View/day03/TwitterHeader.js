/**
 * Created by Ape on 2017/7/18.
 */

import React,{ Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Util from '../../utils/Util';
import Icon from "react-native-vector-icons/Ionicons";

export default class TwitterFlow extends Component{

    render (){
        return (
            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name="ios-person-add" size={23} style={{color:'#1b95e0',paddingLeft:10,flex:1}}/>
                </View>

                <View style={[styles.navItem,{alignItems : 'center'}]}>
                    <Icon name="logo-twitter" size={27} style={{color:'#1b95e0',flex:1}}/>
                </View>

                <View style={[styles.navRight,{flex : 1}]}>
                    <Icon name="ios-search" size={23} style={{color:'#1b95e0',width:30}}/>
                    <Icon name="ios-create-outline" size={23} style={{color:'#1b95e0',width:30}}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    nav:{
        flexDirection : 'row',
        borderBottomColor : '#ddd',
        borderBottomWidth : Util.pixel,
        backgroundColor:"#fff",
        paddingBottom:5,
        paddingTop : 8
    },
    navItem : {
        flex :1,
    },
    navRight: {
        flexDirection: 'row',
        justifyContent : 'flex-end',
    }

});
