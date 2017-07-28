/**
 * Created by LCN on 2017/6/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    PixelRatio
} from 'react-native';

// 头部
class Header extends Component {

    render (){
        return (
            <View style = {styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        ) ;
    }
}

// 新闻列表
class NewList extends Component {
    render(){
        return (
            <View style={styles.list_item} >
                <Text style={styles.list_font}>{this.props.title}</Text>
            </View>
        );
    }
}


//  重要的新闻

class ImportantNews extends Component{

    // 点击触发事件
    show (title){
        alert(title);
    }
    render(){
        var news = [];
        for (let i in  this.props.news){
            var text = (
                // warning  ; Each child in an array or iterator should have an unique "key" prop
                <Text
                    key={i}
                    onPress={ ()=>{
                        this.show(this.props.news[i]);
                    }}
                    numberOfLines={2}
                    style={styles.new_item}
                >{'\t'}{this.props.news[i]}</Text>
            );
            news.push(text);
        }
        return (
            <View>
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
};

export default class TextComponent extends Component {
    //  用于显示文本 ，支持多层嵌套
    //  支持一个 onPress 方法 既点击事件
    //  属性 numberOfLines : num;  用于限制显示多少行， 多余内容...表示
    //  onLayout  参数是一个函数 ，  用于获取 布局的参数
    render(){
        return (
            <View>
                <Header />
                <NewList title ="今天天气不错"/>
                <NewList title ="午饭吃什么"/>
                <NewList title ="不知道呢"/>
                <NewList title ="叫外卖？"/>
                <ImportantNews news={[
                    '1,233',
                    '2,666',
                    '3,999'
                ]}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    flex : {
        marginTop : 50,
        height : 50,
        borderBottomWidth : 3/PixelRatio.get(),
        borderBottomColor : '#EF2d36',
        justifyContent : 'center'
    },
    font : {
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center',
    },
    font_1 : {
        color : '#cd1d1c'
    },
    font_2 : {
        color : '#fff',
        backgroundColor : '#cd1d1c'
    },



    list_item : {
        height : 40,
        marginRight : 10,
        marginLeft : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd',
        justifyContent : 'center',
    },
    list_font : {
        fontSize : 16
    },



    news_title : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#cd1d1c',
        marginTop : 10,
        marginLeft : 15,
    },
    new_item : {
        height : 24,
        marginLeft: 10,
        marginRight : 15,
        lineHeight : 24,
        fontSize : 15,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd',
    },
});
