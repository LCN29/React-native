/**
 * Created by LCN on 2017/9/29 0029.
 */

import React from 'react';
import { StackNavigator} from 'react-navigation';

import AppTabNavigator from './AppTabNavigator';

import Detail from '../pages/Detail';
import Search from '../pages/Search';
import Web from '../pages/Web';

import CustomerAnimate from '../animations/CustomerAnimate';


const AppStackNavigator = StackNavigator(
    {
        Tabs : {
            screen : AppTabNavigator,
            navigationOptions : {
                header : null
            }
        },
        Detail : {
            screen : Detail,
        },

        Search : {
            screen : Search,
            navigationOptions: {
                header: null
            }
        },

        Web : {
            screen : Web,
        }


    },

    {
        initialRouteName: 'Tabs',
        transitionConfig: () => {
            return {
                screenInterpolator: (sceneProps)=>{
                    return CustomerAnimate.Horizontal(sceneProps);
                }
            }
        }
    }
);

export default AppStackNavigator;
