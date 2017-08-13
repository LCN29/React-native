/**
 * Created by LCN on 2017/8/12 0012.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Screen from '../../utils/Screen';
import Colors from '../../utils/Colors';

export default class NearbyHeaderView extends Component{
    render(){
        return (
            <View style={styles.container}>
                {this.props.titles.map((title, i) => (
                    <TouchableOpacity
                        style={[{ backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white' }, styles.item]}
                        key={i}
                        onPress={() => this.props.onSelected(i)}>
                        <Text
                            style={{ fontSize:13, color: this.props.selectedIndex == i ? 'white' : '#555555' }}>
                            {this.props.titles[i]}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
};
const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        item: {
            width: Screen.width / 4 - 10,
            marginLeft: 8,
            marginTop: 5,
            marginBottom: 5,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            borderWidth: Screen.onePixel,
            borderColor: Colors.border,
        },
});
