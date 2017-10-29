/**
 * Created by LCN on 2017/9/10 0010.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { request} from '../action/actions';
import { connect } from 'react-redux';


class NetPage extends  Component{

    _onPress(){
        this.props.dispatch(request());
    }

    render (){
        {
            this.props.isGet ? console.log(this.props.data.type1) : null
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={()=>this._onPress()}>
                    <Text>发起请求</Text>
                </TouchableOpacity>
                <Text style={{fontSize : 20, marginTop : 30}}>当前状态</Text>
                <Text style={{fontSize : 20,color : '#ff0eaa'}}>{this.props.content}</Text>
                {
                    this.props.isGet ?
                        <Text>{this.props.data.type1[0].title}</Text>
                        :
                        null
                }
            </View>
        );
    }
}

const  styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn : {
        margin: 10,
        backgroundColor: 'yellow',
        width : 200,
        alignItems: 'center',
        padding : 10,
    }
});

const mapStateToProps = ( state)=>{
    return ({
        content : state.fetchReducer.hint,
        data : state.fetchReducer.data,
        isGet : state.fetchReducer.isGet,
    });
};

export default connect(mapStateToProps)(NetPage);
