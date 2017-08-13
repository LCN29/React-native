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

import Colors from '../../utils/Colors';
import Screen from '../../utils/Screen';

export default class HomeGridItem extends Component{

    render(){
        let info = this.props.info;
        let title = info.maintitle;
        let color = info.typeface_color;
        let subtitle = info.deputytitle;

        // replace(替换，用120.0代替w.h);
        let imageUrl = info.imageurl.replace('w.h', '120.0');

        return (
            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>

                <View>
                    <Text style={[styles.text,{color: color, marginBottom: 10 }]}>{title}</Text>
                    <Text style={styles.text}>{subtitle}</Text>
                </View>

                <Image source={{uri :imageUrl}} style={styles.icon}/>
            </TouchableOpacity>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width : Screen.width/2-Screen.onePixel,
        height : Screen.height/5,
        borderBottomWidth: Screen.onePixel,
        borderRightWidth: Screen.onePixel,
        borderColor : Colors.border,
        backgroundColor : '#ffffff'
    },
    text : {
        fontSize: 14,
        color: '#222222',
    },
    icon: {
        width: Screen.width / 5,
        height: Screen.width / 5,
    }

});
