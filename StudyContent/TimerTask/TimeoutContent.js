/**
 * Created by Ape on 2017/7/7.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class TimeoutContent extends Component {

    constructor(props) {
        super(props);
        this.state={
            num : 0,
            content:'',
            msg : '',
        }
    }


    // timeout 延迟多少时间执行某函数
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.setState({content:'我是定时器打印的内容...One'})
        },500);

        this.timer_two = setTimeout(() => {
            this.setState({msg:'我是定时器打印的内容...Two'})
        }, 4000);
    }

    render() {
        return (
            <View style={{margin:20}}>
                <Text style={styles.welcome}>
                    定时器实例
                </Text>
                <Text>{[this.state.content,this.state.num]}</Text>
                <Text>{this.state.msg}</Text>
            </View>
        );
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
        this.timer_two && clearTimeout(this.timer_two);
    }

}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});