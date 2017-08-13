
import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    RefreshControl,
    ListView,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import RefreshState from '../utils/RefreshState';

export default class RefreshListView extends Component {

    static propTypes = {
        onHeaderRefresh : React.PropTypes.func,
        onFooterRefresh: React.PropTypes.func,
    };

    static defaultProps = {
        footerRefreshingText: '数据加载中……',
        footerFailureText: '点击重新加载',
        footerNoMoreDataText: '已加载全部数据'
    };

    constructor(props){
        super(props);
        this.state={
            headerState: RefreshState.Idle,
            footerState: RefreshState.Idle,
        };
    }

    // 下拉刷新时，执行的事件
    onHeaderRefresh(){
        if (this.shouldStartHeaderRefreshing()) {
            this.startHeaderRefreshing();
        }
    }
    // 下拉是否应该刷新
    shouldStartHeaderRefreshing(){
        if (this.state.headerState === RefreshState.Refreshing || this.state.footerState === RefreshState.Refreshing) {
            return false
        }
        return true;
    }

    // 开始下拉加载
    startHeaderRefreshing() {
        this.setState({ headerState: RefreshState.Refreshing });
        this.props.onHeaderRefresh && this.props.onHeaderRefresh();
    }

    //上来加载
    onFooterRefresh(){
        if (this.shouldStartFooterRefreshing()) {
            this.startFooterRefreshing();
        }
    }

    shouldStartFooterRefreshing() {
        if (this.state.headerState === RefreshState.Refreshing || this.state.footerState === RefreshState.Refreshing) {
            return false;
        }
        if (this.state.footerState === RefreshState.Failure || this.state.footerState === RefreshState.NoMoreData) {
            return false;
        }
        if (this.props.dataSource.getRowCount() === 0) {
            return false;
        }
        return true;
    }

    // 开始上来加载
    startFooterRefreshing(){
        this.setState({ footerState: RefreshState.Refreshing });
        this.props.onFooterRefresh && this.props.onFooterRefresh();
    }

    // 重新渲染底部
    renderFooter(){
        let footer = null;
        switch (this.state.footerState) {
            case RefreshState.Idle:
                break;
            case RefreshState.Failure : {
                footer = (
                    <TouchableOpacity style={styles.footerContainer} onPress={() => this.startFooterRefreshing()}>
                        <Text style={styles.footerText}>
                            {this.props.footerFailureText}
                        </Text>
                    </TouchableOpacity>
                );
                break;
            }
            case RefreshState.Refreshing: {
                /* ActivityIndicator 显示一个圆形的loading提示符号。*/
                footer =(
                    <View style={styles.footerContainer} >
                        <ActivityIndicator size="small" color="#888888" />
                        <Text style={styles.footerText}>
                            {this.props.footerRefreshingText}
                        </Text>
                    </View>
                );
                break;
            }

            case RefreshState.NoMoreData: {
                footer = (
                    <View style={styles.footerContainer} >
                        <Text style={styles.footerText}>
                            {this.props.footerNoMoreDataText}
                        </Text>
                    </View>
                );
                break;
            }
        }
        return footer;
    }

    // 加载完成
    endRefreshing(refreshState) {
        if (refreshState == RefreshState.Refreshing) {
            return;
        }
        let footerState = refreshState;
        if (this.props.dataSource.getRowCount() == 0) {
            footerState = RefreshState.Idle;
        }
        this.setState({
            headerState: RefreshState.Idle,
            footerState: footerState
        });
    }

    render(){

        /*
        * onEndReached  列表被滚动到距离最底部不足  onEndReachedThreshold  个像素的距离时调用
        * renderFooter  每次渲染过程中底部都重新渲染
        */
        return (
            <ListView
                {...this.props}
                enableEmptySections ={true}
                refreshControl={
                    <RefreshControl
                        tintColor='gray'
                        refreshing = {this.state.headerState === RefreshState.Refreshing }
                        onRefresh = {()=> this.onHeaderRefresh()}
                    />
                }
                onEndReachedThreshold={10}
                onEndReached={() => this.onFooterRefresh()}
                renderFooter={() => this.renderFooter()}
            />
        );
    }
};

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
});