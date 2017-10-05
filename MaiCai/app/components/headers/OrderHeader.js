/**
 * Created by LCN on 2017/9/30 0030.
 */

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class OrderHeader extends Component {
    render() {
        const navigate = this.props.navigation.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.headerBack}
                    activeOpacity={1}
                    focusedOpacity={1}
                    onPress={() => navigate.goBack(null)}>
                    <Icon style={styles.headerBackIcon} name="ios-arrow-back-outline"/>
                </TouchableOpacity>
                <View style={styles.headerButtons}>
                    <TouchableOpacity
                        activeOpacity={1}
                        focusedOpacity={1}
                        onPress={() => navigate.goBack(null)}>
                        <Text style={[styles.button, styles.btnMC, styles.btnActive]}>买菜</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        focusedOpacity={1}
                        onPress={() => navigate.goBack(null)}>
                        <Text style={[styles.button, styles.btnTuan]}>邻里团</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#efefef'
    },
    headerBack: {
        position: 'absolute',
        left: 10,
        width: 35,
        height: 30,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    headerBackIcon: {
        fontSize: 28,
    },
    headerButtons: {
        flexDirection: 'row'
    },
    button: {
        // paddingHorizontal: 20,
        paddingVertical: 5,
        color: '#3cb963',
        width: 80,
        borderWidth: 1,
        borderColor: '#3cb963',
        fontSize: 16,
        textAlign: 'center'
        // borderRadius: 3
    },
    btnActive: {
        backgroundColor: '#3cb963',
        color: '#fff'
    },
    btnMC: {
        borderRightWidth: 0,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    btnTuan: {
        borderLeftWidth: 0,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3
    }
});
