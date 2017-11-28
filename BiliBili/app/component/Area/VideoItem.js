/**
 * Created by LCN on 2017/8/29 0029.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native';

import Screen from '../../util/Screen';

export default class VideoItem extends  Component {

    constructor(props){
        super(props);
    }

    render(){

        const {info} = this.props;
        return (
            <TouchableHighlight  style={ styles.container} onPress={()=>{this.itemclick(info)}} underlayColor='#727171'>
                <View>
                    <Image source={{ uri : info.img}} style={styles.img} />
                    <Text style={styles.title} numberOfLines={2}>{info.name}</Text>

                    {
                        info.playAmount === '' ?
                            null
                            :
                            <View style={styles.bottom}>
                                <View style={styles.bottomTextBar}>
                                    <Image style={styles.icon} source={require('../../img/recommend/bangumi_common_ic_video_views.png')} />
                                    <Text style={styles.font}>{info.playAmount}</Text>
                                </View>
                                <View style={styles.bottomTextBar}>
                                    <Image style={styles.icon} source={require('../../img/Area/ic_follow.png')} />
                                    <Text style={styles.font} >{info.barrageAmount}</Text>
                                </View>
                            </View>
                    }
                </View>
            </TouchableHighlight>

        );
    }

    itemclick(info){
        alert(`点击了${info.name}`);
    }
};

const styles = StyleSheet.create({
    container : {
        width : (Screen.width-30)/2,
        backgroundColor : '#373737',
        marginTop : 12,
        borderRadius : 4,
        paddingBottom : 9,
    },
    img : {
        width : (Screen.width-30)/2,
        height : (Screen.width-30)/16*5,
        borderTopLeftRadius : 4,
        borderTopRightRadius : 4,
    },
    title : {
        color : '#ababab',
        fontSize : 12,
        paddingLeft : 7,
        paddingRight : 7,
        width : (Screen.width-30)/2,
        paddingTop:7,
    },
    bottom : {
        flexDirection : 'row',
        paddingTop : 9,
        paddingLeft: 5,
        alignSelf : 'flex-end'
    },
    icon : {
        height: 12,
        resizeMode : 'contain'
    },
    font : {
        fontSize: 11,
        color : '#ababab',
    },
    bottomTextBar : {
        flex : 1,flexDirection : 'row', alignItems : 'center'
    }
});