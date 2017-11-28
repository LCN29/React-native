/**
 * Created by LCN on 2017/9/24 0024.
 */


import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules,
    PanResponder,
} from 'react-native';

import Screen from '../../util/Screen';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const offset= (Screen.width-12)*-1;

export default class SlidingBar extends Component {

    _offsetStyle = {};
    _previousLeft = 0;
    adBar = (null : ?{ setNativeProps(props: Object): void });

    constructor(props){
        super(props);
        this.state = {
            activeIndex : 0,
            offset :offset,
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                //释放定时器
                this.releaseTimer();
            },
            onPanResponderReject: (e, gestureState) =>{
                console.log(e);
            },
            onPanResponderStart: (e, gestureState) => {},
            onPanResponderMove: (evt, gestureState) => {
                this._offsetStyle.style.left = gestureState.dx + this.state.offset;
                this._updatePosition();
            },
            onPanResponderRelease: (evt,gestureState) => this._endMove(evt, gestureState),
            onPanResponderEnd: (evt,gestureState) => {},
            onPanResponderTerminationRequest: (evt, gestureState) => true,
        });

        this._offsetStyle = {
            style: {
                left : (Screen.width-12)*-1,
            }
        };
    }

    //移动时更新位置
    _updatePosition(){
        this.adBar&&this.adBar.setNativeProps(this._offsetStyle);
    }

    //停止移动时，触发
    _endMove(evt, gestureState){
        if(gestureState.dx<0){
           if(gestureState.dx < offset/2){
               // 1： 图片向左滑动1张的位置
               this._finishPosition(1);
           }else{
               // 0 不需要滑动，回复到原来的样子
               this._offsetStyle.style.left = offset;
               this._finishPosition(0);
           }

        }else{
            if(gestureState.dx > offset*-1/2){
                //2 : 图片向右滑动1张的位置
                this._finishPosition(2);
            }else{
                this._offsetStyle.style.left = offset;
                this._finishPosition(0);
            }
        }

          this.setTimer();
    }

    _finishPosition(action){

        let len = this.props.data.length;
        let nextIndex = 0;
        switch (action){
            case 0 :
                LayoutAnimation.linear();
                this.adBar&&this.adBar.setNativeProps(this._offsetStyle);
                break;
            case 1 :
                LayoutAnimation.easeInEaseOut();
                this.setState({
                    offset : offset*2,
                });

                if(this.state.activeIndex + 1 === len){
                    nextIndex = 0;
                }else{
                    nextIndex = this.state.activeIndex + 1;
                }
                setTimeout(()=>{
                    this.setState({
                        offset : offset,
                        activeIndex: nextIndex,
                    });
                },500);
                break;

            case 2 :
                LayoutAnimation.easeInEaseOut();
                this.setState({
                    offset : 0,
                });

                if(this.state.activeIndex - 1 === -1){
                    nextIndex = len-1;
                }else{
                    nextIndex = this.state.activeIndex - 1;
                }
                setTimeout(()=>{
                    this.setState({
                        offset ,
                        activeIndex: nextIndex,
                    });
                },500);

                break;
        }
        this.setTimer();
    }

    componentDidMount() {
        this.setTimer();
    }

    componentWillUnmount() {
        this.releaseTimer();
    }

    setTimer(){
        let len = this.props.data.length;
        let nextIndex = 0;

        if(!this.interval){
            this.interval = setInterval(()=>{
                //向左移动
                LayoutAnimation.linear();
                this.setState({
                    offset : offset*2,
                });

                //找到当前应该显示的那张图片
                if(this.state.activeIndex + 1 === len){
                    nextIndex = 0;
                }else{
                    nextIndex = this.state.activeIndex + 1;
                }

                // 将imgContainer重新回到到一开始的样子
                setTimeout(()=>{
                    this.setState({
                        offset : offset,
                        activeIndex: nextIndex,
                    });
                },500)

            },2000);
        }
    }

    releaseTimer(){
        this.interval&&clearInterval(this.interval);
    }

    imgClick( url){
        alert(url);
    }

    render(){
        const  {data} = this.props;

        let dot = data.map((elem,index)=>{
            return (
                <View  key={index} style={this.state.activeIndex ===index ? styles.activated_dot : styles.dot}/>
            );
        });

        let prev = this.state.activeIndex-1 < 0 ? this.state.activeIndex+(data.length-1) : this.state.activeIndex-1;
        let after = (this.state.activeIndex+1)% data.length;


        return (
            <View style={styles.container}>

                <View ref={(adBar)=>{ this.adBar = adBar}} {...this._panResponder.panHandlers} style={[styles.imgContainer,{left : this.state.offset}]}>
                    <TouchableWithoutFeedback>
                        <Image source={{uri : data[prev].img}} style={styles.img}/>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=>this.imgClick(data[this.state.activeIndex].url)}>
                        <Image source={{uri : data[this.state.activeIndex].img}} style={styles.img}/>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                        <Image source={{uri : data[after].img}} style={styles.img}/>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.dotContainer}>
                    {dot}
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({

    container : {
        position : 'relative',
        width : Screen.width-24,
        height : Screen.width/4,
        marginTop : 10,
    },
    imgContainer : {
        position: 'absolute',
        width :  (Screen.width-12)*3,
        height : Screen.width/4,
        flexDirection:'row',
    },
    img : {
        borderRadius : 4,
        width : Screen.width-24,
        height : Screen.width/4,
        marginRight : 12,
    },
    dotContainer : {
        position : 'absolute',
        bottom : 0,
        right : 0,
        flexDirection : 'row',
    },
    dot : {
        width : 6,
        height : 6,
        borderRadius : 3,
        backgroundColor : '#3c3c3c',
        margin : 4,
    },
    activated_dot : {
        width : 8,
        height : 8,
        borderRadius : 4,
        backgroundColor : '#fff',
        margin : 3,
    }
});
