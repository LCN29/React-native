/**
 * Created by Ape on 2017/7/25.
 */


import React , {Component}from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Animated,
    Easing
}from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../../utils/Util'

export default class Day22 extends Component{

    constructor(){
        super();

        this.state = {
            scale: new Animated.Value(1),
            on: false,
            scaleOn: false,
        }
    }

    _onMic(){
        this.setState({
            on:true,
        });

        Animated.timing(this.state.scale,{
            toValue : 20,
            duration : 200,
            easing : Easing.elastic(1),
        }).start( ()=>{this.setState({scaleOn: true})} );
    }

    _offMic(){
        this.setState({
            scaleOn:false,
        });
        Animated.timing(
            this.state.scale,
            {toValue: 1,
                duration: 200,
                easing: Easing.elastic(1),
            },
        ).start(() => {
            this.setState({
                on:false,
            });
        });
    }


    render(){
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Icon name="ios-settings" size={25} color="#969696"/>
                    <Text style={styles.navText}>SIGN IN</Text>
                    <Icon name="ios-albums-outline" size={25} color="#969696"/>
                </View>
                <View style={styles.content}>
                    <Image source={require('./img/google.png')} style={styles.logo}/>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} underlineColorAndroid="transparent"/>
                    </View>
                    <TouchableWithoutFeedback onPress={()=>this._onMic()}>
                        <Animated.View style={[styles.btnContainer,{transform : [{scale : this.state.scale}]}]}>
                            {
                                this.state.on ?
                                    <View style={[styles.btnContainer, {backgroundColor: "#ff3b3e", top: 8,transform: [{scale: 0.05}]}]}>
                                        <Icon name="ios-mic-outline" size={25} color="#fff"/>
                                    </View>
                                    :
                                    <Icon name="ios-mic-outline" size={25} color="#4285f4"/>
                            }
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    {
                        this.state.scaleOn?
                            <View style={styles.scaleContainer}>
                                <Text style={styles.scaleText}>请开始你的表演</Text>
                                <TouchableWithoutFeedback onPress={() => this._offMic()}>
                                    <Icon name="md-close" style={styles.closeIcon} color="#969696" size={25}/>
                                </TouchableWithoutFeedback>
                            </View>
                            :
                            null
                    }
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : '#f2f2f2'
    },
    nav: {
        alignItems: "center",
        justifyContent: "space-between",
        height: 30,
        flexDirection: "row",
        paddingLeft:25,
        paddingRight:25,
    },
    navText:{
        color:"#969696",
        fontSize:18,
    },
    content:{
        paddingTop: 120,
        alignItems:"center",
    },
    logo : {
        height:50,
        resizeMode:"contain"
    },
    inputContainer:{
        width: Util.size.width-80,
        height: 40,
        marginTop:40,
        marginBottom:40,
        backgroundColor:"#fff",
        borderBottomColor : 'rgba(220,220,220,0.9)',
        borderBottomWidth : Util.pixel*4,
    },
    btnContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    scaleContainer:{
        position: "absolute",
        height:Util.size.height,
        width:Util.size.width,
        top:0,
        left:0,
    },
    scaleText:{
        color:"#969696",
        fontSize:25,
        paddingLeft:25,
        paddingTop:50,
        backgroundColor:"#fff",
    },
    closeIcon:{
        height:50,
        width:50,
        position:"absolute",
        bottom: 50,
        left:30,
        backgroundColor:"#fff",
    },


});