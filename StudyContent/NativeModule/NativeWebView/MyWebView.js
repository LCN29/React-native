/**
 * Created by Ape on 2017/7/8.
 */

import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var iface = {
    name: 'test',       /* '导出的控件起的名字，尽量好听点 */
    propTypes: {
        url: PropTypes.string,
        ...View.propTypes
    },
};
/*  MyWebView 为 Android类 中 return the name*/
module.exports = requireNativeComponent('MyWebView', iface);