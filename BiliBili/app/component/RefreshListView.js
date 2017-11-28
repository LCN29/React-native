/**
 * Created by LCN on 2017/8/21 0021.
 */

import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet,
    RefreshControl,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

import RefreshState from '../util/RefreshState' ;

export default class RefreshListView extends Component {
    static propTypes = {
        onHeaderRefresh: React.PropTypes.func.isRequired,
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

    ///////////////////
    componentDidMount() {
        this.onHeaderRefresh();
    }

    render(){
        return (
            <FlatList
                {...this.props}
                onRefresh = {()=> this.onHeaderRefresh()}
                refreshing = {this.state.headerState === RefreshState.Refreshing }
                onEndReachedThreshold={10}
                onEndReached={this.onFooterRefresh()}
                ListFooterComponent={() => this.renderFooter()}
            />
        );
    }

    // 下拉刷新
    onHeaderRefresh(){
        if (this.shouldStartHeaderRefreshing()) {
            this.startHeaderRefreshing();
        }
    }


    shouldStartHeaderRefreshing(){
        if (this.state.headerState === RefreshState.Refreshing || this.state.footerState === RefreshState.Refreshing) {
            // 下拉是否应该刷新  头部或底部正在刷新，不执行刷新
            return false;
        }
        return true;
    }

    // 开始下拉加载
    startHeaderRefreshing() {
        this.setState({ headerState: RefreshState.Refreshing });
        this.props.onHeaderRefresh && this.props.onHeaderRefresh();
    }

    onFooterRefresh(){

    }

    //上拉加载
    renderFooter(){
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
        if (this.props.data.length === 0) {
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
        if (this.props.data.length == 0) {
            footerState = RefreshState.Idle;
        }
        this.setState({
            headerState: RefreshState.Idle,
            footerState: footerState
        });

        alert('加载完成');
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
        color: '#fff'
    }
});
