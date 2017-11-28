/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import Api from '../../util/Api';
import Screen from '../../util/Screen';

export default class SplashPage extends Component {

    constructor(props){
        super(props);
        this.state={
            image : '',
        };
    }

    componentDidMount() {
       this.requestData();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    jumpPage(){
      const { navigate } = this.props.navigation;
        navigate('Main');
    };

    setTime(){
        this.timer = setTimeout(()=>{
            this.jumpPage();
        },1000);
    }

    async requestData(){
        try {
            let response = await fetch(Api.splash);
            let responseJson = await response.json();
            this.setState({
                image  : responseJson.data[0].image,
            });
            this.setTime();
        }catch(error) {
            console.error(error);
        }

    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={()=>{this.jumpPage()}}>
                {
                    this.state.image === '' ?
                        <View/>
                        :
                        <Image source={{uri : this.state.image}} style={styles.img}/>
                }
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    img : {
        width : Screen.width,
        height : Screen.height,
    }
});