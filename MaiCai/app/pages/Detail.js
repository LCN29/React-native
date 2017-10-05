/**
 * Created by LCN on 2017/9/27 0027.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DetailHeader from '../components/headers/DetailHeader';
import BottomIndicator from '../components/BottomIndicator';
import Loading from '../components/Loading';
import Screen from '../utils/Screen';

import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-looped-carousel';

import { getProductDetail } from '../actions/actions';



class Detail extends Component{

    static navigationOptions = {
        header: (HeaderProps) => {
            return <DetailHeader navigation={HeaderProps} />
        }
    };

    componentDidMount() {
        let { productId } = this.props.navigation.state.params;
        this.props.action.getProductDetail(productId);
    }

    render(){

        let data = this.props.data;
        let detail = data.detail;
        let detailData;
        if (!data.isFetching) {
            detailData = detail.data.detail
        }

        return (
            <View style={styles.container}>
                {!data.isFetching ?
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.slideContainer}>
                            {this.renderSlides(detailData.image_list)}
                        </View>
                        <View style={styles.detailContainer}>
                            <Text style={styles.detailTitle}>{detailData.product_name}</Text>
                            <Text style={styles.detailSubTitle}>{detailData.spec}</Text>
                            <View style={styles.detailMoreInfo}>
                                <View style={styles.moreInfoMain}>
                                    <Text style={styles.priceCurrent}>￥{detailData.price}</Text>
                                    <Text style={styles.pricePrev}>￥{detailData.origin_price}</Text>
                                    {detailData.buy_limit ?
                                        <Text style={styles.buyLimit}>限购{detailData.buy_limit}份</Text>
                                        :
                                        null
                                    }
                                </View>
                                <Text style={styles.saleCount}>已售:{detailData.total_sales}</Text>
                            </View>
                        </View>
                        <View style={styles.paramContainer}>
                            <View style={styles.paramHeader}>
                                <Text style={styles.headerTitle}>规格</Text>
                            </View>
                            <View style={styles.paramTable}>
                                {
                                    detailData.propertys_array.map((elem, index) => {
                                        return (
                                            <View style={styles.paramItem} key={index}>
                                                <Text style={styles.label}>{elem.name}</Text>
                                                <Text style={styles.param}>{elem.value}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                        <BottomIndicator show="true"/>
                    </ScrollView>
                    :
                    <Loading/>
                }
            </View>
        );
    }

    renderSlides(data){
        let len = data.length;
        let bullets = len > 1;
        let slides = data.map((elem, index) => {
            return (
                <Image  key={index}  style={styles.slide} source={{ uri: elem}} />
            );
        });

        return (
            <Carousel
                style={styles.carousel}
                delay={3000}
                autoplay = {true}
                bullets={bullets}
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
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },

    slideContainer : {
        width : Screen.width,
        height : Screen.width,
    },
    slide :{
        flex: 1,
        resizeMode: 'contain',
        height: Screen.width,
    },
    carousel : {
        width : Screen.width,
        height : Screen.width,
    },
    detailContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#efefef',
        backgroundColor: '#fff'
    },
    detailTitle: {
        fontSize: 18,
        color: '#333'
    },
    detailSubTitle: {
        marginTop: 5,
        fontSize: 14
    },
    detailMoreInfo: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    moreInfoMain: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    priceCurrent: {
        fontSize: 14,
        color: '#f95824'
    },
    pricePrev: {
        marginLeft: 6,
        fontSize: 10,
        color: '#b2b2b2',
        textDecorationLine: 'line-through'
    },
    buyLimit: {
        paddingHorizontal: 4,
        marginLeft: 6,
        fontSize: 10,
        backgroundColor: '#f85825',
        color: '#fff'
    },
    saleCount: {
        fontSize: 12,
        color: '#999'
    },
    paramContainer: {
        marginVertical: 6,
        backgroundColor: '#fff',
        padding: 10
    },
    paramHeader: {
        paddingVertical: 10
    },
    headerTitle: {
        fontSize: 18,
        color: '#333'
    },
    paramItem: {
        flexDirection: 'row',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#efefef'
    },
    param: {
        fontSize: 14,
        color: '#666'
    },
    label: {
        width: 100,
        fontSize: 14,
        color: '#666'
    }
});

const mapStateToProps = state => {
    return {
        data: state.detail
    }
};

const mapDispatchToProps = (dispatch) => ({
    action : bindActionCreators( {getProductDetail}, dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(Detail);