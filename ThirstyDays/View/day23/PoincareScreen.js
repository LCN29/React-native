/**
 * Created by Ape on 2017/7/25.
 */

import React , {Component}from 'react';
import {
    WebView
}from 'react-native';

export default class PoincareScreen extends Component {

    static navigationOptions = {
        title : 'Poincare'
    };

    render(){

        /*
        *   automaticallyAdjustContentInsets  自动调节内容大小
        *   javaScriptEnabled   开启javascript(IOS默认开启，Android 需要手动)
        *   domStorageEnabled 开启DOM Storage（存储）
        *   startInLoadingState 开启页面加载的状态 (true ：页面加载时，有个圈在转，false :空白)
        *   decelerationRate webView的滑动速度
        *   source={{uri : '网址'}}  开启一个网页
        * */
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                decelerationRate="normal"
                source={require('./web/demo1.html')}
            />
        );
    }
}
