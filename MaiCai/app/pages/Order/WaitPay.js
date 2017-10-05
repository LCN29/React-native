/**
 * Created by LCN on 2017/9/27 0027.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import OrderHeader from '../../components/headers/OrderHeader';


export default class WaitPay extends Component{

    static navigationOptions = {
        header: (HeaderProps) => {
            return <OrderHeader navigation={HeaderProps} />
        }
    };

    render(){
        return(
           <View style={styles.container}>
               <View style={styles.emptyContainer}>
                   <Image style={styles.emptyIcon} source={require('../../imgs/icon-order-empty.png')}/>
                   <Text style={styles.emptyText}>暂时还没有待收货订单</Text>
               </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5'
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyIcon: {
        width: 63,
        height: 80
    },
    emptyText: {
        marginTop: 15,
        fontSize: 14,
        color: '#999'
    },
});