
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'
import Screen from '../utils/Screen';

export default class Separator extends Component {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}
const styles = StyleSheet.create({
    line: {
        width: Screen.width,
        height: Screen.onePixel,
        backgroundColor: Colors.border,
    },
});

