/**
 * Created by Ape on 2017/7/19.
 */


import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    PanResponder,
    LayoutAnimation
} from 'react-native';

import Util from '../../utils/Util';
import Menu from './Menu';

export default class Day08 extends  Component{

    _previousLeft = -0.7*Util.size.width-10;
    _previousOpacity = 0;
    _minLeft = -0.7*Util.size.width-10;
    _menuStyles = {};

    menu = (null : ?{ setNativeProps(props: Object): void });
    drop = (null : ?{ setNativeProps(props: Object): void });


    _updatePosition(){
        this.menu && this.menu.setNativeProps(this._menuStyles);
        this.drop && this.drop.setNativeProps(this._dropStyles);
    }

    _endMove(evt, gestureState) {

       if (gestureState.vx<0||gestureState.dx<0){
            this._menuStyles.style.left = this._minLeft;
            this._dropStyles.style.opacity = 0;
            this._previousLeft = this._minLeft;
            this._previousOpacity = 0;
            this.setState({
                showDrop:false
            })
        }
        if(gestureState.vx>0||gestureState.dx>0){
            this._menuStyles.style.left = 0;
            this._dropStyles.style.opacity = 1;
            this._previousLeft = 0;
            this._previousOpacity = 1;
        }
        this._updatePosition();
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }


    constructor() {
        super();
        this.state = {
            showDrop : false,
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,

            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return  0 !==gestureState.dy/gestureState.dx;
            },

            onPanResponderGrant: (evt, gestureState) => {
                this.setState({
                    showDrop:true
                })
            },

            onPanResponderMove: (evt, gestureState) => {
                this._menuStyles.style.left = this._previousLeft + gestureState.dx;
                this._dropStyles.style.opacity = this._previousOpacity+Math.pow(gestureState.dx/(-this._minLeft),0.5);
                if (this._menuStyles.style.left>0) {
                    this._menuStyles.style.left = 0;
                    this._dropStyles.style.opacity = 1;
                }
                if (this._menuStyles.style.left < this._minLeft) {
                    this._menuStyles.style.left = this._minLeft;
                    this._dropStyles.style.opacity = 0;
                }
                this._updatePosition();
                /* LayoutAnumation 视图动画效果 对布局的创建和更新事件才起作用，然而删除事件是不支持的*/
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            },

            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
            onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
            onShouldBlockNativeResponder: (event, gestureState) => true,

        });

        this._menuStyles = {
            style: {
                left: this._previousLeft,
            },
        };
        this._dropStyles = {
            style: {
                opacity: this._previousOpacity,
            },
        };
    }

    componentDidMount() {
        this._updatePosition();
    }

    render (){
        return(
            <View>
                <Image style={styles.img} source={require('./img/center.jpg')}/>

                {this.state.showDrop? <View style={styles.drop}  ref={(drop) => {this.drop = drop;}}/>:null}

                <View ref={(menu)=>{this.menu=menu;}} style={styles.sideMenu} {...this._panResponder.panHandlers}>
                    <Menu/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    img : {
        width : Util.size.width,
        height : Util.size.height,
        resizeMode : 'contain'
    },

    drop : {
        height: Util.size.height,
        width: Util.size.width,
        position:"absolute",
        top:0,
        left:0,
        opacity:0,
        backgroundColor:"rgba(0,0,0,0.6)"
    },

    sideMenu:{
        height: Util.size.height,
        width: 0.7*Util.size.width+40,
        position:"absolute",
        top:0,
        backgroundColor:"transparent",
        left: -0.7*Util.size.width,
    },
});