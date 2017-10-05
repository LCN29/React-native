/**
 * Created by LCN on 2017/9/30 0030.
 */

import React from 'react';
import { StackNavigator} from 'react-navigation';

import User from '../pages/User';
import OrderListTabNavigator from './OrderListTabNavigator';

const UserStackNavigator = StackNavigator(
    {
        User: {
            screen: User,
            navigationOptions: {
                header: null
            }
        },
        Order: {
            screen: OrderListTabNavigator,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#2eb257',
                    height: 20
                },
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 14,
                    textAlign: 'center'
                },
                headerBackTitleStyle: {
                    color: 'white',
                    fontSize: 14
                },
                headerTintColor: 'white'
            }
        }
    },
    {

    }
);

export default UserStackNavigator;
