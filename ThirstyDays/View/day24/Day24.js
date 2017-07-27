/**
 * Created by Ape on 2017/7/25.
 */


import React , {Component}from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

import Util from '../../utils/Util';

import HomePage from './HomePage';
import PopularPage from './PopularPage';
import SubscribePage from './SubscribePage';
import MinePage from './MinePage';


import ScrollableTabView from 'react-native-scrollable-tab-view';


import Icon from 'react-native-vector-icons/Ionicons';
import MyTabBar from "./MyTabBar";

export default class Day24 extends Component{

    constructor() {
        super();
        this.state = {
            title: "首页",
            tabNames: ['首页', '流行', '订阅', '帐户'],
            tabIconNames: ['ios-home', 'md-flame', 'ios-albums-outline', 'md-person'],
        };
    }

    _updateTitle(obj){
        const {i} = obj;
        let title = "";
        switch(i) {
            case 0:
                title = "首页";
                break;
            case 1:
                title = "时下流行";
                break;
            case 2:
                title = "订阅";
                break;
            case 3:
                title = "帐户";
                break;
        }
        this.setState({
            title
        });
    }

    render(){

        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;

        return (
            <View style={{flex : 1}}>
                <View style={styles.navBg}/>
                <View style={styles.nav}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <View style={styles.iconContainer}>
                        <Icon name="ios-search" color="#fff" size={25}/>
                        <Icon name="ios-create-outline" color="#fff" size={25}/>
                    </View>
                </View>

                <ScrollableTabView
                    onChangeTab={(obj) => this._updateTitle(obj)}
                    renderTabBar={()=><MyTabBar tabNames={tabNames} tabIconNames={tabIconNames} />}
                >
                    <HomePage tabLabel="首页" />
                    <PopularPage tabLabel="流行"/>
                    <SubscribePage tabLabel="订阅" />
                    <MinePage tabLabel="账户"/>
                </ScrollableTabView>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    navBg:{
        backgroundColor:"#c11f1e",
        width:Util.size.width,
        height:20,
    },
    nav: {
        backgroundColor:"#e32524",
        width:Util.size.width,
        height:55,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:15,
        paddingLeft:20,
        paddingRight:10,
    },
    title : {
        color:"#fff",
        fontSize:20,
    },
    iconContainer : {
        flexDirection:"row",
        justifyContent:"space-between",
        width:60,
    }

});
