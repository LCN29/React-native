/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    SectionList,
    View,
} from 'react-native';

/*
*   SectionList 显示的列表 有一个头部标题 形式如下
*       我的好友
*           AAAA
*           BBBB
*       我的同学
*           CCCC
*           DDDD
 *
 *  参数说明    sections 数组 ，item 为一个json  {title : ‘标题’， data : ['标题下的内容1','标题下的内容2']}
               renderSectionHeader  函数  返回头部的样子
               renderItem   函数， 返回 item的样子
* */
export default class SectionListComponent extends Component{
    render (){
        return (
            <View style={{flex : 1}}>
                <SectionList
                    sections={[
                        {title : '标题1', data : ['内容1','内容2']},
                        {title : '标题2', data : ['内容1','内容2','内容3']},
                    ]}

                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}

                    renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    item : {
        color : 'blue',
        marginLeft : 5,
    },
    header : {
        color : 'orange',
        fontSize : 20,
    }
});