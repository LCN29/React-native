/**
 * Created by LCN on 2017/8/12 0012.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import Screen from '../utils/Screen';
import Separator from './Separator';

export default class DetailCell extends Component{
    render() {
        let icon = this.props.image && <Image style={styles.icon} source={this.props.image} />;

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={[styles.content, this.props.style]}>
                        {icon}
                        <Text style={{ fontSize: 14,color: '#222222',}}>{this.props.title}</Text>
                        <View style={{ flex: 1, backgroundColor: 'blue' }} />
                        <Text style={{fontSize: 13,color: '#999999',}} >{this.props.subtitle}</Text>
                        <Image style={styles.arrow} source={require('../images/Public/cell_arrow.png')} />
                    </View>
                    <Separator/>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});