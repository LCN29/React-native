/**
 * Created by Ape on 2017/7/22.
 */

import React , {Component}from 'react';
import {
    StyleSheet
}from 'react-native';


import PasswordGesture from 'react-native-gesture-password';

export default class EnterPassword extends Component{

    static propTypes = {
        passWord: React.PropTypes.string.isRequired,
        enterPassword: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            status: 'normal',
            message: '请输入密码',
            passWord: this.props.passWord,
            count: 3,
        }
    }

    onStart(){
        this.setState({
            status: 'normal',
            message: '输入密码中...',
        });
    }

    onEnd(password){
        if (password === this.state.passWord) {
            this.setState({
                status: 'right',
                message: '密码正确',
            });
            this.props.enterPassword();
        }else{

            let count = this.state.count-1;

            if(count === 0){
                alert('失败3次了');
            }else{
                this.setState({
                    status: 'wrong',
                    message: `密码错误，您还有${count}次机会`,
                    count: count,
                });
            }
        }
    }


    render(){

        /*
         通过改变statues 的状态 ，可以确定密码的正确性
         * status ‘normal’ 输入时
         *         ‘wrong’ 错误
         *         ‘right' 正确
         */
        return (
            <PasswordGesture
                style = {styles.setPg}
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                allowCross={true}
                onStart={() => this.onStart()}
                onEnd={(password)=>this.onEnd(password)}
            />
        );
    }
};

const styles = StyleSheet.create({
    setPg : {
        backgroundColor:"#012642",
    }
});