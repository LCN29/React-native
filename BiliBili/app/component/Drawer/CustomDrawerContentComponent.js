/**
 * Created by LCN on 2017/8/18 0018.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import Config from '../../util/Config';

import DrawerHeader from './DrawerHeader';
import DrawerFooter from './DrawerFooter';

import { DrawerItems } from 'react-navigation';

import Screen from '../../util/Screen';


export default class CustomDrawerContentComponent extends Component {

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <DrawerHeader/>
                    <DrawerItems { ...this.props } />
                </ScrollView>
                <DrawerFooter width={this.props.width} />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container : {
        height : Screen.height,
        position : 'relative',
        paddingBottom : 70,
    },
    scroll : {
        backgroundColor : Config.themeColor,
    }
});
