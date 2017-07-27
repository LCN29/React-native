/**
 * Created by Ape on 2017/7/18.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';

import Util from '../../utils/Util';
import Icon from 'react-native-vector-icons/Ionicons';


const  AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class EntranceAnimation extends  Component{

    /*static propTypes = {
        hideThis: React.PropTypes.func.isRequired,
    };
*/

    constructor(props){
        super(props);
        this.state = {
            /*注意此处 Valueof 为 大写， 小写不会报错的*/
            transformAnim : new Animated.Value(1),
            opacityAnim : new Animated.Value(1),
        }
    }

    componentDidMount(){
        Animated.timing(
            this.state.transformAnim, {
                toValue : 15,
                duration : 1200,
                delay : 2000,
                easing :  Easing.linear,
        }).start();

        Animated.timing(
            this.state.opacityAnim,{
                toValue: 0,
                duration:800,
                easing: Easing.elastic(1),
                delay:2200
        }).start();

        setTimeout(()=>{
            this.props.hideThis();
        },3300);
    }

    render (){

        /* transfrom : [scale : 2] 放大2倍 , transfrom 缩放*/
        return (
            <Animated.View style={[styles.entrance,{opacity: this.state.opacityAnim}]}>
                <AnimatedIcon size={80} name="logo-twitter"
                              style={[styles.twitter,{transform : [{scale : this.state.transformAnim}]}]}/>
            </Animated.View>
        );
    }
};

const styles = StyleSheet.create({
    entrance : {
        width: Util.size.width,
        height: Util.size.height,
        backgroundColor : '#1b95e0',
        alignItems : 'center',
        justifyContent : 'center',
        position: 'absolute',
    },
    twitter : {
        color : '#fff',
        position:"relative",
        top: -20,
    }
});