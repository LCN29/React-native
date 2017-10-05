/**
 * Created by LCN on 2017/9/30 0030.
 */

import React,{ Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Screen from '../../utils/Screen';


export default class DetailHeader extends Component{

    render(){

        const navigate = this.props.navigation.navigation;

        return(
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={1}
                    focusedOpacity={1}
                    onPress={() => navigate.goBack(null)}
                >
                    <Icon style={styles.headerBackIcon} name="ios-arrow-back-outline" size={24}/>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={1}
                    focusedOpacity={1}
                    onPress={() => {alert("点击了分享")}}
                >
                    <Icon style={styles.headerBackIcon} name="md-share" size={18}/>
                </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container :{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
    },
    headerBackIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.9)',
        textAlignVertical: 'center',
    }
});