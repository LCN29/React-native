/**
 * Created by LCN on 2017/8/12 0012.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../../utils/Colors';
import Screen from '../../utils/Screen';

export default class NearbyCell extends Component {
    render() {
        let { info } = this.props;
        let imageUrl = info.imageUrl.replace('w.h', '160.0');
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
                <Image source={{ uri: imageUrl }} style={styles.icon} />
                <View style={styles.rightContainer}>
                    <Text style={{fontSize: 15,fontWeight: 'bold',color: '#222222',}}>{info.title}</Text>
                    <Text style={{fontSize: 13,color: '#777777',}}>{info.subtitle}</Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={{fontSize: 15,fontWeight: 'bold',color: Colors.theme,}}>{info.price}元</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: Screen.onePixel,
        borderColor: Colors.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },

});
