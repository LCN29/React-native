/**
 * Created by Ape on 2017/7/22.
 */

import React ,{Component} from 'react';

import {
    View,
}from 'react-native';

import FunctionView from './FunctionView';
import InputArea from './InputArea';

export default class Day13 extends Component{

    /*
    * 主要事项 : 按原代码将 FunctionView设置为 绝对定位，定位到父级的底部，不给InputArea
    *
    * 中的 TextInput 设定好高时，键盘会把整个FunctionView 顶上去 解决： 设置固定的高 ，去掉FunctionView的绝对定位
    *
    * TextInput
    * android 专用属性
    *  默认会有 一条 横线  underlineColorAndroid='transparent' 去掉
    *  默认内容是在 TextInput的中间出现的， 要让 内容 在头部出现 textAlignVertical="top"
    *  numberOfLines number  ： 文本输入框行数  需要先设置好 multiline={true}
    *
    * 底部的图片区域的高度，没设置好，整个被键盘挡住了，看不到上面的文字，不想改了
    *
    *  同时 自己加了一些 父级调用子级事件  ，子级调用父级事件
    *
    * */

    constructor() {
        super();
        this.state = {
            numOfText:0,
        };
    }

    countNumofText(num){
        this.setState({
            numOfText: num,
        });
    }

    click(){

        this.setState({
            numOfText : 0,
        });

        //  找到子级，并调用子级的事件
        let input = this.refs.input;
        input.clearContent();

        alert("发送成功");
    }


    render(){
        return (
            <View style={{flex : 1}}>
                <InputArea ref="input" textEvent={(num)=>{this.countNumofText(num)}}/>
                <FunctionView numOfText={this.state.numOfText} click={()=>{this.click()}}/>
            </View>
        );
    }
}