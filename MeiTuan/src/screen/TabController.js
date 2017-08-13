/**
 * Created by LCN on 2017/8/9 0009.
 */

import React from 'react';
import { TabNavigator,TabBarBottom} from 'react-navigation';

import HomePage from './Home/HomePage';
import NearbyPage from './Nearby/NearbyPage';
import OrderPage from './Order/OrderPage';
import MinePage from './Mine/MinePage';

import TabBarItem from '../widget/TabBarItem';
import Colors from '../utils/Colors';

const TabController = TabNavigator(

    {
        Home : {
            screen : HomePage,
            navigationOptions :({navigation})=>({
                tabBarLabel : '团购',
                tabBarIcon : ({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/Tabbar/homepage.png')}
                        selectedImage={require('../images/Tabbar/homepage_selected.png')} />
                ),
            }),
        },

        Nearby : {
            screen : NearbyPage,
            navigationOptions :({navigation})=>({
                tabBarLabel : '附近',
                tabBarIcon : ({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/Tabbar/merchant.png')}
                        selectedImage={require('../images/Tabbar/merchant_selected.png')} />
                ),
            }),
        },

        Order : {
            screen : OrderPage,
            navigationOptions :({navigation})=>({
                tabBarLabel : '订单',
                tabBarIcon : ({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/Tabbar/order.png')}
                        selectedImage={require('../images/Tabbar/order_selected.png')} />
                ),
            }),
        },

        Mine : {
            screen : MinePage,
            navigationOptions :({navigation})=>({
                tabBarLabel : '我的',
                tabBarIcon : ({focused,tintColor})=>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/Tabbar/mine.png')}
                        selectedImage={require('../images/Tabbar/mine_selected.png')} />
                ),
            }),
        }
    },

    {
        tabBarComponent : TabBarBottom,
        tabBarPosition : 'bottom',
        swipeEnabled : true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions : {
            activeTintColor : Colors.theme,
            inactiveTintColor: '#979797',
            style : { backgroundColor : '#ffffff' },
        },
    }
);


export default TabController;