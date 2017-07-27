/**
 * Created by Ape on 2017/7/21.
 */


import React,{ Component } from 'react';

import {
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Image,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';

import Util from '../../utils/Util';

export default class Day10 extends Component {

    constructor(){
        super();
        this.state = {
            show : false,
            shift : new Animated.Value(-120),
        }
    }

    _pushMenu(){
        this.setState({
            show: true,
        });

        Animated.timing(
            this.state.shift,
            {
                toValue : 50,
                duration :1200,
                delay : 800,
                easing : Easing.elastic(1)
            }
        ).start();
    }

    _popMenu(){
        Animated.timing(
            this.state.shift,
            {
                toValue : -120,
                duration :1200,
                delay : 100,
                easing : Easing.elastic(1)
            }
        ).start();

        setTimeout(()=>{
            this.setState({
                show: false,
            })
        },1300);
    }

    render (){
        return (
            <View style={{backgroundColor:"#37465c"}}>
                <TouchableWithoutFeedback onPress={()=>{ this._pushMenu()}}>
                    <Image source={require('./img/bg.png')} style={styles.img}/>
                </TouchableWithoutFeedback>
                {this.state.show?
                    <Image style={styles.menu} source={require('./img/masking.png')}>
                        <Animated.View style={[styles.menuItem1,{left : this.state.shift}]}>
                            <Image source={require('./img/tumblr-text.png')} style={styles.menuImg}/>
                            <Text style={styles.menuText}>Text</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem2,{right:this.state.shift}]}>
                            <Image source={require('./img/tumblr-photo.png')} style={styles.menuImg} />
                            <Text style={styles.menuText}>Photo</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem3,{left : this.state.shift}]}>
                            <Image source={require('./img/tumblr-quote.png')} style={styles.menuImg}/>
                            <Text style={styles.menuText}>Quote</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem4,{right:this.state.shift}]}>
                            <Image source={require('./img/tumblr-link.png')} style={styles.menuImg} />
                            <Text style={styles.menuText}>Link</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem5,{left : this.state.shift}]}>
                            <Image source={require('./img/tumblr-chat.png')} style={styles.menuImg}/>
                            <Text style={styles.menuText}>Chat</Text>
                        </Animated.View>
                        <Animated.View style={[styles.menuItem6,{right:this.state.shift}]}>
                            <Image source={require('./img/tumblr-audio.png')} style={styles.menuImg} />
                            <Text style={styles.menuText}>Audio</Text>
                        </Animated.View>

                        <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.dismissBtn} onPress={()=>{this._popMenu()}} >
                            <Text style={styles.dismiss}>NeverMind</Text>
                        </TouchableHighlight>
                    </Image>
                    : null}
                <Text>123</Text>
            </View>

        );
    }
};

const styles = StyleSheet.create({

    img : {
        height: Util.size.height-10,
        width: Util.size.width,
        resizeMode : 'stretch'
    },
    menu: {
        height: Util.size.height,
        width: Util.size.width,
        position:"absolute",
        resizeMode : 'stretch',
        top:0,
        left:0
    },
    menuImg : {
        width:120,
        height:100,
        resizeMode:"contain",
    },
    menuText:{
        width:120,
        textAlign:"center",
        color:"#fff",
        backgroundColor: "transparent"
    },
    menuItem1 : {
        position:"absolute",
        left: 50,
        top: 50
    },
    menuItem2 : {
        position:"absolute",
        right: 50,
        top: 50
    },
    menuItem3:{
        position:"absolute",
        left:50,
        top: 220
    },
    menuItem4:{
        position:"absolute",
        right:50,
        top: 220
    },
    menuItem5:{
        position:"absolute",
        left:50,
        top: 390
    },
    menuItem6:{
        position:"absolute",
        right:50,
        top: 390
    },
    dismissBtn:{
        position:"absolute",
        width:Util.size.width,
        left:0,
        bottom:50,
    },
    dismiss:{
        textAlign:"center",
        color:"rgba(255,255,255,0.8)",
        fontWeight:"700",
        backgroundColor: "transparent"
    },

});