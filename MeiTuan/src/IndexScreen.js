/**
 * Created by LCN on 2017/8/9 0009.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import StackController from './screen/StackController';

const lightContentScenes = ['Home', 'Mine'];

function getCurrentRouteName(navigationState){
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;

}

export default class IndexScreen extends Component{

    render(){
        return (
            <View style={{flex : 1}}>
                <StackController
                    onNavigationStateChange={(prevState, currentState)=>{
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }}
                />
            </View>
        );
    }
}
