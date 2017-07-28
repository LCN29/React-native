/**
 * Created by LCN on 2017/6/26 0026.
 */

import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import BoxItem from "./BoxItem";

export default class BoxModel extends Component {

    render() {
        return (
            <View style={[BoxStyles.marginBox]}>
                <View style={[BoxStyles.box]}>
{/*top 头部*/}
                    <View style={[BoxStyles.top,BoxStyles.bgred]}>
                        <Text style={[BoxStyles.fontColor]}>top</Text>
                    </View>
{/*  middle  中间  由  左右2部分组成 ，中间 留空*/}
                    <View style={[BoxStyles.borderBox]}>
                        <View style={[BoxStyles.size,BoxStyles.bgred]}>
                            <Text style={[BoxStyles.fontColor]}>left</Text>
                        </View>
                        <View style={[BoxStyles.size,BoxStyles.bgred]}>
                            <Text style={[BoxStyles.fontColor]}>right</Text>
                        </View>
                    </View>
{/*bottom  底部*/}
                    <View style={[BoxStyles.top,BoxStyles.bgred]}>
                        <Text style={[BoxStyles.fontColor]} >bottom</Text>
                    </View>
{/*  margin   左上角*/}
                    <View style={[BoxStyles.margin]}>
                        <Text>margin</Text>
                    </View>
                </View>

                <BoxItem name="test" height ={100}/>
            </View>
        );
    }
};

const BoxStyles = StyleSheet.create({

    marginBox : {
        position : 'absolute',
        top: 100,
        padding:7,
        backgroundColor : '#ef0aef'
    },
    box : {
        flexDirection : 'column',
        flex : 1,
        position : 'relative',
        width : 300,
        height : 300,
    },
    top : {
        height: 50,
        justifyContent : 'center',
        alignItems : 'center',
    },
    fontColor : {
        color : '#fdc72f',
    },
    bgred :{
      backgroundColor : '#5ac5ac'
    },
    borderBox : {
        /*当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%  */
        flex : 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
     size : {
        width : 50,
        justifyContent : 'center',
        alignItems : 'center',
    },
    margin : {
        top : 10,
        left : 10,
        paddingRight: 3,
        paddingBottom : 3,
        position : 'absolute',
        backgroundColor : '#fdc72f'
    }
});


