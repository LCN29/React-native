/**
 * Created by LCN on 2017/8/20 0020.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import Config from '../../util/Config';
import Screen from '../../util/Screen';


export default class VideoPreviewItem extends Component {

    constructor(){
        super();
        this.state = {
            info : {
                playAmount : '5.4万',
                barrageAmount : '303',
                time : '01:58',
                title : 'b站那些好看的后宫动漫',
                kind : ['后宫','综合']
            }

        };
    }



    render(){
        const { width , height, info} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.videoEvent()}>
                    <View>
                        <Image source={{ uri : info.uri}}  style={[styles.img, { width : width, height : height }]}/>
                        <Text style={[styles.title,{width : width}]} numberOfLines={2}>{info.title}</Text>
                        <View style={[styles.mask,{width : width}]}>
                            <Image source={require('../../img/recommend/bangumi_common_ic_video_views.png')} style={styles.maskImg} />
                            <Text style={styles.maskFont}>{info.playAmount}</Text>
                            <Image source={require('../../img/recommend/bangumi_common_ic_video_danmakus.png')} style={styles.maskImg} />
                            <Text style={[styles.maskFont,{flex : 1}]}>{info.barrageAmount}</Text>
                            <Text style={[styles.maskFont,{marginRight : 0}]}>{info.time}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.label}>
                    <TouchableWithoutFeedback onPress={()=>this.labelEvent(info.kind[0])}>
                        <View>
                            <Text numberOfLines={1} style={styles.kind}>{info.kind[0]}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text  style={[styles.kind,{marginLeft: 4,marginRight : 4}]}>·</Text>
                    <TouchableWithoutFeedback onPress={()=>this.labelEvent(info.kind[1])}>
                        <View style={{flex : 1}}>
                            <Text  numberOfLines={1} style={styles.kind}>{info.kind[1]}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>this.actionEvent()}>
                        <Image source={require('../../img/recommend/ic_overflow.png')} style={styles.actionImg}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

    videoEvent(){
        alert('点击了视频');
    }

    labelEvent(label){
        alert('点击了'+label);
    }

    actionEvent(){
        alert('点击了动作');
    }

};


const styles = StyleSheet.create({
    container : {
        backgroundColor : '#373737',
        borderRadius : 4,
    },
    img : {
        borderTopLeftRadius : 4,
        borderTopRightRadius : 4,
    },
    mask : {
        flexDirection : 'row' ,
        position : 'absolute',
        bottom : 50,
        paddingLeft : 4,
        paddingRight : 4,
        alignItems : 'center'
    },
    maskImg : {
        width : 12,
        height : 12,
        marginRight : 4,
    },
    maskFont : {
        fontSize : 8, color : '#fff',
        marginRight: 10,
    },
    title : {
        color : '#909090', fontSize : 14,
        height : 46,
        padding : 6,
    },
    label : {
        flexDirection: 'row',
        alignItems: 'center',
        margin : 6,
    },
    kind : {
        color : '#6b6b6b',fontSize : 14,
    },
    actionImg : {
        height : 14,
        resizeMode : 'contain',
        paddingLeft: 15,
    }

});