/**
 * Created by Ape on 2017/7/15.
 */

import React,{ Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


import Util from '../../utils/Util';

export default class WatchFace extends Component{

    static propTypes = {
        sectionTime : React.PropTypes.string.isRequired,
        totalTime: React.PropTypes.string.isRequired,
    };

    render (){
        return (
            <View style={styles.watchFaceContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        );
    }
};

const styles =StyleSheet.create({
    watchFaceContainer : {
        width : Util.size.width,
        height : 170,
        paddingTop : 50, paddingRight : 30, paddingLeft : 30, paddingBottom : 40,
        backgroundColor: '#fff',
        borderBottomWidth : 1, borderBottomColor : '#ddd',
    },
    sectionTime : {
        fontSize : 20,
        fontWeight : '100',
        color : 'grey',
        position : 'absolute',
        top : 30,
        right : 30,
    },
    totalTime:{
        color: '#222',
        paddingLeft:20,
        fontWeight: '100',
        fontSize: 60,
        textAlign : 'right'
    }
});
