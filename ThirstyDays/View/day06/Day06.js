/**
 * Created by Ape on 2017/7/19.
 */


import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';


import Util from '../../utils/Util';

import BaseBall from './BaseBall'

export default class Day05 extends Component{

    render(){

        let img = require('./img/agrass.png');

        return (

            /*
             *  假设 父级传过来的 props 有 title， name， sex, age 属性
             * {title, ...other} = this.props;       从props  中提取 title的值，
             * <View {...other}/>  父级传过来的字段中没有title了 ，只有 name,sex,age
             * */

            <View style={styles.container}>
                <Image source={img} style={styles.bg}/>
                <BaseBall/>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    container:{
        height:Util.size.height,
        width: Util.size.width,
        backgroundColor : 'black'
    },
    bg:{
        flex : 1,
        resizeMode:"stretch",
        position:"absolute"
    },

});