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
    ListView,
    TouchableOpacity,
    ScrollView,
    RefreshControl
} from 'react-native';

import OrderMenuItem from './OrderMenuItem';

import RefreshListView from '../../widget/RefreshListView';
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell';
import Api from '../../utils/Api';
import SpacingView from '../../widget/SpacingView';
import DetailCell from '../../widget/DetailCell';
import RefreshState from '../../utils/RefreshState';

export default class OrderPage extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: '订单',
        headerStyle: { backgroundColor: 'white' },
    });

    constructor(props: Object) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this.listView.startHeaderRefreshing();
    }

    async requestData() {
        try {
            let response = await fetch(Api.recommend);
            let json = await response.json();
            let dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            });
            // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
            dataList.sort(() => { return 0.5 - Math.random() });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataList)
            });
            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.NoMoreData)
            }, 500);
        }catch(e){
            console.log(e);
            this.listView.endRefreshing(RefreshState.Failure);
        }
    }


    renderHeader() {
        return (
            <View style={styles.container}>
                <DetailCell title='我的订单' subtitle='全部订单' style={{ height: 38 }} />
                <View style={styles.itemContainer}>
                    <OrderMenuItem title='待付款' icon={require('../../images/Order/order_tab_need_pay.png')} />
                    <OrderMenuItem title='待使用' icon={require('../../images/Order/order_tab_need_use.png')} />
                    <OrderMenuItem title='待评价' icon={require('../../images/Order/order_tab_need_review.png')} />
                    <OrderMenuItem title='退款/售后' icon={require('../../images/Order/order_tab_needoffer_aftersale.png')} />
                </View>
                <SpacingView />
                <DetailCell title='我的收藏' subtitle='查看全部' style={{ height: 38 }} />
            </View>
        );
    }

    render(){
        return (
            <View style={styles.container}>
                <RefreshListView
                    ref={(listView) => this.listView = listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <GroupPurchaseCell
                            info={rowData}
                            onPress={() => {
                                StatusBar.setBarStyle('default', false);
                                this.props.navigation.navigate('GroupPurchase', { info: rowData })
                            }}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                    renderHeader={() => this.renderHeader()}
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
    itemContainer: {
        flexDirection: 'row',
    },
});
