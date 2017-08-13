/**
 * Created by LCN on 2017/8/10 0010.
 */

import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ListView,
    Image,
    InteractionManager,
} from 'react-native';

import GroupPurchaseCell from './GroupPurchaseCell';


import NavigationItem from '../../widget/NavigationItem';
import SpacingView from '../../widget/SpacingView';
import RefreshListView from '../../widget/RefreshListView';
import Button from '../../widget/Button';
import Separator from '../../widget/Separator';

import Screen from '../../utils/Screen';
import Colors from '../../utils/Colors';
import RefreshState from '../../utils/RefreshState';
import {recommendUrlWithId} from '../../utils/Api';

    /*
        Interactionmanager可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。
        这样可以保证JavaScript动画的流畅运行。
    */

export default class GroupPurchasePage extends Component {

    static navigationOptions = ({navigation})=>({
        headerTitle: '团购详情',
        headerStyle: { backgroundColor: 'white' },
        headerRight: (
            <NavigationItem
                icon={require('../../images/Public/icon_navigationItem_share.png')}
                onPress={()=>alert("点击了按钮")}
            />
        ),
    });

    constructor(props){
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            info: {},
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.listView.startHeaderRefreshing();
        });
    }

    renderHeader() {
        let info = this.props.navigation.state.params.info;
        return (
            <View>
                <View>
                    <Image style={styles.banner} source={{ uri: info.imageUrl.replace('w.h', '480.0') }} />
                    <View style={styles.topContainer}>
                        <Text style={[styles.middleHeader,{ color:Colors.theme }]}>￥</Text>
                        <Text style={[styles.bigHeader,{ marginBottom: -8 }]} >{info.price}</Text>
                        <Text style={[styles.sectionFont,{ marginLeft: 10 }]}>门市价：￥{(info.price * 1.1).toFixed(0)}</Text>
                        <View style={{ flex: 1 }} />
                        <Button title='立即抢购' style={{ color: 'white', fontSize: 18 }} containerStyle={styles.buyButton}/>
                    </View>
                </View>
                <Separator />
                <View style={styles.tagContainer}>
                    <Image style={{ width: 20, height: 20 }} source={require('../../images/Public/icon_deal_anytime_refund.png')} />
                    <Text style={[styles.sectionFont,{ color:'#89B24F',marginLeft : 4}]} >随时退</Text>
                    <View style={{ flex: 1 }} />
                    <Text style={styles.sectionFont} >已售{1234}</Text>
                </View>
                <SpacingView />
                <View style={styles.tipHeader}>
                    <Text style={styles.middleHeader}>看了本团购的用户还看了</Text>
                </View>
            </View>
        );
    }

    requestData(){
        this.requestDetail();
        this.requestRecommend();
    }

    requestDetail() {
        //原详情接口已经被美团关掉，这里暂时从上一级列表中获取详情数据
    }

    async requestRecommend() {
        try {
            let info = this.props.navigation.state.params.info;
            let response = await fetch(recommendUrlWithId(info.id));
            let json = await response.json();
            /* 这个接口也已经关闭了,*/
             let dataList = json.data.deals.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.imgurl,
                    title: info.brandname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataList)
            });
            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.NoMoreData)
            }, 500);
        }catch (e){
            console.log(e);
            this.listView.endRefreshing(RefreshState.Failure);
        }
    }

    render(){
        return (
            <View>
                <RefreshListView
                    ref={(listView)=>{this.listView = listView}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>( <GroupPurchaseCell info={rowData} onPress={() => this.props.navigation.navigate('GroupPurchase', { info: rowData })}/>)}
                    renderHeader={() => this.renderHeader()}
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    banner: {
        width: Screen.width,
        height: Screen.width * 0.5
    },
    topContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buyButton: {
        backgroundColor: '#fc9e28',
        width: 94,
        height: 36,
        borderRadius: 7,
    },
    tagContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    tipHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: Screen.onePixel,
        borderColor: Colors.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    smallHeader : {
        fontSize: 14,
        color: '#222222',
    },
    middleHeader : {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    bigHeader : {
        fontSize: 40,
        color: Colors.theme,
    },
    sectionFont : {
        fontSize: 13,
        color: '#777777',
    }
});