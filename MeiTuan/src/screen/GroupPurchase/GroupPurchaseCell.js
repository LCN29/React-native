/**
 * Created by LCN on 2017/8/10 0010.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import Screen from '../../utils/Screen';
import Colors from '../../utils/Colors';

export default class GroupPurchaseCell extends Component{

    render(){

        let { info } = this.props;
        let imageUrl = info.imageUrl.replace('w.h', '160.0');

        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress(info)}>
                <Image style={styles.icon} source={{uri : imageUrl}}/>

                <View style={styles.fontWraper}>
                    <Text style={styles.titleFont}>{info.title}</Text>
                    <Text numberOfLines={1} style={styles.subtitleFont} >{ info.subtitle}</Text>
                    <Text style={styles.priceFont}>{ info.price }元</Text>
                </View>

            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: Screen.onePixel,
        borderColor: Colors.border,
        backgroundColor: 'white',
    },
    fontWraper : {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    titleFont : {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    subtitleFont : {
        fontSize: 13,
        color: '#777777',
        marginTop: 8
    },
    priceFont : {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.theme,
        flex: 1,
        justifyContent: 'flex-end',
    },

});