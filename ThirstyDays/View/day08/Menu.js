/**
 * Created by Ape on 2017/7/19.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';

import Util from '../../utils/Util';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Day08 extends  Component{

    render (){
        return(
            <View style={styles.sideMenuContainer}>
                <Image style={styles.img} source={{uri: 'https://facebook.github.io/react/img/logo_og.png',}}/>
                <View style={styles.btnContainer}>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="map-marker" size={15}/>
                            <Text style={styles.btnText}>你的地点</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="pencil-square" size={15}/>
                            <Text style={styles.btnText}>你的贡献</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="product-hunt" size={15}/>
                            <Text style={styles.btnText}>离线区域</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="road" size={15}/>
                            <Text style={styles.btnText}>实时路况</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="bus" size={15}/>
                            <Text style={styles.btnText}>公交线路</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="bicycle" size={15}/>
                            <Text style={styles.btnText}>骑车线路</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="photo" size={15}/>
                            <Text style={styles.btnText}>卫星图像</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#888" onPress={()=>{}}>
                        <View style={styles.btn}>
                            <Icon style={styles.btnIcon} name="tree" size={15}/>
                            <Text style={styles.btnText}>地形</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    sideMenuContainer : {
        height: Util.size.height,
        width : Util.size.width*0.7,
        backgroundColor : '#fff',
    },

    img:{
        width: 0.7*Util.size.width,
        resizeMode:"stretch",
        height:0.7*Util.size.width/1.8,
    },

    btnContainer : {
        borderBottomWidth: Util.pixel,
        borderBottomColor:"#bbb"
    },

    btn:{
        flexDirection:"row",
        alignItems:"center",
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:"#fff"
    },

    btnIcon : {
        flex:1,
        textAlign:"center",
        color:"#555"
    },

    btnText : {
        flex:3,
        fontSize:14,
        fontWeight:"500",
        paddingLeft:20,
        color:"#454545"
    }


});