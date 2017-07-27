/**
 * Created by Ape on 2017/7/25.
 */


import React,{ Component } from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';

import Util from '../../utils/Util';

export default class HomePage extends Component{

    render(){
        return (
            <Text style={styles.content}>时下流行</Text>
        );
    }
}
const styles = StyleSheet.create({
    content : {
        width : Util.size.width,
        height : Util.size.height,
        backgroundColor : '#adfaea',
        textAlign : 'center',
        paddingTop : 100,
        color : "#ff0000",
        fontSize : 26,
    }
});