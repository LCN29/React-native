/**
 * Created by Ape on 2017/7/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeScreen extends Component{


    /*
    * screenProps  父级传给所有子级的参数 ,使用间
    * 声明 控件
    * <StackNavigatorConfig screenProps = {{user : 'LCN', name: 'add'}} />
    * 子的页面 可以 通过  this.props.screenProps.key值 获取
    * */


    /*
    * navigationOptions  属性介绍
    *
    *   title : '标题'  //标题
    *   header : ()=><View></View>,  //函数 返回一个视图， 既标题栏的样子，自定义完，后面的属性都不起作用了
    *   headerRight : 视图      //显示在右边的视图
    *   headerLeft :  视图    // 显示在左边的视图，重写了，则页面上的 回到上一个页面的 < 会被覆盖
    *   headerBackTitle : '返回'        // IOS 用的,用于IOS的返回按钮
    *   headerTruncatedBackTitle : '回去'  //貌似也是IOS用的 ，用来替代IOS 的 back
    *   headerStyle : {样式}      //用于设置标题栏的样式
    *   headerTitleStyle : {样式} //设置标题的样式
    *   gesturesEnabled boolean   //是否能够通过手势让这个界面消失 ，IOS : 默认true, Android : 默认 fasle,
    *
    *   headerTintColor headerBackTitleStyle headerPressColorAndroid 试不出效果
    * */
    static navigationOptions = {
        title : 'Home',
       /* header : ()=>{ return <View><Text>123</Text></View>},*/
        headerRight : <Text>右边</Text>,
        headerLeft : <Text>左边</Text>,
        headerStyle : {
            backgroundColor: '#ff0'
        },
        headerTitleStyle : {
            color : '#ff0000'
        },
        gesturesEnabled : true,



        headerPressColorAndroid : '#fad',
        headerTintColor : '#fad',
        headerBackTitleStyle : '#fad',
    };


    jumpScreen(){
        const {navigate} = this.props.navigation;
        navigate('Chat',{user : '张三'});
    }

    //  screenProps 属性
    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>HomeScreen</Text>
                <Button title="跳转到其他页面" onPress={()=>{this.jumpScreen(2)}}/>
                <Text>{this.props.screenProps.name}{this.props.screenProps.user}</Text>
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
    }
});