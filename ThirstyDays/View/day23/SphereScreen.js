/**
 * Created by Ape on 2017/7/25.
 */

import React , {Component}from 'react';
import {
    WebView,
}from 'react-native';

export default class SphereScreen extends Component {

    static navigationOptions = {
        title : 'Sphere'
    };

    render(){


        /*  在浏览器上运行没问题，把这个文件加载到了手机中，却无法转动，，233，*/
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                decelerationRate="normal"
                source={require('./web/demo2.html')}
            />
        );
    }
}

