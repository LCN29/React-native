/**
 * Created by LCN on 2017/9/27 0027.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import OrderHeader from '../../components/headers/OrderHeader';
import OrderBlock from '../../components/OrderBlock';

export default class WaitReceipt extends Component{

    static navigationOptions = {
        header: (HeaderProps) => {
            return <OrderHeader navigation={HeaderProps} />
        }
    };

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <OrderBlock/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5'
    }
});