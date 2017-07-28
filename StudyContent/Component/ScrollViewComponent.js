/**
 * Created by Ape on 2017/7/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

/*
    ScrollView  适用于item 不多的情况，item 多的话 ，请用 SectionList FlatList
*   使用也是最简单的 直接将内容放到里面就可以了
* */

export default class ScrollViewComponent extends Component{
    render() {
        return (
            <View style={{flex : 1}} >
                <ScrollView >
                    <Text style={{fontSize:16}}>Scroll me plz</Text>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>

                    <Text style={{fontSize:16}}>Scroll me plz2</Text>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                    <Image source={require('./img/test.jpg')} style={styles.img}/>
                </ScrollView>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    img : {
        width : 80,
        height : 60,
        resizeMode : 'contain'
    }
});