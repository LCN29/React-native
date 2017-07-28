/**
 * Created by LCN on 2017/6/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
} from 'react-native';

export default class ViewComponent extends Component {

    /*
        View  相当于网页中的div,
        默认 没有宽，高，  当有内容是，高等于内容， 宽等于父级的宽
        默认 子控件 竖直分布  可通过 flexDirection : 'row', 变为水平
    */

    /*
     *   引用多个 styles 的样式 时  可以 style= {[style.box1, style.bo2]}
     *   style = { [style.box1,{width : 100 }]}
     *
    */

    render(){
        return (
            <View style ={styles.container}>
                <View style={[styles.item, styles.center]}>
                    <Text style={styles.font}>酒店</Text>
                </View>
                <View style={[styles.item, styles.lineLeft]} >
                    <View style={[styles.center, styles.lineCenter]}>
                        <Text style={styles.font}>海外酒店</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.font}>特惠酒店</Text>
                    </View>
                </View>
                <View style={[styles.item, styles.lineLeft]}>
                    <View style={[styles.center, styles.lineCenter]}>
                        <Text style={styles.font}>团购</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.font}>客栈*公寓</Text>
                    </View>
                </View>
            </View>
        );
    }
};

/*
*   flex : 数字  相当于权重
*   如 item  他的父级 container 指定了 flexDirection 为 水平方向
*   所以  3个 item  的宽度为 父级的 1/3
*   而  container 没有 指定的 父级方向 ，直接占满 父级 既整个屏幕
* */
const  styles = StyleSheet.create({
    container : {
        marginTop : 25,
        marginLeft : 5,
        marginRight : 5,
        height : 84 ,
        flexDirection : 'row',
        borderRadius : 5 ,
        padding :2,
        backgroundColor : '#ff0067'
    },
    item : {
        flex : 1,
        height : 80
    },
    center : {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
    },
    font : {
        color : '#fff',
        fontSize :16,
        fontWeight : 'bold'
    },
    /*
    * PixelRatio.get()  获取到高清设备的像素比， 1、 PixelRation.get() 最小线宽
    * */
    lineLeft : {
        borderLeftWidth : 1/PixelRatio.get(),
        borderColor : '#fff'
    },
    lineCenter : {
        borderBottomWidth : 1/PixelRatio.get(),
        borderColor : '#fff'
    },
});
