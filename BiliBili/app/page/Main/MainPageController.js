/**
 * Created by LCN on 2017/8/18 0018.
 */

import React , { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Animated,
    Easing
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';


import LiveStreamingPage from './LiveStreaming/LiveStreamingPage';
import RecommendPage from './Recommend/RecommendPage';
import ChaseDramasPage from './ChaseDrama/ChaseDramaPage';
import AreaPage from './Area/AreaPage';
import DynamicPage from './Dynamic/DynamicPage';
import MessagePage from './Message/MessagePage';

import LabelPage from './Label/LabelPage';
import RankPage from './Rank/RankPage';

import Config from '../../util/Config';
import Screen from '../../util/Screen';


export default class MainPageController extends Component {

    static navigationOptions = {
        drawerLabel : '首页',
        drawerIcon : ({tintColor} )=>{
            let img = tintColor === Config.activityColor ?  require('../../img/Drawer/main_selected.png') : require('../../img/Drawer/main.png');
            return (
                <Image source={img} style={styles.icon} />
            );
        }
    };


    constructor(props){
        super(props);
        this.state={
            headerIcon : 'http://i2.hdslb.com/bfs/face/80bc5c8f7b92bec67e5de2a6be327d2185a66816.jpg@152w_152h_1e_1c.webp',
            newGame : true,
            shift : 'none',
            shiftValue : new Animated.Value(Screen.width),
        }
    }

    render(){
        return (
            <View style={{flex : 1}}>

                <View style={styles.header}>
                    <TouchableWithoutFeedback style={styles.info} onPress={()=>{ this.openDrawer()}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../img/titleBar/ic_toolbar_memu.png')} style={styles.headerMemu}/>
                            <Image source={{ uri : this.state.headerIcon}} style={styles.headerIcon}/>
                            <Text style={styles.headFont}>低调之忍</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.iconMenu}>
                        <TouchableWithoutFeedback onPress={()=>{this.activity()}}>
                            <Image source={require('../../img/titleBar/ic_toolbar_activity.png')} style={styles.iconBtn}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>{this.game()}}>
                            <View style={styles.iconGame}>
                                <Image source={require('../../img/titleBar/ic_toolbar_game.png')} style={styles.iconBtn}/>
                                { this.state.newGame ? <Text style={styles.newgame}>新</Text> : null}
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>{this.download()}}>
                            <Image source={require('../../img/titleBar/ic_toolbar_download.png')} style={styles.iconBtn}/>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>{this.search()}}>
                            <Image source={require('../../img/titleBar/ic_toolbar_search.png')} style={styles.iconBtn}/>
                        </TouchableWithoutFeedback>

                    </View>
                </View>
                <ScrollableTabView
                    initialPage={0}
                    tabBarUnderlineStyle= {{ backgroundColor :'#b45f76'}}
                    tabBarBackgroundColor={Config.themeColor}
                    tabBarActiveTextColor = '#b45f76'
                    tabBarInactiveTextColor = '#f3f3f3'
                    >
                    <LiveStreamingPage tabLabel="直播" />
                    <RecommendPage tabLabel="推荐" showLabel={()=>{this.showLabel()}} showRank={()=>this.showRank()}/>
                    <ChaseDramasPage tabLabel="追番" />
                    <AreaPage tabLabel="分区" />
                    <DynamicPage tabLabel="动态" />
                    <MessagePage tabLabel="消息" />
                </ScrollableTabView>

                {
                    this.state.shift ==='none' ?
                        null
                        :
                        ( this.state.shift === 'label' ?
                                <LabelPage style={[styles.labelPage,{left : this.state.shiftValue}]} close={()=>this.closePage()}/>
                            :
                                <RankPage style={[styles.labelPage,{left : this.state.shiftValue}]} close={()=>this.closePage()} />
                        )
                }
            </View>
        );
    }

    openDrawer(){
        this.props.navigation.navigate('DrawerOpen');
    }

    activity(){
        alert('点击了活动');
    }

    game(){
        alert('点击了游戏');
    }

    download(){
        alert('点击了下载');
    }

    search(){
        alert('点击了搜索');
    }

    showLabel(){
        this.setState({
            shift : 'label'
        });
        Animated.timing(
            this.state.shiftValue,
            {
                toValue : 0,
                duration :1000,
                delay : 300,
            }
        ).start();
    }

    showRank(){
        this.setState({
            shift : 'rank'
        });
        Animated.timing(
            this.state.shiftValue,
            {
                toValue : 0,
                duration :1000,
                delay : 300,
            }
        ).start();
    }

    closePage(){
        Animated.timing(
            this.state.shiftValue,
            {
                toValue : Screen.width,
                duration :1000,
                delay : 300,
            }
        ).start();

        setTimeout(()=>{
            this.setState({
                shift : 'none'
            })
        },1300);
    }
};

const styles = StyleSheet.create({
    header : {
        height : 56,
        width : Config.width,
        backgroundColor : Config.themeColor,
        flexDirection : 'row',
        alignItems : 'center',
        paddingRight : 10,
    },
    info : {
        backgroundColor : '#ff0',
        flex: 1,
    },
    headerMemu : {
        width : 8,
        height : 15,
        marginRight : 15,
    },
    headerIcon : {
        width : 34,
        height : 34,
        borderRadius : 17,
    },
    headFont : {
        color : '#fff',fontSize: 14,
        marginLeft : 15,
    },
    iconMenu : {
        flex: 1,
        flexDirection : 'row',
        justifyContent : 'flex-end',
        height : 56,
        alignItems : 'center',
    },
    iconBtn : {
        height : 18,
        resizeMode : 'contain',
        marginLeft: 15,
    },
    iconGame :{
        height : 56,
        justifyContent : 'center'
    },
    newgame : {
        backgroundColor : '#efa214',
        fontSize : 10, color : '#fff',
        width : 16,
        height : 16,
        textAlign : 'center',
        borderRadius: 2,
        position : 'absolute', top : 4, right : 0,
    },
    icon : {
        width : 20,
        height : 20,
    },

    labelPage : {
        position : 'absolute',
        width : Screen.width,
        height : Screen.height,
        left : Screen.width
    },
    rankPage : {
        position : 'absolute',
        width : Screen.width,
        height : Screen.height,
        left : Screen.width,
    }
});
