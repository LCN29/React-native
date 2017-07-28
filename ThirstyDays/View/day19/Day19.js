/**
 * Created by Ape on 2017/7/28.
 */

/*
* 说明 原本19是没有的，但是我根据github上的一个项目 跟着打了一个仿京东的页面，
* 就拿来，放在这里，当做19了
* */

import React , {Component}from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
}from 'react-native';

import Header from './Header';
import HomePage from './HomePage';

import TabNavigator from 'react-native-tab-navigator';

const HOME = 'home';
const HOME_NORMAL = require('./img/tabs/home_normal.png');
const HOME_FOCUS = require('./img/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./img/tabs/category_normal.png');
const CATEGORY_FOCUS = require('./img/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('./img/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('./img/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('./img/tabs/cart_normal.png');
const CART_FOCUS = require('./img/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./img/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('./img/tabs/personal_focus.png');

export default class Day19 extends Component{

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    _createChildView(tag) {
        return (
            <View style={{ flex:1, backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex : 1}}>
                <Header />
                <TabNavigator  hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, this._createChildView(CATEGORY))}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, this._createChildView(FAXIAN))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, this._createChildView(CART))}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, this._createChildView(PERSONAL))}
                </TabNavigator>
            </View >
        );
    }
};

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        bottom: -6,
    }
});
