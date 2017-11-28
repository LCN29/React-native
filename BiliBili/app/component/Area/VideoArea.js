/**
 * Created by LCN on 2017/8/29 0029.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import Screen from '../../util/Screen';

import VideoItem from './VideoItem';

const PIC = [
    'http://i0.hdslb.com/bfs/archive/246b409a13e26637bcb29d3cd35d2129e2b9e299.jpg',
    'http://i0.hdslb.com/bfs/archive/246b409a13e26637bcb29d3cd35d2129e2b9e299.jpg'
];

export default class VideoArea extends  Component {

    constructor(props){
        super(props);
        this.state = {
            num : 5,
        };
    }

    render(){
        const {data} = this.props;

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>this.titleEvent()} underlayColor='#413e3e'>
                    <View style={styles.title}>
                        <Image source={data.icon} style={styles.icon} />
                        <Text style={{color : '#9b9b9b',fontSize : 13,}}>{data.zone}</Text>
                        <View style={styles.more}>
                            <Text style={styles.font}>查看全部</Text>
                        </View>
                    </View>
                </TouchableHighlight>
                {
                    data.ad.length === 0 ?
                        null
                        :
                        <TouchableWithoutFeedback onPress={()=>this.ad()}>
                            <Image source={{uri : data.ad[0]}} style={styles.adImg}/>
                        </TouchableWithoutFeedback>
                }

                <View style={styles.item}>
                    {
                        data.content.map((elem,index)=><VideoItem key={index} info={elem}/>)
                    }
                </View>

                <View style={styles.bottom}>
                    {
                        data.other === ''?
                            null
                            :
                            <TouchableHighlight onPress={()=>this.more()}>
                                <Text style={styles.moreContent}>{data.other}</Text>
                            </TouchableHighlight>
                    }
                    {
                        data.num === 0 ?
                            null
                            :
                            <TouchableWithoutFeedback onPress={()=>this.refresh()}>
                                <View style={{flexDirection : 'row',alignItems: 'center'}}>
                                    <Text style={styles.info}>{data.num}条新动态,点击刷新</Text>
                                    <Image  style={styles.refreshIcon} source={require('../../img/Area/tag_refresh_icon.png')}/>
                                </View>
                            </TouchableWithoutFeedback>
                    }

                </View>

            </View>
        );
    }

    titleEvent(){
        alert('点击了标题');
    }

    more(){
        alert('点击了更多');
    }

    refresh(){
        alert('点击了刷新');
    }

    ad(){
        alert('点击了广告');
    }

};

const styles = StyleSheet.create({
    container : {
        marginTop : 20,
    },
    title : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    icon : {
        height : 23,
        width : 23,
        marginRight : 6,
    },
    more : {
        flexDirection: 'row',
        alignItems : 'center',
        flex : 1,
        justifyContent : 'flex-end',
        paddingRight : 10,
    },
    font : {
        color : '#f4f4f4',
        fontSize : 13,
        backgroundColor : '#4a4a4a',
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop : 4,
        paddingBottom : 4,
        borderRadius : 2,
    },
    item : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent: 'space-between'
    },
    bottom : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop : 18,
        alignItems : 'center'
    },
    moreContent : {
        width : 110,
        height : 30,
        backgroundColor: '#373737',
        borderRadius: 4,
        textAlign : 'center',
        color : '#888888',
        lineHeight : 22,
        fontSize : 12,
    },
    refreshIcon : {
        height : 16,
        width : 16,
        marginLeft : 5,
    },
    info : {
        color : '#a6a6a6',
        fontSize : 12,
    },
    adImg : {
        width : Screen.width -20,
        marginRight: 10,
        height : (Screen.width -20)/17*5,
        borderRadius : 4,
        marginTop : 20,
    }

});
