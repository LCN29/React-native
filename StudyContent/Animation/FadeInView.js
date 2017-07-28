/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    Animated,
    Easing
} from 'react-native';


/*
*   官方demo
*
*   {/*

 使用
 <FadeInView style={{ height: 50, backgroundColor: 'powderblue',flex : 1}}>
    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
 </FadeInView>

* */

export default class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,{                    // 动画中的初始值
                toValue: 1,                             // 透明度最终变为1，即完全不透明
                duration : 1500,                    // 持续时间
                easing : Easing.circle,             // 动画的类型
                useNativeDriver: true,              //使用原生动画驱动 ，动画互相依赖是，原生驱动和js驱动不能混用
            }
        ).start();                                  // 开始执行动画
    }
    render() {
        return (
            <Animated.View                            // 可动画化的视图组件
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}