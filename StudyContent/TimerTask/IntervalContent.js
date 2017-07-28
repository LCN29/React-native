/**
 * Created by Ape on 2017/7/7.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

export default class IntervalContent extends Component {

    constructor(props) {
        super(props);
        this.state={
            num : 0,
        }
    }


    // Interver 重复执行，隔多少秒执行

    render() {
        return (
            <View style={{margin:20}}>
                <Text style={styles.welcome}>
                    定时器实例
                </Text>

                <TouchableHighlight
                    style={{backgroundColor : '#eadefa'}}
                    underlayColor = '#ff0000'
                    onPress={()=>{
                        if(!this.interval){
                            this.interval= setInterval(()=>{this.setState({num:(this.state.num+1)})},400)
                        }
                    }} >
                    <Text>测试Interver</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    onPress={()=>{
                        this.interval&& clearInterval(this.interval);
                        this.interval = null;
                    }}
                    style={{backgroundColor : '#eadefa'}}>
                    <Text>停止Interver</Text>
                </TouchableOpacity>

                <Text>
                    {this.state.num}
                </Text>
            </View>
        );
    }

    componentWillUnmount(){
        this.interval&& clearInterval(this.interval);
    }

}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});