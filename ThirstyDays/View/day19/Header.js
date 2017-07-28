/**
 * Created by Ape on 2017/7/4.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    Platform
} from 'react-native';

export default class Header extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./img/header/header_logo.png')}
                    style={styles.login}
                />
                <View style={styles.searchBox}>
                    <Image
                        source={require('./img/header/icon_search.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        placeholder="搜索京东商品/店铺"
                        keyboardType="default"
                        style={styles.inputText}
                        underlineColorAndroid='transparent'
                    />
                    <Image
                        source={require('./img/header/icon_voice.png')}
                        style={styles.voiceIcon}
                    />
                </View>
                <Image
                    source={require('./img/header/icon_qr.png')}
                    style={styles.scanIcon}
                />
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        paddingLeft :10,
        paddingRight : 10,
        paddingTop : Platform.OS === 'ios' ? 20 : 0,
        height : Platform.OS === 'ios' ? 68 : 48,
        backgroundColor : '#d74047',
        alignItems : 'center'
    },
    login : {
        height : 24,
        width : 64,
        resizeMode : 'stretch'
    },
    searchBox : {
        height : 30,
        marginLeft :8,
        marginRight : 12,
        backgroundColor: 'white',
        borderRadius : 5,
        flex : 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchIcon : {
        height : 16.7,
        width : 16.7,
        marginRight: 6,
        marginLeft: 6,
        resizeMode: 'stretch'
    },
    inputText : {
        flex : 1,
        backgroundColor : 'transparent',
        fontSize : 14,
        padding: 0 ,
    },
    voiceIcon: {
        marginLeft : 5,
        marginRight : 8,
        width :15,
        height : 20,
        resizeMode : 'stretch'
    },
    scanIcon : {
        width : 27,
        height : 27,
        resizeMode : 'stretch'
    }
});