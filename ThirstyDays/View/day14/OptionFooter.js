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


export default class OptionFooter extends Component{

    render(){
        return(
            <View style={styles.actionContainer}>
                <View style={styles.smallAction}>
                    <Icon name="ios-refresh" color="#fdcd6d" size={30}/>
                </View>

                <View style={styles.largeAction}>
                    <Icon name="md-close" color="#fc6c6e" size={45}/>
                </View>

                <View style={styles.largeAction}>
                    <Icon name="md-heart" color="#52cb93" size={45}/>
                </View>

                <View style={styles.smallAction}>
                    <Icon name="ios-pin" color="#318ff6" size={30}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    actionContainer:{
        paddingLeft:7.5,
        paddingRight:7.5,
        flexDirection:"row",
        justifyContent : 'center',
    },
    smallAction:{
        width: 70,
        height : 70,
        borderRadius:35,
        borderColor:"#f5f5f5",
        borderWidth:10,
        alignItems:"center",
        justifyContent:"center",
    },
    largeAction:{
        width : 100,
        height : 100,
        borderColor:"#f5f5f5",
        borderWidth:10,
        borderRadius:55,
        alignItems:"center",
        justifyContent:"center",
    },
});