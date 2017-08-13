/**
 * Created by LCN on 2017/8/9 0009.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity, ScrollView,
    RefreshControl
} from 'react-native';

import NavigationItem from '../../widget/NavigationItem';

import Colors from '../../utils/Colors';
import Screen from '../../utils/Screen';
import SpacingView from '../../widget/SpacingView';
import DetailCell from '../../widget/DetailCell';

export default class MinePage extends Component{

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../images/Mine/icon_navigationItem_set_white.png')}
                    onPress={()=>alert("点击了设置")}/>
                <NavigationItem
                    icon={require('../../images/Mine/icon_navigationItem_message_white.png')}
                    onPress={()=>alert("点击了消息")}/>
            </View>
        ),
        headerStyle: { backgroundColor: Colors.theme },
    });

    constructor(props: Object) {
        super(props);
        this.state = {
            isRefreshing: false
        }
    }

    renderHeader(){
        return (
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <Image style={styles.avatar} source={require('../../images/Mine/avatar.png')} />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{color:'white', fontSize: 15,fontWeight: 'bold',}} >素敌</Text>
                            <Image style={{ marginLeft: 4 }} source={require('../../images/Mine/beauty_technician_v15.png')} />
                        </View>
                        <Text style={{ fontSize: 13,color: 'white', marginTop: 4 }}>个人信息 ></Text>
                    </View>
                </View>
            </View>
        );
    }
    onHeaderRefresh(){
        this.setState({ isRefreshing: true });

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000);
    }

    renderCells(){
        let cells = [];
        let dataList = this.getDataList();
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i];
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />;
                cells.push(cell)
            }
            cells.push(<SpacingView key={i} />)
        }

        return (
            <View style={{ flex: 1 }}>
                {cells}
            </View>
        );
    }

    getDataList() {
        return (
            [
                [
                    { title: '我的钱包', subtitle: '办信用卡', image: require('../../images/Mine/icon_mine_wallet.png') },
                    { title: '余额', subtitle: '￥95872385', image: require('../../images/Mine/icon_mine_balance.png') },
                    { title: '抵用券', subtitle: '63', image: require('../../images/Mine/icon_mine_voucher.png') },
                    { title: '会员卡', subtitle: '2', image: require('../../images/Mine/icon_mine_membercard.png') }
                ],
                [
                    { title: '好友去哪', image: require('../../images/Mine/icon_mine_friends.png') },
                    { title: '我的评价', image: require('../../images/Mine/icon_mine_comment.png') },
                    { title: '我的收藏', image: require('../../images/Mine/icon_mine_collection.png') },
                    { title: '会员中心', subtitle: 'v15', image: require('../../images/Mine/icon_mine_membercenter.png') },
                    { title: '积分商城', subtitle: '好礼已上线', image: require('../../images/Mine/icon_mine_member.png') }
                ],
                [
                    { title: '客服中心', image: require('../../images/Mine/icon_mine_customerService.png') },
                    { title: '关于美团', subtitle: '我要合作', image: require('../../images/Mine/icon_mine_aboutmeituan.png') }
                ]
            ]
        )
    }

    render(){
        return (
            <View style={{ flex: 1, backgroundColor: Colors.background }}>
                <View style={{ position: 'absolute', width: Screen.width, height: Screen.height / 2, backgroundColor: Colors.theme }} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'/>
                    }>
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.theme,
        paddingBottom: 20
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});
