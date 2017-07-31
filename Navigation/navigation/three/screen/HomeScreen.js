/**
 * Created by Ape on 2017/7/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

export default class HomeScreen extends Component{

    // 设置默认标题, 父级没有传过来标题时，显示这个
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ()=><Image source={require('../../images/home.png')} style={styles.icon}/>
    };

    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>HomeScreen</Text>
                <Button title="打开抽屉" onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}/>

                <Button title="关闭抽屉" onPress={()=>{this.props.navigation.navigate('DrawerClose');}}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    flex : {
        backgroundColor : '#ffeada',
        flex : 1,
        alignItems : 'center'
    },
    font : {
        color : '#000044',
        fontSize : 30,
        fontWeight : 'bold'
    },
    icon : {
        width: 24,
        height: 24,
    }
});