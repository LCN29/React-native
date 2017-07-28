/**
 * Created by Ape on 2017/7/4.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

export default class MenuButton extends Component{

    constructor(props){
        super(props);

    }

    _onClick() {
        if(this.props.event){
            this.props.event(this.props.showText,this.props.tag);
        }
    }

    render(){
        return (
            <TouchableWithoutFeedback
                onPress={()=>{
                    this._onClick();
                }}
            >
                <View style={{ alignItems:'center',flex:1}} >
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text style={styles.showText} >{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    },
    showText: {
        fontSize: 12
    }
});