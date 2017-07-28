/**
 * Created by Ape on 2017/7/4.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Alert
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import MenuButton from "./MenuButton";

const BANNER_IMGS = [
    require('./img/banner/1.jpg'),
    require('./img/banner/2.jpg'),
    require('./img/banner/3.jpg'),
    require('./img/banner/4.jpg')
];

export default class HomePage extends Component{

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
            var dataSource = new ViewPager.DataSource({
                pageHasChanged: (p1, p2) => p1 !== p2,
            });
        // 实际的DataSources存放在state中
            this.state = {
                dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
                <Image source={data} style={styles.page}/>
        );
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

    render() {

        return (
            <View style={{flex :1}}>
                <View style={{height : 130}}>
                    <ViewPager
                        style={{height:130}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>
                </View>
                <View style={styles.menuView}>
                    <MenuButton
                        showText="我的关注"
                        renderIcon={require('./img/home_icons/wdgz.png')}
                        tag="wdgz"
                        event={this._onMenuClick}
                    />
                    <MenuButton
                        renderIcon={require('./img/home_icons/wlcx.png')}
                        showText={'物流查询'}
                        tag={'wlcx'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('./img/home_icons/cz.png')}
                        showText={'充值'}
                        tag={'cz'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('./img/home_icons/dyp.png')}
                        showText={'电影票'}
                        tag={'dyp'}
                        event={this._onMenuClick}/>
                </View>
                <View style={styles.menuView}>
                    <MenuButton
                        showText={'游戏充值'}
                        renderIcon={require('./img/home_icons/yxcz.png')}
                        tag={'yxcz'}
                        event={this._onMenuClick}
                    />
                    <MenuButton
                        renderIcon={require('./img/home_icons/xjk.png')}
                        showText={'小金库'}
                        tag={'xjk'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('./img/home_icons/ljd.png')}
                        showText={'领京豆'}
                        tag={'ljd'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('./img/home_icons/gd.png')}
                        showText={'更多'}
                        tag={'gd'}
                        event={this._onMenuClick}/>
                </View>
            </View>
            )
        }
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch',
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    },
});