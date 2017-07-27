/**
 * Created by Ape on 2017/7/18.
 */

import React,{ Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';


import TabNavigator from "react-native-tab-navigator";
import Icon from "react-native-vector-icons/Ionicons";

import TwitterContent from './TwitterContent';


export default class TwitterFooter extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab : 'home',
        }
    }

    render(){
        let View1=(
            <View style={[styles.center,{backgroundColor: '#ffffee11'}]}>
                <Text style={{fontSize: 30}}>1</Text>
            </View>
        );

        let View2=(
            <View style={[styles.center,{backgroundColor: '#ffffaacc'}]}>
                <Text style={{fontSize: 30}}>2</Text>
            </View>
        );

        let View3=(
            <View style={[styles.center,{backgroundColor: '#ffff3311'}]}>
                <Text style={{fontSize: 30}}>3</Text>
            </View>
        );

        return (
            <TabNavigator tabBarStyle={styles.tabBar}>
                <TabNavigator.Item
                    selected = {this.state.selectedTab === 'home'}
                    title = "首页"
                    titleStyle= {{ color : '#Fff'}}
                    selectedTitleStyle = {{color : '#F5DEB3'}}
                    onPress ={()=> this.setState({ selectedTab: 'home' }) }
                    renderIcon = {()=> <Icon size={30} name="ios-home" style={{color : '#Fff'}}/>}
                    renderSelectedIcon= {()=> <Icon size={30} name="ios-home" style={{color : '#F5DEB3'}}/>}>
                    <TwitterContent/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected = {this.state.selectedTab === 'info'}
                    title = "通知"
                    titleStyle= {{ color : '#fff'}}
                    selectedTitleStyle = {{color : '#F5DEB3'}}
                    onPress ={()=> this.setState({ selectedTab: 'info' }) }
                    renderIcon = {()=> <Icon size={30} name="ios-alarm" style={{color : '#Fff'}}/>}
                    renderSelectedIcon= {()=> <Icon size={30} name="ios-alarm" style={{color : '#F5DEB3'}}/>}>
                    {View1}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected = {this.state.selectedTab === 'email'}
                    title = "私信"
                    titleStyle= {{ color : '#fff'}}
                    selectedTitleStyle = {{color : '#F5DEB3'}}
                    onPress ={()=> this.setState({ selectedTab: 'email' }) }
                    renderIcon = {()=> <Icon size={30} name="ios-mail" style={{color : '#fff'}}/>}
                    renderSelectedIcon= {()=> <Icon size={30} name="ios-mail" style={{color : '#F5DEB3'}}/>}>
                    {View2}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected = {this.state.selectedTab === 'person'}
                    title = "我"
                    titleStyle= {{ color : '#fff'}}
                    selectedTitleStyle = {{color : '#F5DEB3'}}
                    onPress ={()=> this.setState({ selectedTab: 'person' }) }
                    renderIcon = {()=> <Icon size={30} name="ios-person" style={{color : '#fff'}}/>}
                    renderSelectedIcon= {()=> <Icon size={30} name="ios-person" style={{color : '#F5DEB3'}}/>}>
                    {View3}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
};

const styles = StyleSheet.create({
    center : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    tabBar : {
        height : 54,
        alignItems: 'center',
        backgroundColor : 'grey',
        bottom : 24
    }
});