/**
 * Created by Ape on 2017/7/25.
 */

import React,{ Component } from 'react';
import {
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import Util from '../../utils/Util';

export default class HomePage extends Component{

    render(){
        return (
            <ScrollView>
                <Text style={styles.content}>首页</Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    content : {
        width : Util.size.width,
        height : Util.size.height*1.2,
        backgroundColor : '#ff0',
        textAlign : 'center',
        paddingTop : 100,
        color : "#ff0000",
        fontSize : 26,
    }
});
