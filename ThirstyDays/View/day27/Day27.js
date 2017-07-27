/**
 * Created by Ape on 2017/7/26.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    findNodeHandle,
    UIManager
} from 'react-native';

import Util from '../../utils/Util';


/*
*  使用 npm install react-native-linear-gradient --save
*
*  在 android/settings.gradle
*  include ':react-native-linear-gradient'
    project(':react-native-linear-gradient').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-linear-gradient/android')
*
*  在 android/app/build.gradle 的 dependencies 添加
*  compile project(':react-native-linear-gradient')
*
*  在 MyApplication 中的
*  protected List<ReactPackage> getPackages() {
*          // 添加
*       new LinearGradientPackage()
*  }
* */


import LinearGradient from 'react-native-linear-gradient';

export default class Day27 extends Component {

    constructor(){
        super();
        this.state = {
            msg : ['消息1','消息2333','消息3332323'],
            color : [
                ['rgba(32,138,246,0.9)', 'rgba(32,138,246,0.92)', 'rgba(32,138,246,0.95)'],
                ['rgba(32,138,246,0.92)', 'rgba(32,138,246,0.95)', 'rgba(32,138,246,0.98)'],
                ['rgba(32,138,246,0.96)', 'rgba(32,138,246,0.98)', 'rgba(32,138,246,1)']
            ]
        };
    }

    _handleScroll(){

        for(let i = this.state.msg.length-1; i>=0;i--){
            this._changeColor(i);
        }

    }

    _changeColor(index){

        const wHeight = Util.size.height;
        let view = this.refs['msg'+index];
        let handle = findNodeHandle(view);
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
            let initOpacity = Math.pow((pageY/wHeight),2) + 0.5;
            let colors = ['rgba(32,138,246,'+initOpacity+')', 'rgba(32,138,246,'+(initOpacity+0.05)+')', 'rgba(32,138,246,'+(initOpacity+0.1)+')'];
            let color = this.state.color;
            color[index] = colors;
            this.setState({
                color: color,
            })
        });
    }


    render() {

        const {color,msg} = this.state;
        const total = msg.length;

        const linears = msg.map((elem, index) => {
            return (
                <LinearGradient key={index} ref={"msg"+index} colors={color[index]} style={[styles.linearGradient,{top : Util.size.height-30-(total-index)*50}]} >
                    <Text style={styles.text}>{elem}</Text>
                </LinearGradient>
            );
        });

        /*   scrollEventThrottle 滚动过程中，scroll事件被调用的频率（单位是每秒事件数量）*/

        /*
        * 定做
        * color 一个数组， 最少2位，['red','blue']
        * start 渐变开始的位置
        * end 结束的位置
        * locations 比例
        * */
        return (
            <ScrollView style={styles.container} scrollEventThrottle={16} onScroll={()=>{ this._handleScroll()}}>
                <LinearGradient
                    colors={['red', 'blue']}
                    start = {{x : 0, y: 0}}
                    end = {{ x: 1, y : 1 }}
                    /*locations ={[0,0.5,1]}*/
                    style={styles.linearBtn}>
                    <Text style={styles.linearText}>LinearGradient试用</Text>
                </LinearGradient>

                <View style={{height:2*Util.size.height}}>
                    {linears}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        backgroundColor: "#ffffff",
    },
    linearGradient: {
        height: 26,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 13,
        alignItems:"center",
        justifyContent: "center",
        position:"absolute",
        right:10,
    },
    text:{
        color:"#fff",
        backgroundColor:"transparent",
    },
    linearText : {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    linearBtn: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
});