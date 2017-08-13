/**
 * Created by LCN on 2017/8/9 0009.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import NearbyListPage from './NearbyListPage';

import Screen from '../../utils/Screen';
import Colors from '../../utils/Colors';

export default class NearbyPage extends Component{

    static navigationOptions = ()=>({
        headerLeft:(
            <TouchableOpacity style={styles.headerLeft}>
                <Image style={{ width: 13, height: 16 }} source={require('../../images/Nearby/icon_location.png')}/>
                <Text style={{ fontSize: 15, color: '#333333' }}> 福州 鼓楼</Text>
            </TouchableOpacity>
        ),

        headerRight : (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../images/Home/search_icon.png')} style={styles.searchIcon}/>
                <Text style={styles.searchFont}>找附近的吃喝玩乐</Text>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: 'white' },
    });

    render(){
        let titles = ['享美食', '住酒店', '爱玩乐', '全部'];
        let types = [
            ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
            ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠', '成人情趣'],
            ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '电影', '电影院', '美发', '美甲'],
            []
        ];
        return (
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
            >
                {
                    titles.map((title,index)=>{
                        return(
                            <NearbyListPage
                                tabLabel={titles[index]}
                                types={types[index]}
                                navigation={this.props.navigation}
                                key={index}/>
                        );
                    })
                }
            </ScrollableTabView>
        );
    }
};
const styles = StyleSheet.create({
    headerLeft:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    searchBar: {
        width: Screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    searchFont : {
        fontSize: 13,
        color: '#777777',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
});
