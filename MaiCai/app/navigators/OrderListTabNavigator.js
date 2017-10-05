/**
 * Created by LCN on 2017/9/30 0030.
 */

import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import All from '../pages/Order/All';
import WaitPay  from '../pages/Order/WaitPay';
import WaitReceipt from '../pages/Order/WaitReceipt';
import WaitComment from '../pages/Order/WaitComment';

import Icon from 'react-native-vector-icons/FontAwesome';

const OrderListTabNavigator = TabNavigator(
    {
        All: {
            screen: All,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '全部',
                tabBarIcon: ({tintColor}) => (<Icon name="home" size={24} color={tintColor}/>)
            })
        },
        WaitPay: {
            screen: WaitPay,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '待支付',
                tabBarIcon: ({tintColor}) => (<Icon name="list-ul" size={20} color={tintColor}/>)
            })
        },
        WaitReceipt: {
            screen: WaitReceipt,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '待收货',
                tabBarIcon: ({tintColor}) => (<Icon name="shopping-cart" size={24} color={tintColor}/>)
            })
        },
        WaitComment: {
            screen: WaitComment,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '待评价',
                tabBarIcon: ({tintColor}) => (<Icon name="shopping-cart" size={24} color={tintColor}/>)
            })
        }
    },
    {
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        initialRouteName: 'All',
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#3cb963',
            activeBackgroundColor: '#fff',
            inactiveTintColor: '#333',
            inactiveBackgroundColor: 'fff',
            // showIcon: true,
            tabStyle: {
                paddingBottom: 8,
                height: 40
            },
            indicatorStyle: {
                backgroundColor: '#3cb963'
            },
            labelStyle: {
                fontSize: 14
            },
            style: {
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderColor: '#efefef'
            },
            iconStyle: {
                margin: 0,
                padding: 0
            }
        }
    }
);

export default OrderListTabNavigator;
