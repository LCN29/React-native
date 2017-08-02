/**
 * Created by Ape on 2017/7/31.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

//每一个动作都需要通过 navigationActions 创建
import {NavigationActions} from 'react-navigation';

export default class ActionScreen extends Component{

    static navigationOptions = {
        title : 'Action',
    };

    /*
    *  dispatch的使用需要搭配6种动作，
    *
    *  navigate 页面跳转
    *  reset 修改自己的state
    *  back 回到上一个页面
    *  set Params  修改参数
    *  init state为undefind时，初始化  init官方文档没介绍，此处不做扩展了
    * */


    jump(){

        const navigateAction = NavigationActions.navigate({
            routeName : 'Test',  //跳转的路由
            params : { name : '李四', age : 1100},  // 传递的参数 ,同样同navigation.state.params.key 获取
            action: NavigationActions.navigate({ routeName: 'Chat',params :{user: '动作'}})  //导航里面可以嵌套一个动作，这个动作可以在子路由里面运行
        });

        this.props.navigation.dispatch(navigateAction);   //调用dispatch跳转
    }

    back(){
        // 个人理解，并未实践过，当跳转多次后，需要一个一个的点返回，如果想要直接返回到某个路由，可以
        // 将他下面的第一个路由传过来，就可以直接返回到想要的路由了

        //返回并消灭这个路由
        const backAction = NavigationActions.back({
              key : this.props.navigation.state.key,  // key非必须的，设置了从指定的key返回
        });
        this.props.navigation.dispatch(backAction);
    }

    set(){
        // 个人理解，未实践过，上层传过来了key,然后在这个路由里面可以通过这个key修改他的值，
        const setParamsAction = NavigationActions.setParams({
            params: { name: '已修改' },
            key: this.props.navigation.state.key, // key 值必须的，此处指定了当前页面key
        });

        this.props.navigation.dispatch(setParamsAction)
    }

    reset(){

    }

    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>ActionScreen</Text>
                <Text style={styles.font}>{this.props.navigation.state.params.name}</Text>
                <Button title="跳转" onPress={()=>{this.jump()}}/>
                <Button title="回退" onPress={()=>{this.back()}}/>
                <Button title="修改参数" onPress={()=>{this.set()}}/>
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
