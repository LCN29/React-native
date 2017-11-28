/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import Config from '../../../util/Config';
import Screen from '../../../util/Screen';

import VideoPreviewItem from '../../../component/Recommend/VideoPreviewItem';

/*
    每个视图中图片的 宽高比为 5;3, 没想到如何获取一个控件的宽，此处通过计算后传递了
  * */


import RefreshListView from '../../../component/RefreshListView';
import RefreshState from '../../../util/RefreshState';

export default class RecommendPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    id : 1,
                    uri : 'http://i0.hdslb.com/bfs/archive/3cc48c1362dca273845c46bd69baa94a80885b75.png@480w_300h_1e_1c.webp',
                    playAmount : '5.4万',
                    barrageAmount : '303',
                    time : '01:58',
                    title : '不正常的英灵召唤3 (切嗣 ：up请放过我)',
                    kind : ['手机游戏','卫宫切嗣']
                },

                {
                    id : 2,
                    uri : 'http://i1.hdslb.com/bfs/archive/519590b0acf678952354e4402333c4e71dbd1813.jpg',
                    playAmount : '3.0万',
                    barrageAmount : '1301',
                    time : '04:46',
                    title : '【まふまふ】打上花火 -Arrange ver.-',
                    kind : ['音乐','翻唱']
                },

                {
                    id : 3,
                    uri : 'http://i2.hdslb.com/bfs/archive/15b1a2c6dc9bd58e54c68963d5bcfb9bd46ae751.jpg',
                    playAmount : '11.3万',
                    barrageAmount : '1617',
                    time : '03:49',
                    title : '【茶理理】火影忍者Firewill【原创同人曲】',
                    kind : ['音乐','原创音乐 ']
                },

                {
                    id : 4,
                    uri : 'http://i1.hdslb.com/bfs/archive/4dd519bb96771f006879aeaefe8e8061500552ba.jpg',
                    playAmount : '11.9万',
                    barrageAmount : '1219',
                    time : '02:44',
                    title : '【灯泡动画】惠惠一发爆炎炸掉了罗兹瓦尔宅邸！',
                    kind : ['动画','手书配音']
                },

                {
                    id : 5,
                    uri : 'http://i0.hdslb.com/bfs/archive/f31e0091dd9ddf886674b308d1096bb6c74fb55f.jpg',
                    playAmount : '2.5万',
                    barrageAmount : '1030',
                    time : '23:59',
                    title : '【补番推荐】国家欠我一个这样的妹妹',
                    kind : ['动画','综合 ']
                },

                {
                    id : 6,
                    uri : 'http://i0.hdslb.com/bfs/archive/0d9a141a091c96ecd7539f6d314a89ae21661c99.jpg',
                    playAmount : '2.8万',
                    barrageAmount : '449',
                    time : '01:23',
                    title : '【勝デク 】·恋愛裁判·',
                    kind : ['动画','手书配音']
                },
                {
                    id : 7,
                    uri : 'http://i2.hdslb.com/bfs/archive/a569c16c2fac918bc74592ab90f46c60674201e3.jpg@480w_300h_1e_1c.webp',
                    playAmount : '6.7万',
                    barrageAmount : '2680',
                    time : '12:19',
                    title : '【萌妹盘点】说了那么久德国骨科！骨科到底是个啥?妹文化从零到邪教的发展史',
                    kind : ['综合','我的妹妹不可能那么可爱']
                },
                {
                    id : 8,
                    uri : 'http://i1.hdslb.com/bfs/archive/e9c1912e2631ffd8f5d4feaf9a58867dd2894d0a.jpg@480w_300h_1e_1c.webp',
                    playAmount : '3.1万',
                    barrageAmount : '552',
                    time : '07:23',
                    title : '【fgo联动魔法使之夜】官方不出我自己动手系列',
                    kind : ['手机游戏','Fate/Grand Order']
                },
            ],
        };
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerFont} onPress={()=>{this.refresh()}}>综合</Text>
                    <View style={styles.icons}>
                        <TouchableWithoutFeedback onPress={()=>this.showRank()}>
                            <Image source={require('../../../img/recommend/ic_index_rank.png')} style={styles.icon} />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>this.showLabel()}>
                            <Image source={require('../../../img/recommend/ic_index_attention.png')} style={styles.icon} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <RefreshListView
                    ref={(listView) => this.listView = listView}
                    renderItem = {({item})=>this._renderItem(item)}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    data = {this.state.data}
                    horizontal={false}
                    numColumns={2}
                    columnWrapperStyle={{
                        justifyContent : 'space-between',
                        marginTop : 10,
                        paddingLeft : 10,
                        paddingRight : 10,
                    }}
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }

    _renderItem(item){
        return (
            <VideoPreviewItem height={(Screen.width-28)/10*3} width={(Screen.width-28)/2} info={item}/>
        );
    }

    refresh(){
        alert('点击了综合');
    }

    showRank(){
        this.props.showRank();
    }

    showLabel(){
        this.props.showLabel();
    }

    async requestData(){
        let url = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';
        try {
            let response = await fetch(url);
            let json = await response.json();
            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.NoMoreData)
            }, 500);
        }catch(e){
            console.log(e);
            this.listView.endRefreshing(RefreshState.Failure);
        }
    }

};

const styles = StyleSheet.create({
    container : {
        backgroundColor : Config.themeColor,
        flex : 1,
    },
    header : {
        flexDirection : 'row',
        backgroundColor: Config.themeColor,
        borderBottomColor : '#4e4e4e',
        borderBottomWidth : Screen.onePixel,
        alignItems : 'center',
        justifyContent: 'space-between',
        height : 40,
    },
    headerFont : {
        color : '#6f6f6f', fontSize : 14,
        paddingLeft: 20,
    },
    icons : {
        flexDirection: 'row',
        paddingRight: 20,
    },
    icon : {
        marginLeft : 18,
        height : 20,
        width : 20,
    }
});