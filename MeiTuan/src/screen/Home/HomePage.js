/**
 * Created by LCN on 2017/8/9 0009.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';

import NavigationItem from '../../widget/NavigationItem';

import Colors from '../../utils/Colors';
import Api from '../../utils/Api';
import Screen from '../../utils/Screen';

import HomeMenuView from './HomeMenuView';
import HomeGridView from './HomeGridView';
import SpacingView from '../../widget/SpacingView';

import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell';


export default class HomePage extends Component{


    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image style={styles.searchIcon} source={require('../../images/Home/search_icon.png')}/>
                <Text style={styles.titleFont} >一点点</Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../images/Home/message_white.png')}
                onPress={()=>{alert("消息")}}
            />
        ),
        headerLeft : (
            <NavigationItem
                title='福州'
                titleStyle={{ color: 'white' }}
                onPress={()=>{alert("定位")}}
            />
        ),
        headerStyle:{ backgroundColor:Colors.theme}
    });

    constructor(props){
        super(props);
        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        };

    }

    renderCell(item: Object){
        return (
            <GroupPurchaseCell
                info={item}
                onPress={(msg)=>this.onCellSelected(msg)}
            />
        );
    }

    keyExtractor(index: number) {
        return index;
    }

    getHeader(){
        return (
            <View>
                <HomeMenuView menuInfos={Api.menuInfos}/>
                <SpacingView/>
                <HomeGridView  infos={this.state.discounts} onPress={(discount)=>{this.onGridSelected(discount)}}/>
                <SpacingView />
                <View style={styles.recommendHeader}>
                    <Text style={styles.hintFont}>猜你喜欢</Text>
                </View>
            </View>
        );
    }

    requestData(){
        this.setState({
            refreshing: true,
        });

        this.requestDiscount();
        this.requestRecommend();
    }

    async requestDiscount(){
        try {
            let response = await fetch(Api.discount);
            let json = await response.json();
            this.setState({ discounts: json.data});
        }catch (error){
            console.log(error);
        }
    }

    async requestRecommend(){
        try {
            let response = await fetch(Api.recommend);
            let json = await response.json();
            console.log(json);
            let dataList = json.data.map((info)=>{
                return {
                    id : info.id,
                    imageUrl : info.squareimgurl,
                    title: info.mname,
                    price: info.price,
                    subtitle:`[${info.range}]${info.title}`,
                }
            });

            this.setState({
                dataList: dataList,
                refreshing: false,
            });
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.requestData();
    }

    onCellSelected( info : Object){
        StatusBar.setBarStyle('default', false);
        this.props.navigation.navigate('GroupPurchase', { info: info })
    };

    onGridSelected ( discount : Object) {

        let location = discount.tplurl.indexOf('http');
        let url = discount.tplurl.slice(location);
        this.props.navigation.navigate('Web',{ title:discount.title,url : url });
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    keyExtractor={(item,index)=>this.keyExtractor(index)}
                    renderItem={({item})=>this.renderCell(item)}
                    ListHeaderComponent = {()=>this.getHeader()}
                    onRefresh={()=>{this.requestData()}}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: Colors.background,
    },
    searchBar: {
        width : Screen.width*0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon:{
        width: 20,
        height: 20,
        margin: 5,
    },
    titleFont : {
        fontSize: 13,
        color: '#777777',
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: Screen.onePixel,
        borderColor: Colors.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    hintFont : {
        fontSize: 14,
        color: '#222222',
    }
});
