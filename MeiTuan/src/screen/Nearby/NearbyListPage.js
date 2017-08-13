/**
 * Created by LCN on 2017/8/12 0012.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ListView,
    Image,
    StatusBar
} from 'react-native';

import RefreshListView from '../../widget/RefreshListView';
import NearbyCell from './NearbyCell';
import NearbyHeaderView from './NearbyHeaderView';
import RefreshState from '../../utils/RefreshState';
import Api from '../../utils/Api';
import Screen from '../../utils/Screen';

export default class NearbyListPage extends Component{

    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows([]),
            typeIndex: 0,
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

    render(){
        return (
            <RefreshListView
                ref={(listView) => this.listView = listView}
                dataSource={this.state.dataSource}
                renderRow={(rowData)=>(
                    <NearbyCell
                         info={rowData}
                         onPress={() => {
                            this.props.navigation.navigate('GroupPurchase', { info: rowData })
                        }}
                    />
                )}

                renderHeader={() =>
                    <NearbyHeaderView
                        titles={this.props.types}
                        selectedIndex={this.state.typeIndex}
                        onSelected={(index) => {
                            if (index != this.state.typeIndex) {
                                this.setState({ typeIndex: index });
                                this.listView.startHeaderRefreshing();
                            }
                        }}
                    />
                }

                onHeaderRefresh={() => this.requestData()}
            />
        );
    }

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
