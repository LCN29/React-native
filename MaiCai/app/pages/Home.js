/**
 * Created by LCN on 2017/9/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import Carousel from 'react-native-looped-carousel';


import SearchHeader from '../components/headers/SearchHeader';
import Loading from '../components/Loading';
import Block from '../components/Block';
import ScrollList from '../components/ScrollList';
import BottomIndicator from '../components/BottomIndicator';
import Screen from '../utils/Screen';
import * as ACTIONS from '../actions/actions';


class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            location: {},
        }
    }

    componentDidMount() {
        // 开启gps定位 ，定位结果为经纬度 所以此处为虚设的
        this.getPosition();
        this.props.actions.getHomeData();
    }

    render(){

        let { navigation,data ,actions} = this.props;
        let homeData = {};
        let isFetching = data.isFetching;
        if (data.homeData.data) {
            homeData = data.homeData.data.list
        }

        return (
            <View style={styles.container}>
                <SearchHeader
                    showLocation={true}
                    navigation={navigation}
                    searchType="product"
                    actions = {actions}
                />
                {!homeData.length ?
                    <Loading/>
                    :
                    <ScrollView showsVerticalScrollIndicator={false}>
                       <View>
                           {this.renderSlides(homeData[0].icon_list)}
                       </View>
                        <Image  resizeMethod="resize"  style={styles.banner}  source={{ uri: 'https://ddimg.ddxq.mobi/bc27ddc54e92b1497233676444.png' }} />
                        {this.renderMenus(homeData[2].icon_list)}
                        {this.renderBlocks(homeData)}
                        <BottomIndicator show="true" />
                    </ScrollView>
                }
            </View>
        );
    }

    //轮播栏
    renderSlides(data){

        let { navigation } = this.props;
        let slides = data.map((elem, index)=>{
            let url = elem.link.data && elem.link.data.url || '';

            return (
                <TouchableOpacity
                    key={elem.meteria_id}
                    style={{ flex: 1 }}
                    activeOpacity={1}
                    focusedOpacity={1}
                    onPress={ ()=>{navigation.navigate('Web', { url })} }
                >
                    <Image key={elem.meteria_id} style={styles.slide} source={{uri : elem.icon_url}}/>
                </TouchableOpacity>
            );
        } );

        return (
            <Carousel
                style={styles.carousel}
                delay={3000}
                autoplay ={true}
                bullets
                bulletStyle={{
                    margin: 5,
                    width: 6,
                    height: 6,
                    backgroundColor: '#ccc',
                    borderColor: '#ccc'
                }}
                chosenBulletStyle={{
                    margin: 5,
                    width: 6,
                    height: 6,
                    backgroundColor: '#3cb963',
                    borderColor: '#3cb963'
                }}
                bulletsContainerStyle={{
                    bottom: -10
                }}
            >
                {slides}
            </Carousel>
        );
    }

    //菜单栏
    renderMenus(data){
        let { navigation} = this.props;

        let menus = data.map((elem,index)=>{
            return (
                <TouchableOpacity
                    key={elem['meteria_id']}
                    activeOpacity={1}
                    focusedOpacity={1}
                    onPress={()=>{ navigation.navigate('Category', {'categoryId': elem['meteria_id']}); } }
                >
                    <View style={styles.menu}>
                        <Image  resizeMethod="resize" style={styles.menuImage}  source={{uri: elem.icon_url}} />
                        <Text style={styles.menuText}>{elem.name}</Text>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View style={styles.menus}>
                {menus}
            </View>
        )
    }

    //内容区域
    renderBlocks(data){
        let navigation = this.props.navigation;

        /*  filter 筛选数组 参数为一个函数 函数里面为条件
        *  let newarr = arr.filter((item)=>{
        *       return item.id === 1;
        *  });
        *
        *  parseInt( 参数1， 参数2) 参数2 ： 解析出来的为几位进制的数字，需要转为10进制
        * */

        let blocksData = data.filter( ( item)=>{
            return parseInt( item.type, 10) === 5 || parseInt(item.type,10) ===3;
        } );

        let blocks = blocksData.map((elem,index )=>{
            let type = parseInt(elem.type, 10);
            return (
               <Block
                   key={type === 5 ? elem.meteria_id : elem.promotion_id}
                   title={type === 5 ? elem.title : "限时抢购"}
                   subTitle={elem.sub_title}
                   type={type === 5 ? 2 : 1}
                   link="更多"
               >
                   <ScrollList
                       products={elem.product_list}
                       navigation={navigation}
                   />
               </Block>
            );
        });

        return (
            <View>
                {blocks}
            </View>
        );
    }

    //定位信息
    getPosition(){
        // 系统全局有一个 navigator

        /*
            国内手机都是去掉google play serviceGoogle的网络定位依赖于此service以及要连Google服务器查询
            如果没有此service，则gps开着也能查询到位置
            但如果关了gps使用网络定位（wifi和lbs），
            是需要从Google服务器查询的，行货手机一般都查不了
        */

        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const positionData = position.coords;
                console.log(positionData);

                this.setState({
                    location: positionData
                });
            },
            (error)=>{
                console.log('定位失败：' + JSON.stringify(error.message))
            },
            {
                timeout: 20000,
                maximumAge: 1000,           /*资源最大允许的生命周期*/
                enableHighAccuracy: false,  /*是否允许使用高精度*/
            }
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    slide: {
        flex: 1,
        resizeMode: 'contain',
        height: Screen.width / 2,
    },
    carousel : {
        width : Screen.width,
        height: Screen.width/2,
    },
    banner: {
        height: 35,
    },
    menu: {
        width : (Screen.width - 20) / 4,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    menuImage : {
        width: 45,
        height: 45
    },
    menuText: {
        fontSize: 12,
        color: '#555'
    },
    menus : {
        marginVertical: 8,
        paddingHorizontal: 10,
        paddingTop: 0,
        paddingBottom: 20,
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#fff'
    }
});


const mapStateToProps = state => {
    return {
        data: state.home
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators( ACTIONS, dispatch),
});



export default connect(mapStateToProps,mapDispatchToProps)(Home);
