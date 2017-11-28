/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Screen from '../util/Screen';
import Config from '../util/Config';

import SplashPage from './Splash/SplashPage';
import MainPageController from './Main/MainPageController';
import HistoryPage from './History/HistoryPage';
import CachePage from './Cache/CachePage';
import CollectionPage from './Collection/CollectionPage';
import AttentionPage from './Attention/AttentionPage';
import LaterPage from './Later/LaterPage';
import MemberPage from './Member/MemberPage';
import ServicePage from './Service/ServicePage';
import OrderPage from './Order/OrderPage';


import CustomDrawerContentComponent from '../component/Drawer/CustomDrawerContentComponent';


const DrawerController = DrawerNavigator(
    {

        Main : {
            screen : MainPageController,
        },


        Splash : {
            screen :  SplashPage,
        },


        History : {
            screen : HistoryPage,
        },
        Cache : {
            screen : CachePage
        },
        Collection : {
            screen : CollectionPage
        },
        Attention : {
            screen : AttentionPage,
        },
        Later : {
            screen : LaterPage,
        },
        Member : {
            screen : MemberPage,
        },
        Service : {
            screen: ServicePage,
        },
        Order : {
            screen : OrderPage,
        }


    },

    {
        drawerWidth : Screen.drawerWidth,
        contentComponent : props => < CustomDrawerContentComponent {...props}/>,
        contentOptions : {
            activeTintColor : Config.activityColor,
            activeBackgroundColor : '#6d6d6d',
            inactiveTintColor : '#aaaaaa',
        }
    }
);

const styles = StyleSheet.create({

});

export default DrawerController;