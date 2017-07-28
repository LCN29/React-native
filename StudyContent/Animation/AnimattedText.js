/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component }  from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
} from 'react-native'

export default class AnimattedText extends Component{

    constructor(props){
        super(props);
        this.state = {
            fadeInOpacity : new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(this.state.fadeInOpacity,{
            toValue : 1,
            duration : 2500,
            easing : Easing.linear,
            useNativeDriver: true,
        }).start();
    }

    render () {
        return (
            <Animated.View style={[styles.animation,{
                opacity : this.state.fadeInOpacity,
            }]}>
                <Text style={styles.text}>悄悄的，我出现了</Text>
            </Animated.View>
        );
    }
};
const styles = StyleSheet.create({
    animation : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text :{
        fontSize: 30
    }
});