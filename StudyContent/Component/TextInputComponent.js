/**
 * Created by Ape on 2017/7/2.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

export default class TextInputComponent extends Component {

    /*
    *   属性介绍
        autoCapitalize 将字符切换为大写
        characters  所有的字符。
        words: 每个单词的第一个字符。
        sentences: 每句话的第一个字符（默认）。
        none: 不自动切换任何字符为大写。

        autoFocus (true/false) 是否获取焦点 true 会在 componetDidMount 后获取焦点

        keyboardType  弹出键盘的类型
        email-address  邮件
        number   数字
        default  字母

        placeholder 灰色显示的提醒信息

        value  当前输入的内容

        multiline （true/false） 多行输入

        onBlur = {（event）=>{}}   失去焦点触发的函数 参数event 可以获取很多信息

        onChangeText = {（text）={}}        在输入文本时，文本内容改变，触发该函数, text 当前的内容

        onFocus 函数   获取焦点时，触发

        onSubmitEditing  按下键盘中的 确定/提交 触发  当 multiline={true} 不触发该函数

        selectTextOnFocus （true/false） true时， 当文本框获取到焦点， 文本框的内容全部被选中

        secureTextEntry （true/false） true时， 输入的内容会被盖住，输入密码用

        editable  (true/false) 文本框是否可以输入


        underlineColorAndroid   Android 专用的 ，android的文本框有一条下划线，设为透明，可以让其消失
    *
    *
    * */

    render () {
        return (
             <View style={styles.flex}>
                 <View style={styles.flexToOne}>
                     <TextInput style={styles.input} returnKeyType="search" underlineColorAndroid="transparent"/>
                 </View>
                 <View style={styles.btn}>
                     <Text>搜索</Text>
                 </View>
             </View>
        );
    }
};

const styles = StyleSheet.create({

    flex : {
        flexDirection : 'row'
    },

    flexToOne : {
        flex : 1,
        padding : 0,
    },
    input : {
        height : 45,
        borderWidth : 1,
        marginLeft : 5,
        paddingLeft : 5,
        borderColor : '#ccc',
        borderRadius : 4,
        lineHeight : 45 ,
        fontSize : 22,
    },
    btn : {
        width :55,
        marginRight : 5,
        marginLeft: -5,
        backgroundColor: "#23Bfff",
        height: 45,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 4,
    }
});