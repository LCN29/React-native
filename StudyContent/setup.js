/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';

import BoxModel from './FlexBoxLayout/instance/BoxModel';

import ViewComponent from './Component/ViewComponent';
import TextComponent from './Component/TextComponent';
import TextInputComponent from './Component/TextInputComponent';
import TouchableComponent from './Component/TouchableComponent';
import ImageComponent from './Component/ImageComponent';
import ScrollViewComponent from './Component/ScrollViewComponent';
import FlatListComponent from './Component/FlatListComponent';
import SectionListComponent from './Component/SectionListComponent';
import WebViewComponent from './Component/WebViewComponent';


import TimeoutContent from './TimerTask/TimeoutContent';
import IntervalContent from './TimerTask/IntervalContent';


import AnimattedText from "./Animation/AnimattedText";
import PressChange from './Animation/PressChange';
import InterpolateText from "./Animation/InterpolateText";
import ThreeTextAnimated from "./Animation/ThreeTextAnimated";

import WebView from './NativeModule/NativeWebView/MyWebView';
/*  使用 <WebView url="http://www.baidu.com" style={{width:200,height:400}}/> */

import ImagePicker from './NativeModule/GetImageFromMobilePhone/ImagePicker';

export default class setup extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <ImagePicker/>
        );
    }
}

const styles = StyleSheet.create({
});