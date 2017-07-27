/**
 * Created by Ape on 2017/7/20.
 */


import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    ScrollView,
    PanResponder,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../../utils/Util';

export default class TwitterUser extends Component{

    _bannerTop = 0;
    _iconTop = 95;

    _opacity = 0;
    _scale = 1;


    _previousTop = 0;
    _minTop = -192;
    _userStyles = {};

    user = (null : ?{ setNativeProps(props: Object): void });

    constructor() {
        super();
        this.state = {
            scrollEnabled: false,
            bannerTop:0,
            iconTop: 95,
            scale : 1,
            opacity:0,
        }
    }

    _updatePosition() {
        this.user && this.user.setNativeProps(this._userStyles);
    }

    _endMove(evt, gestureState) {
        this._previousTop = this._userStyles.style.top;
    }

    componentWillMount(){
        this._panResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture : (evt,gestureState)=>true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return gestureState.dy/gestureState.dx!==0;
            },

            onPanResponderGrant: (evt, gestureState) => {},

            onPanResponderMove: (evt, gestureState) => {

                this._userStyles.style.top = this._previousTop + gestureState.dy;
                this._scale = 1+this._userStyles.style.top/162.5;
                this._iconTop = 95 - this._userStyles.style.top/4.16;
                this._bannerTop = 0;
                this._opacity = 0;


                if (this._userStyles.style.top< -62.5) {
                    this._scale = 0.6;
                    this._iconTop = 110;
                    this._bannerTop = -this._userStyles.style.top-62.5;

                    this._opacity = Math.pow((-this._userStyles.style.top-62.5)/129.5,0.5)
                }
                if (this._userStyles.style.top>0) {
                    this._userStyles.style.top = 0;
                    this._scale = 1;
                    this._iconTop = 95
                }
                if (this._userStyles.style.top < this._minTop) {
                    this._userStyles.style.top = this._minTop;
                    this._opacity = 1;
                    this._bannerTop = 129.5;
                }

                this.setState({
                    scale: this._scale,
                    iconTop: this._iconTop,
                    bannerTop: this._bannerTop,
                    opacity: this._opacity
                });

                this._updatePosition();
            },

            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
            onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
            onShouldBlockNativeResponder: (event, gestureState) => true,
        });

        this._userStyles = {
            style: {
                top: this._previousTop,
            },
        };
    }


    componentDidMount(){
        this._updatePosition();
    }


    render(){
        let panProps = this.state.scrollEnabled?{}:{...this._panResponder.panHandlers};
        return (
            <View style={styles.userContainer} ref={(user) => {this.user = user;}} {...panProps} >
                <View style={styles.userPanel} >
                    <Image style={[styles.banner,{top:this.state.bannerTop}]} source={require('./img/banner.jpg')}/>
                    <View style={[styles.iconContainer,{top : this.state.iconTop,transform : [{scale : this.state.scale}]}]} >
                        <Image style={styles.icon} source={require('./img/headerIcon.jpg')}/>
                    </View>
                    <View style={styles.userControl}>
                        <TouchableHighlight style={styles.controlIcon}>
                            <Icon name="ios-settings" color="#8999a5" size={20}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.controlBtn,styles.border]}>
                            <Icon name="ios-people" color="#8999a5" size={20}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={[styles.controlBtn2,styles.border]}>
                            <Text style={styles.controlBtnText}>编辑个人资料</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userInfoName}>Github</Text>
                        <Text style={styles.userInfoAccount}>@Github</Text>
                        <View style={styles.userInfoFollow}>
                            <Text><Text style={styles.fontEm}>183</Text> 正在关注  </Text>
                            <Text><Text style={styles.fontEm}>    830k</Text> 关注者</Text>
                        </View>
                    </View>
                    {this.state.bannerTop<=0? null : <Image style={[styles.banner,{top: this.state.bannerTop}]} source={require('./img/banner.jpg')} />}
                    {this.state.bannerTop<=0? null : <Image style={[styles.banner,{top: this.state.bannerTop,opacity:this.state.opacity}]} source={require('./img/banner2.jpg')} />}
                    <Text style={[styles.title,{ top : this.state.bannerTop+80,opacity :this.state.opacity}]}>Github</Text>
                    <View style={styles.segment}>
                        <Text style={[styles.selectItem,styles.activeItem]}>推文</Text>
                        <Text style={styles.selectItem}>媒体</Text>
                        <Text style={styles.selectItem}>喜欢</Text>
                    </View>
                </View>
                <ScrollView contentInset={{top:0}}  showsVerticalScrollIndicator={false} scrollEnabled={this.state.scrollEnabled} style={styles.detailScroll}>
                    <Text style={styles.attention}>推荐关注</Text>
                    <Text style={styles.content}>内容</Text>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    userContainer : {
        width: Util.size.width,
        height: Util.size.height-50,
        backgroundColor: '#fff',
        position:"relative",
        top : 0,
    },
    userPanel:{
        flex:1,
        height:300,
    },
    banner:{
        width: Util.size.width,
        height:125,
        position:"absolute",
        top:0,
        left:0,
    },
    iconContainer: {
        position: "absolute",
        left: 10,
        top: 95,
        borderWidth:4,
        borderColor:"#fff",
        borderRadius:5,
    },
    icon :{
        width : 68,
        height : 68,
        borderRadius: 5,
    },
    userControl:{
        height:45,
        position:"absolute",
        top:125,
        width: 200,
        right:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    controlIcon:{
        width: 30
    },
    controlBtn2:{
        width:120,
        height:30,
        alignItems:"center",
        justifyContent:"center"
    },
    border : {
        paddingTop:3,paddingLeft:5,paddingBottom:3,paddingRight:5,
        borderWidth:1,
        borderColor:"#8999a5",
        borderRadius:3,
    },
    userInfo:{
        width: Util.size.width,
        position:"absolute",
        top: 165,
        paddingTop:15, paddingLeft:15, paddingBottom:15,
        left:0,
        height:90,
    },
    userInfoName:{
        color:"#292f33",
        fontSize:20,
        fontWeight:"500",
        paddingBottom:5
    },
    userInfoAccount:{
        color:"#66757f",
        paddingBottom:5
    },
    userInfoFollow:{
        flexDirection:"row"
    },
    fontEm :{
        color:"#292f33",
        fontWeight:"500"
    },
    title : {
        backgroundColor:"transparent",
        color:"#fff",
        fontSize:20,
        fontWeight:"500",
        position:"absolute",
        left:Util.size.width/2-30,
    },
    segment: {
        flexDirection : 'row',
        position: "absolute",
        top: 263,
        left:15,
        width: Util.size.width-30,
        height:40,
        borderWidth: 2,
        borderColor : '#1b95e0',
        borderRadius : 4,
    },
    selectItem : {
        flex : 1,
        borderLeftColor : '#1b95e0',
        borderLeftWidth : Util.pixel*3,
        textAlign : 'center',
        fontWeight : '900' ,
        lineHeight : 28,
        color : '#1b95e0',
        backgroundColor : '#fff'
    },
    activeItem : {
        backgroundColor : '#1b95e0',
        color : '#fff',
        borderLeftWidth: 0,
    },
    detailScroll:{
        backgroundColor : '#ff0',
        height: Util.size.height-350,
        width: Util.size.width,
        borderTopWidth:Util.pixel,
        borderTopColor:"#9eacb6",
        position:"absolute",
        top: 310,
        left:0,
    },
    attention : {
        width:Util.size.width,
        backgroundColor:"#f5f8fa",
        height : 60,
        lineHeight: 46,
        paddingLeft : 20,
        paddingBottom : 10,
    },
    content : {
        width : Util.size.width,
        height:0.8*Util.size.width,
        borderTopWidth:Util.pixel,
        borderTopColor:"#9eacb6",
        textAlign: 'center',
        lineHeight : 40,
    }

});