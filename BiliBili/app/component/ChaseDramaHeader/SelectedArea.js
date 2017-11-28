/**
 * Created by LCN on 2017/8/22 0022.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';

import Config from  '../../util/Config';
import Screen from  '../../util/Screen';

export default class SelectedArea extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.img}>
                    <TouchableWithoutFeedback onPress={()=>this.bangumi()}>
                        <View>
                            <Image style={styles.kind} source={require('../../img/ChaseDrama/bangumi_follow_home_ic_index_bangumi.png')} />
                            <Image style={styles.person} source={require('../../img/ChaseDrama/bangumi_follow_home_ic_index_bangumi2.png')} />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={()=>this.domestic()}>
                        <View style={{marginLeft : 10}}>
                            <Image style={styles.kind} source={require('../../img/ChaseDrama/bangumi_follow_home_ic_index_domestic.png')} />
                            <Image style={styles.person} source={require('../../img/ChaseDrama/bangumi_follow_home_ic_index_domestic2.png')} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>


                <View style={styles.fontArea}>
                    <TouchableOpacity style={{flex : 1}} onPress={()=>this.timeLine()}>
                        <View style={styles.wrap}>
                            <Image style={styles.icon} source={require('../../img/ChaseDrama/bangumi_follow_home_ic_timeline.png')} />
                            <Text style={styles.font}>时间表</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.line}/>

                    <TouchableOpacity style={{flex : 1}} onPress={()=>this.index()}>
                        <View style={styles.wrap}>
                            <Image style={styles.icon} source={require('../../img/ChaseDrama/bangumi_follow_home_ic_index.png')} />
                            <Text style={styles.font}>索引</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    bangumi(){
        alert('点击了番剧区');
    }

    domestic(){
        alert('点击了国创区');
    }

    timeLine(){
        alert('点击了时间表');
    }

    index(){
        alert('点击了索引');
    }
};

const styles = StyleSheet.create({
    container :{
        backgroundColor : '#373737',
    },
    img : {
        flexDirection : 'row',
        paddingLeft : 24,
        paddingRight : 24,
        paddingBottom : 12,
        paddingTop : 12,
        height : 80,
        borderBottomWidth : Screen.onePixel,
        borderBottomColor : '#454545',
    },
    kind : {
        height : 44,
        resizeMode : 'contain',
        width : (Screen.width-58)/2,
        marginTop : 12,
    },
    person : {
        position  : 'absolute',
        height : 56,
        resizeMode: 'contain',
        left : -10,
    },
    fontArea : {
        paddingTop: 6,
        paddingBottom : 6,
        flexDirection : 'row',
        height : 38,
        justifyContent : 'space-between',
        alignItems: 'center'
    },
    line : {
        width : Screen.onePixel,
        backgroundColor : '#444444',
        height : 24,
    },
    wrap : {
        justifyContent : 'center',
        flexDirection : 'row',
        alignItems : 'center'
    },
    icon : {
        width : 22,
        height : 22,
        marginRight : 20,
    },
    font : {
        fontSize : 12, color : '#969696'
    }

});
