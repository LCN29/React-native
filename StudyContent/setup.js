/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ViewComponent from './Component/ViewComponent';
import TextComponent from './Component/TextComponent';
import TextInputComponent from './Component/TextInputComponent';
import TouchableComponent from './Component/TouchableComponent';
import ImageComponent from './Component/ImageComponent';
import ScrollViewComponent from './Component/ScrollViewComponent';
import FlatListComponent from './Component/FlatListComponent';
import SectionListComponent from './Component/SectionListComponent';
import WebViewComponent from './Component/WebViewComponent';

export default class setup extends Component {
    render() {
        return (
        	<WebViewComponent/>
        );
    }
}

const styles = StyleSheet.create({

});