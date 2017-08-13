/**
 * Created by LCN on 2017/8/9 0009.
 */


import React from 'react';
import { StackNavigator,TabBarBottom} from 'react-navigation';

import TabController from './TabController';
import WebPage from './Web/WebPage';
import GroupPurchasePage from './GroupPurchase/GroupPurchasePage';

const StackController = StackNavigator(
    {

        Main : {
            screen : TabController
        },
        GroupPurchase: {
            screen : GroupPurchasePage
        },
        Web : {
            screen : WebPage,
        },

    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        }
    }
);

export default StackController;