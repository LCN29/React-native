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

import {NavigationActions} from 'react-navigation';
export default class TestScreen extends Component{

    static navigationOptions = {
        title : 'Test',
    };

    jump(){
      // 不知道如何获取父级传过来的action
     //   this.props.navigation.dispatch();
    }



    reset(){
        // 清除这个navigation的状态 并用几个action 替代  改变回退和跳转需要经过的路由
        // index : 激活数组的第几个
        //    actions : 动作集合
        // 使用的时候，注意参数，有的路由需要路由，没有传递时会报错
        //

        /*
        * 分析
        *      从 a->b->c  索引 ： 0 ，数组 a,b  直接到a 不能再跳转了
        *      从 a->b->c  索引 ： 0 ，数组 b,a  到了b  也不能跳转了
        *      从 a->b->c  索引 ： 1 ，数组 a,b  到了b 能跳转 也能回退
        *      从 a->b->c  索引 ： 1 ，数组 b,a  到了a ,跳转和回退正常工作
        *      从a->b->c   索引 ： 2 ，数组 a,b,d, 到了d 回退到了b  跳转页正常工作
        */

        // 先经过 Action 再到 Home,
        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Action',params:{name : 'as'}}),
                NavigationActions.navigate({ routeName: 'Home'}),
            ]
        });

        this.props.navigation.dispatch(resetAction);
    }

    render(){
        const {state} = this.props.navigation;

        return (
            <View style={styles.flex}>
                <Text style={styles.font}>{state.params.name}{state.params.age}</Text>
                <Button title="跳转" onPress={()=>{this.jump()}}/>
                <Button title="重设" onPress={()=>{this.reset()}} />
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