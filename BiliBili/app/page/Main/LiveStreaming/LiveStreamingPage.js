/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Screen from '../../../util/Screen';
import SlidingBar from '../../../component/LiveStreaming/SlidingBar';

import data from '../../../testData/LiveStreaming';

export default class LiveStreamingPage extends Component {

    render(){
        return (
            <View style={styles.container}>
                <SlidingBar data={data.ad}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        flex :1,
        paddingLeft : 12,
        paddingRight : 12,
        backgroundColor : '#2c2c2c',
    },
});