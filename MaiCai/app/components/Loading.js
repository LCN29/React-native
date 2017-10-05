/**
 * Created by LCN on 2017/9/29 0029.
 */


import React,{ Component } from 'react';
import {
    View,
    Image,
    Animated,
    Easing,
    StyleSheet,
} from 'react-native';

import Screen from '../utils/Screen';

export default class Loading extends Component {

    constructor(props){
        super(props);
        this.animationImages = [
            require('../imgs/v1.png'),
            require('../imgs/v2.png'),
            require('../imgs/v3.png'),
            require('../imgs/v4.png'),
        ];
        this.animateDuration = 1000;
        this.anim = [0,1].map(()=>new Animated.Value(0));

        this.state = {
            imageIndex: 0,
        }
    }

    componentDidMount() {
        this.animation();
        this.changeImage();
    }

    componentWillUnmount() {
        this.interval&& clearInterval(this.interval);
    }

    render(){

        const bounce  = this.anim[0].interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, -25, 0]
        });

        const scale = this.anim[1].interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [40, 20, 40]
        });


        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Animated.Image source={this.animationImages[this.state.imageIndex]} style={[styles.img,{transform : [{ translateY: bounce }] }]} />
                    <Animated.View style={[styles.bottom,{ width : scale, height : scale}]} />
                </View>
            </View>
        );
    }

    animation(){

        this.anim.map((elem,index)=>elem.setValue(0));

        Animated.parallel([
            Animated.timing(
                this.anim[0],
                {
                    toValue : 1,
                    duration: this.animateDuration,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.anim[1],
                {
                    toValue : 1,
                    duration: this.animateDuration,
                    easing: Easing.linear
                }
            ),
        ]).start(()=>this.animation());
    }

    changeImage() {
        this.interval = setInterval(()=>{
            let imageIndex = this.state.imageIndex + 1;
            if (imageIndex >= this.animationImages.length) {
                imageIndex = 0;
            }
            this.setState({ imageIndex: imageIndex });
        },this.animateDuration);
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height : Screen.height,
    },
    imgContainer : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img : {
        width: 60,
        height: 60,
    },
    bottom : {
        width: 40,
        height: 40,
        backgroundColor: '#e3e3e3',
        borderRadius: 20,
        marginTop: -5,
        transform : [
            {rotateX : '-75deg'}
        ]
    }
});