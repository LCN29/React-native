/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import Config from '../../../util/Config';
import Screen from '../../../util/Screen';

import SelectedArea from '../../../component/ChaseDramaHeader/SelectedArea';
import AreaItem from '../../../component/ChaseDramaHeader/AreaItem';

import RefreshListView from '../../../component/RefreshListView';
import RefreshState from '../../../util/RefreshState';

export default class ChaseDramaPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            headerItem : [
                {
                    icon: require('../../../img/ChaseDrama/bangumi_follow_home_ic_mine.png'),
                    title : '我的收藏',
                    data: [
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/1804e361cc9fefad1fd8be8245f3b35ff685ae1a.jpg_225x300.jpg',
                            name : 'Fate/Apocrypha',
                            update : '更新至第9话',
                            num : '看到第9话'
                        },
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/a79e331b7443ed5df5a2acd345dc41d598d46ff9.jpg_225x300.jpg',
                            name : '欢迎来到实力至上主义的教室',
                            update : '更新至第7话',
                            num : '看到第7话'
                        }
                    ],
                },

                {
                    icon: require('../../../img/ChaseDrama/bangumi_follow_home_ic_bangumi.png'),
                    title : '番剧推荐',
                    data: [
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/3944fe0b84a5763cde6b0573773b89ba86b4321d.jpg_225x300.jpg',
                            name : 'Re:CREATORS',
                            num : '更新至第19话'
                        },
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/0b06b207c8f1dbbccdc475ed387ef8873deb21ac.jpg_225x300.jpg',
                            name : '骑士&魔法',
                            num : '更新至第8话'
                        },
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/78ef9dff0fb338e6e037332821aff4b1441b9d96.jpg_225x300.jpg',
                            name : '天使的3P!',
                            num : '更新至第7话'
                        },
                    ],
                    additional : {
                        img : 'http://i0.hdslb.com/bfs/bangumi/c6d492475a84365072cfb8f19d6a9661a5d0e58a.jpg@680w_200h_1e_1c.webp',
                        title : '一个东方的海上冒险故事',
                        content : '故事发生在一个东方幻想世界，千年前，五帝以神器守护夏大陆，后人继承神器，建立云垂帝国，如今，海面下波涛汹涌，危机又在酝酿...',
                    }
                },

                {
                    icon: require('../../../img/ChaseDrama/bangumi_follow_home_ic_domestic.png'),
                    title : '国产动画推荐',
                    data: [
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/f1065fd35c41856f917d88d8f6a8e9862e341c7b.jpg_225x300.jpg',
                            name : '一人之下 第二季',
                            num : '更新至概念PV2'
                        },
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/2112a9d4948d0b71149fd03de824b7e3b25fbbfe.jpg_225x300.jpg',
                            name : '黑白无双 第二季',
                            num : '更新至5话'
                        },
                        {
                            img: 'https://i0.hdslb.com/bfs/bangumi/f8dc9bd274b6f1956cfa077119917cf3bc8d3c3a.jpg_225x300.jpg',
                            name : '狐妖小红娘 日语版',
                            num : '更新至9话'
                        },
                    ],
                    additional : {
                        img : 'http://i1.hdslb.com/bfs/bangumi/246b409a13e26637bcb29d3cd35d2129e2b9e299.jpg@680w_200h_1e_1c.webp',
                        title : '七夕的狗粮我先干为敬了！',
                        content : '来来来！有对象的人可以来看看这几部动画！老司机们教你如何花式谈情说爱!来来来！没对象的人也可以来看看这几部动画！咱没对象没约会还不能池口粮了...'
                    }
                }
            ],
            contentData : [
                {
                    id : 1,
                    img : 'http://i1.hdslb.com/bfs/bangumi/980da0f21899a63849549c176f4d4a1ecaca4394.jpg',
                    title : '快来练习空手接白刃！',
                    content : '李靖妻子怀胎三年即将产子，李靖焦急不安，夫人所生何人？床边的球是个男球还是女球？李靖将如何面对自己的第三个孩子...'
                },
                {
                    id : 2,
                    img : 'http://i1.hdslb.com/bfs/bangumi/4186d15a82056ac9be75059da3f049cbfe89f53c.jpg@680w_200h_1e_1c.webp',
                    title : '【咨询档】2017年第34周',
                    content : '准备开学了？'
                },
                {
                    id : 3,
                    img : 'http://i1.hdslb.com/bfs/bangumi/d5310f5e2a5f54afdea45c5d0f3e72e8a01acaab.jpg@680w_200h_1e_1c.webp',
                    title : '笑对阴天',
                    content : '三兄弟，立于天地之间'
                },
                {
                    id : 4,
                    img : 'http://i1.hdslb.com/bfs/bangumi/a5bb859923d7aa225a9dbab0696dee3c1cc8929a.jpg@680w_200h_1e_1c.webp',
                    title : '【AniKey vol.14】 徒然喜欢你',
                    content : '学不来，学不来ゞ(o｀Д´o) '
                },
                {
                    id : 5,
                    img : 'http://i1.hdslb.com/bfs/bangumi/0c6fefa5a7a8675548993044667c97953e9ce5bb.jpg@680w_200h_1e_1c.webp',
                    title : '【泡面档】 喵啊楞',
                    content : '外星来的（？）喵啊楞！ '
                },
                {
                    id : 6,
                    img : 'http://i1.hdslb.com/bfs/bangumi/6587328398dbab96d7df53607e24133efc82f238.jpg@680w_200h_1e_1c.webp',
                    title : '2017年中期推荐',
                    content : '7月番都快出播出一半啦/n来看看有什么好看的咯！ '
                }
            ]
        };
    }

    render(){
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref={(listView) => this.listView = listView}
                    renderItem = {({item})=>this._renderItem(item)}
                    ListHeaderComponent = { ()=>this._renderHeader()}
                    onHeaderRefresh={()=>this.requestData()}
                    showsVerticalScrollIndicator={false}
                    data = {this.state.contentData}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }

    _renderHeader(){
        return (
            <View>
                <SelectedArea/>
                { this.state.headerItem.map((elem,index)=>{
                    return (  <AreaItem data={elem} key={index}/> );
                })}
                <View style={styles.editorBar}>
                    <Image source={require('../../../img/ChaseDrama/bangumi_common_ic_editor_recommend.png')} style={styles.editorIcon} />
                    <Text style={styles.editorFont}>编辑推荐</Text>
                </View>
            </View>
        );
    }

    _renderItem(item){
        return (
            <TouchableHighlight onPress={()=>{ this.editorEvent(item.title)}} style={styles.itemContainer} underlayColor='#373737'>
                <View style={{backgroundColor : '#3b3b3b'}}>
                    <Image source={{uri : item.img}} style={styles.itemImg}/>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemContent}>{item.content}</Text>
                </View>
            </TouchableHighlight>
        );
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

    editorEvent(title ){
        alert(title);
    }
};

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#2c2c2c',
        flex : 1,
    },
    editorBar : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingLeft : 18,
        marginTop : 10,
        backgroundColor : '#373737',
        paddingTop : 18,
    },
    editorIcon : {
        height : 23,
        width : 23,
        marginRight : 6,
    },
    editorFont : {
        color : '#9b9b9b',
        fontSize : 13,
    },

    itemContainer : {
        paddingLeft : 18,
        paddingTop : 18,
        paddingRight : 18,
        backgroundColor : '#373737',
        borderRadius: 4,
    },
    itemImg : {
        width : Screen.width-36,
        height : 100,
        borderRadius: 4,
    },
    itemTitle : {
        color : '#989898',
        fontSize : 13,
        lineHeight : 13,
        marginTop : 10,
        marginBottom : 10,
        paddingLeft : 10,
    },
    itemContent : {
        color : '#989898',
        fontSize : 12,
        lineHeight : 14,
        paddingLeft : 10,
        marginBottom : 10,
    }
});