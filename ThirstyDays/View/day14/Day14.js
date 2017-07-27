/**
 * Created by Ape on 2017/7/22.
 */


import React , {Component}from 'react';
import {
    View,
    StyleSheet,
}from 'react-native';

import Util from '../../utils/Util';

/*
*   位置没调好，可以看出 一些瑕疵
* */

import Cards from "./Cards";
import NavHeader from "./NavHeader";
import OptionFooter from "./OptionFooter";

export default class Day14 extends Component{

    render(){
        return (
            <View style={styles.container}>
                <NavHeader/>
                <Cards/>
                <OptionFooter/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        width : Util.size.width,
        height : Util.size.height,
    }
});