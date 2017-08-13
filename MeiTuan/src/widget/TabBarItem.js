/**
 * Created by LCN on 2017/8/9 0009.
 */

import React, { Component } from 'react';
import { Image } from 'react-native';

export default class TabBarItem extends Component{

    render(){
        return (
            <Image
                source={this.props.focused? this.props.selectedImage :this.props.normalImage }
                style={{tintColor:this.props.tintColor, width :25, height : 25}} />
        );
    }
}
