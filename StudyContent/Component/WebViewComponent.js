/**
 * Created by Ape on 2017/7/2.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    WebView,
} from 'react-native';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class WebViewComponent extends Component {


    /*
    *  source  加载的网址
    *  injectedJavaScript 加载完成 执行js代码
    *
    *  onError function  方法 当网页加载失败的时候调用
    *
    *  onLoad  function 方法  当网页加载结束的时候调用
    *
    *  onLoadStart  function  当网页开始加载的时候调用
    * */
    render () {
        return (
            <View style={{flex : 1}}>
                <WebView
                    source={{uri : 'http://www.weibo.com'}}
                    injectedJavaScript="alert('欢迎加入ReactNative')"
                    style={{width : width, height : height}}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});