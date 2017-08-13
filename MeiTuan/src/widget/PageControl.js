/**
 * Created by LCN on 2017/8/10 0010.
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import assign from 'object-assign';

export default class PageControl extends Component{

    static propTypes = {
        numberOfPages: React.PropTypes.number.isRequired,
        currentPage: React.PropTypes.number,
        hidesForSinglePage: React.PropTypes.bool,
        pageIndicatorTintColor: React.PropTypes.string,
        currentPageIndicatorTintColor: React.PropTypes.string,
        indicatorSize: React.PropTypes.object,
        indicatorStyle: View.propTypes.style,
        currentIndicatorStyle: View.propTypes.style,
        onPageIndicatorPress: React.PropTypes.func
    };

    onPageIndicatorPress(index: number) {
        this.props.onPageIndicatorPress(index);
    }

    render(){

        let { style ,...props} = this.props;
        let defaultStyle = { height :  this.props.indicatorSize.height };
        let indicatorItemStyle = {
            width: this.props.indicatorSize.width,
            height: this.props.indicatorSize.height,
            borderRadius: this.props.indicatorSize.height / 2,
            marginLeft: 5,
            marginRight: 5
        };

        let indicatorStyle = assign({}, indicatorItemStyle, this.props.indicatorStyle, {
            backgroundColor: this.props.pageIndicatorTintColor
        });

        let currentIndicatorStyle = assign({}, indicatorItemStyle, this.props.currentIndicatorStyle, {
            backgroundColor: this.props.currentPageIndicatorTintColor
        });

        var pages = [];
        for (var i = 0; i < this.props.numberOfPages; i++) {
            pages.push(i);
        }

        return (
            this.props.hidesForSinglePage && pages.length <= 1 ?
                null
                :
                <View style={[styles.container, defaultStyle, style]}>
                    {pages.map((el, i) => <TouchableWithoutFeedback key={i} onPress={()=>this.onPageIndicatorPress(i)}>
                            <View style={i == this.props.currentPage ? currentIndicatorStyle : indicatorStyle} />
                        </TouchableWithoutFeedback>
                    )}
                </View>
        );
    }

};
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});