/**
 * Created by LCN on 2017/9/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as ACTIONS from '../actions/actions';
import SearchHeader from '../components/headers/SearchHeader';
import Loading from '../components/Loading';
import BottomIndicator from '../components/BottomIndicator';
import Screen from '../utils/Screen';



class Category extends Component{

    constructor(){
        super();
        this.state = {
            activeCateIndex: 0,
            categoryId: ''
        }
    }

    componentDidMount() {
        let navParam = this.props.navigation.state.params;
        let categoryId = navParam && navParam.categoryId || '58fd69dc936edf42508b48de';
        this.props.actions.getCategories();
        this.props.actions.getCategoryDetail('58fd69dc936edf42508b48de');
    }

    render(){

        let { categories,navigation } = this.props;

        return (
            <View style={styles.container}>
                <SearchHeader navigation={navigation} searchType="product"/>
                <View style={styles.wrapper}>
                    {categories.categories && categories.categories.data ?
                        this.renderCategories(categories.categories.data.cate)
                        :
                        null
                    }

                    {
                        this.renderPage()
                    }
                </View>
            </View>
        );
    }

    renderCategories(data){

        let activeCateIndex = this.state.activeCateIndex;

        let cates = data.map((elem, index) => {

            let active = index === activeCateIndex ? styles.menuActive : null;
            return (
                <TouchableOpacity
                    key={elem.id}
                    activeOpacity={1}
                    focusedOpacity={1}
                    onPress={() => {this.handleCategoryPress(elem.id, index)}}>
                    <View style={[styles.menu, active]}>
                        <Text style={[styles.menuText]}>{elem.name}</Text>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View style={styles.menuContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {cates}
                </ScrollView>
            </View>
        );
    }

    renderPage(){
        let { categoryDetail } = this.props;
        let detailData = categoryDetail.categoryDetail;
        return (
            detailData && detailData.data ?
                this.renderCategoryDetail(detailData.data.cate || detailData.data.products)
                :
                <Loading/>
        );
    }


    renderCategoryDetail(detailDatas){
        let { categoryDetail } = this.props;
        let detailContent;
        let cateGroups = detailDatas.map((detailData) => {
            if (detailData.products) {
                let products = detailData.products.map((product) => {
                    return (
                        <TouchableOpacity
                            key={product.id}
                            activeOpacity={1}
                            focusedOpacity={1}
                            onPress={()=>{
                                let { navigation, action } = this.props
                                navigation.navigate('Detail', { 'productId': product.id, action })
                            }}  >

                            <View style={styles.item}>
                                <Image resizeMethod="resize" style={styles.itemAvatar} source={{uri: product.small_image}} />
                                <View style={styles.itemContent}>
                                    <Text style={styles.itemTitle} numberOfLines={2}>{product.name}</Text>
                                    <Text style={styles.itemSubTitle} numberOfLines={1}>{product.spec}</Text>
                                    <View style={styles.itemAction}>
                                        <Text style={styles.itemPrice}>￥{product.price}</Text>
                                        <Icon style={styles.itemCart} name="shopping-cart" />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                });

                return (
                    <View style={styles.grounp} key={detailData.id}>
                        <View style={styles.grounpTitleContainer}>
                            <Text style={styles.title}>{detailData.name}</Text>
                        </View>
                        <View style={styles.grounpItemsContainer}>
                            {products}
                        </View>
                    </View>
                );

            }else{
                return (
                    <View style={styles.grounp} key={detailData.id}>
                        <View style={styles.grounpItemsContainer}>
                            <TouchableOpacity
                                activeOpacity={1}
                                focusedOpacity={1}
                                onPress={() => {
                                    let { navigation, action } = this.props
                                    navigation.navigate('Detail', { 'productId': detailData.id, action })
                                }}>
                                <View style={styles.item} key={detailData.id}>
                                    <Image resizeMethod="resize" style={styles.itemAvatar} source={{uri: detailData.small_image}} />
                                    <View style={styles.itemContent}>
                                        <Text style={styles.itemTitle} numberOfLines={2}>{detailData.name}</Text>
                                        <Text style={styles.itemSubTitle} numberOfLines={1}>{detailData.spec}</Text>
                                        <View style={styles.itemAction}>
                                            <Text style={styles.itemPrice}>￥{detailData.price}</Text>
                                            <Icon style={styles.itemCart} name="shopping-cart" />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            }

        });

        detailContent = !categoryDetail.isFetching ?
            cateGroups
            :
            <Loading />;

        return (
            <View style={styles.listContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.lists}>
                        {detailContent}
                        {categoryDetail.isFetching ?
                            <BottomIndicator />
                            :
                            null
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }

    handleCategoryPress(id, index){

        if ( this.state.activeCateIndex === index) return false;
        let actions = this.props.actions;
        actions.getCategoryDetail(id);
        if (!this.props.isFetching) {
            this.setState({
                activeCateIndex: index
            })
        }
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    menuContainer: {
        backgroundColor: '#f4f4f4',
    },
    menu: {
        maxWidth: 100,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#e8e9e8'
    },
    menuActive: {
        backgroundColor: '#fff',
        borderColor: '#fff'
    },
    menuText: {
        color: '#666',
        fontSize: 14
    },
    listContainer: {
        backgroundColor: '#fff',
        flex: 1,
        paddingLeft: 10,
        marginBottom: 48,
    },
    lists: {
        flex: 1,
        minHeight: Screen.height
    },
    grounpTitleContainer: {
        paddingVertical: 3,
        paddingLeft: 5,
        backgroundColor: '#f4f4f4'
    },
    item: {
        paddingVertical: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    itemAvatar: {
        marginRight: 10,
        width: 65,
        height: 65
    },
    itemContent: {
        flex: 1
    },
    itemTitle: {
        fontSize: 16,
        color: '#333',
    },
    itemSubTitle: {
        marginTop: 2,
        fontSize: 12,
        color: "#999"
    },
    itemAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    itemPrice: {
        fontSize: 16,
        color: '#f95824'
    },
    itemCart: {
        paddingTop: 6,
        fontSize: 14,
        width: 24,
        height: 24,
        color: '#2eb257',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#eee',
        textAlign: 'center'
    }
});









const mapStateToProps = state => {
    return {
        categories : state.categories,
        categoryDetail : state.categoryDetail
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(ACTIONS, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
