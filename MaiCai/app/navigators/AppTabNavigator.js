/**
 * Created by LCN on 2017/9/29 0029.
 */

import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Home from '../pages/Home';
import Category from '../pages/Category';
import Cart from '../pages/Cart';
import UserStackNavigator from './UserStackNavigator';

import Icon from 'react-native-vector-icons/FontAwesome';

const AppTabNavigator = TabNavigator(
    {
        Home : {
            screen : Home,
            navigationOptions : {
                tabBarLabel : '首页',
                tabBarIcon: ({ tintColor }) => (<Icon name="home" size={24} color={tintColor} />)
            }
        },
        Category : {
            screen : Category,
            navigationOptions : {
                tabBarLabel : '分类',
                tabBarIcon: ({ tintColor }) => (<Icon name="list-ul" size={24} color={tintColor} />)
            }
        },
        Cart : {
            screen : Cart,
            navigationOptions : {
                tabBarLabel : '购物车',
                tabBarIcon: ({ tintColor }) => (<Icon name="shopping-cart" size={24} color={tintColor} />)
            }
        },
        User : {
            screen : UserStackNavigator,
            navigationOptions : {
                tabBarLabel : '我的',
                tabBarIcon: ({ tintColor }) => (<Icon name="user" size={24} color={tintColor} />)
            }
        },

    },
    {
        tabBarComponent : TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: '#3cb963',
            activeBackgroundColor: '#fff',
            inactiveTintColor: '#999',
            inactiveBackgroundColor: '#fff',
            showIcon: true,
            tabStyle: {
                margin: 0,
                height: 48,
            },
            indicatorStyle: {
                margin: 0,
                padding: 0,
                height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            labelStyle: {
                fontSize: 14,
                margin: 0,
                padding: 0
            },
            style: {
                margin: 0,
                padding: 0,
                backgroundColor: '#fff'
            },
            iconStyle: {
                margin: 0,
                padding: 0
            }
        }
    }
);

export default AppTabNavigator;
