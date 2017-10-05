/**
 * Created by LCN on 2017/9/30 0030.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Screen from '../utils/Screen';

export default class ScrollList extends Component {

    constructor(props){
        super(props);

    }

    render (){
        let products = this.props.products;
        const {navigate} = this.props.navigation;

        let cards = products.map((elem,index)=>{
            return (
                <View style={styles.card} key={elem.id}>
                    <TouchableOpacity
                        activeOpacity={1}
                        focusedOpacity={1}
                        onPress={()=>{navigate('Detail',{'productId': elem.id })}}
                    >
                        <Image style={styles.cardImage} resizeMethod="resize" source={{uri: elem.small_image}} />
                    </TouchableOpacity>
                    <Text style={styles.cardDesc}>{elem.product_name}</Text>
                    <View style={styles.cardMore}>
                        <Text style={styles.price}>{"￥" + elem.price}</Text>
                        <Icon style={styles.cart} name="shopping-cart" />
                    </View>
                </View>
            );
        });

        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardList}>
                {cards}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    card : {
        justifyContent: 'flex-start',
        marginLeft: 15,
        width: 100
    },
    cardImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: '#efefef'
    },
    cardDesc: {
        marginTop: 5,
        fontSize: 12,
        height: 32,
    },
    cardMore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#f95824'
    },
    cart: {
        paddingTop: 4,
        fontSize: 16,
        width: 24,
        height: 24,
        color: '#2eb257',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#eee',
        textAlign: 'center'
    },
    cardList: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
});
