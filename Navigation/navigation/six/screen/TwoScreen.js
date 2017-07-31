/**
 * Created by Ape on 2017/7/1.
 */

import React, { Component } from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';

export default class TwoScreen extends Component{

    render (){
        var img = require('../../images/home.png');

        return (
            <View>
                <Image source={img} style={{resizeMode : 'contain'}} />
                <Text>222</Text>
            </View>
        );
    }
}
