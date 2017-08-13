/**
 * Created by LCN on 2017/8/10 0010.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';

import Colors from '../../utils/Colors';
import Screen from '../../utils/Screen';

import HomeGridItem from './HomeGridItem';

export default class HomeGridView extends Component{

    static defaultProps = {
        infos: []
    };

    onGridSelected(index){

        StatusBar.setBarStyle('default', false);

        let discount = this.props.infos[index];
        if(discount.type ===1){
            // 重新调用父级的onPress方法，在这里 navigate无法起作用，无法起到跳转作用
            this.props.onPress(discount);
        }
    }

    render(){
        return (
            <View style={styles.container}>
                {
                    this.props.infos.map((info,index)=>(
                        <HomeGridItem
                            info = {info}
                            key = {index}
                            onPress={()=>this.onGridSelected(index)}
                        />
                    ))
                }
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: Screen.onePixel,
        borderLeftWidth: Screen.onePixel,
        borderColor: Colors.border
    },
});