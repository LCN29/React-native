/**
 * Created by Ape on 2017/7/19.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    PanResponder,
} from 'react-native';

import Util from '../../utils/Util';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Map extends Component{

    _circleStyles = {};
    _previousLeft = Util.size.width/2-40;
    _previousTop = Util.size.height/2-50;
    _maxTop = Util.size.height-110;
    _maxLeft = Util.size.width-98;

    /* https://flow.org/blog/2015/02/18/Typecasts/ */
    /*Typecasts写法 circle这个属性是可以为空的对象并且这个对象有一个setNativeProps的默认方法*/
    circle = (null : ?{ setNativeProps(props: Object): void });

    /*  控件.setNativeProps(style : { css : css值})，可以不触发render 更改控件的属性*/

    constructor(){
        super();
        this.state = {
            color : "rgba(255,255,255,0.7)",
        }
    }

    _updatePosition(){
        this.circle && this.circle.setNativeProps(this._circleStyles);
    }

    _endMove(evt, gestureState){
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
        this.setState({
            color: "rgba(255,255,255,0.7)"
        });
    }

    componentWillMount() {

        this._panResponder = PanResponder.create({


            /*  参数 gestureState中的属性
                stateID ：滑动手势的 ID，在一次完整的交互中此 ID 保持不变；
                moveX 和 moveY ：自上次回调，手势移动距离；
                x0 和 y0 ：滑动手势识别开始的时候的在屏幕中的坐标；
                dx 和 dy ：从手势开始时，到当前回调是移动距离；
                vx 和 vy ：当前手势移动的速度；
                numberActiveTouches ：当期触摸手指数量。
            *
            * */



            /* 触摸事件开始（touchDown）的时候，RN 会回调此函数，询问组件是否需要成为事件响应者，接收事件处理，如果返回 true ，表示需要成为响应者；*/
            onStartShouldSetPanResponder: (evt, gestureState) => true,

            /*劫持touchDown事件，不传给子控件*/
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,

            /*触摸是进行过程中（touchMove），RN 询问组件是否要成为响应者，返回 true 表示是。*/
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            /*劫持touchMove事件，不传给子控件*/
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            /*申请为手势响应者，成功时会回调这个方法*/
            onPanResponderGrant: (evt, gestureState) => {
                this.setState({
                    color: "white",
                })
            },

            /*申请为响应者失败时，会回调这个方法*/
            onPanResponderReject: (e, gestureState) =>{
                alert("申请响应者失败");
            },

            /*  手势开始时调用*/
            onPanResponderStart: (e, gestureState) => {},

            /*手势移动时，触发*/
            onPanResponderMove: (evt, gestureState) => {

                this._circleStyles.style.left = this._previousLeft + gestureState.dx;
                this._circleStyles.style.top = this._previousTop + gestureState.dy;

                if (this._circleStyles.style.left<0) {
                    this._circleStyles.style.left = 0;
                }
                if (this._circleStyles.style.top<5) {
                    this._circleStyles.style.top = 5;
                }
                if (this._circleStyles.style.left>this._maxLeft) {
                    this._circleStyles.style.left = this._maxLeft;
                }
                if (this._circleStyles.style.top>this._maxTop) {
                    this._circleStyles.style.top = this._maxTop;
                }

                this._updatePosition();
            },

            /*触摸完成（touchUp）的时候的回调，表示用户完成了本次的触摸交互，
            * 这里应该完成手势识别的处理，这以后，组件不再是事件响应者，组件取消激活。
            * */
            onPanResponderRelease: (evt,gestureState) => this._endMove(evt, gestureState),

            /*组件结束事件响应的回调*/
            onPanResponderEnd: (evt,gestureState) => {},

            /* 一次只能有一个响应者，当界面其他组件申请成为响应者时，是否释放响应者，*/
            onPanResponderTerminationRequest: (evt, gestureState) => true,

            /*当同意释放响应者时，会回调这个方法*/
            onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
        });

        this._circleStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop,
            },
        };
    }

    componentDidMount() {
        this._updatePosition();
    }



    render(){

        /*ref 接受值为string类型的参数或者一个函数function
        * 将 组件View 作为组件传值给 this.circle， 后面this.circle就是一个控件
        * this.circle.style = {background: 'red'}; View就好改变背景
        * */
        return (
            <View ref={(circle)=>{this.circle = circle}} style={styles.MoveableCircle} {...this._panResponder.panHandlers} >
                <Icon ref="baseball" name="ios-baseball" color={this.state.color} size={120}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    MoveableCircle : {
        position : 'absolute',
        left : 0,
        top : 0,
    }
});