/**
 * Created by Ape on 2017/7/22.
 */


import React , {Component}from 'react';
import {
    Text,
    View,
    StyleSheet
}from 'react-native';

import Util from '../../utils/Util';

import EnterPassword from './EnterPassword';
import SetPassword from "./SetPassword";

export default class Day15 extends Component{

    constructor() {
        super();
        this.state= {
            passWord :'',
            hasSet : false,
            enterApp : false,
        };
    }

    _setPassword(password){
        this.setState({
            passWord : password,
            hasSet: true,
        });
        alert("设置成功");
    }

    _enterPassword(){
        this.setState({
            enterApp: true,
        });
    }



    render(){
        return (
            <View style={styles.container}>
                {this.state.hasSet ? <View/> :<SetPassword setPassword={(password) => this._setPassword(password)}/>}
                {this.state.hasSet&&!this.state.enterApp? <EnterPassword enterPassword={() => this._enterPassword()} passWord={this.state.passWord}/> : <View/>}
                {this.state.enterApp? <View style={styles.app}><Text style={styles.appText}>You are in the app!</Text></View>:<View/>}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        width : Util.size.width,
        height : Util.size.height,
        backgroundColor : 'transparent'
    },
    app: {
        backgroundColor:"#012642",
        height: Util.size.height,
        width: Util.size.width,
        alignItems:"center",
        justifyContent:"center"
    },
    appText :{
        color:"#fff",
        fontSize:25,
    }
});