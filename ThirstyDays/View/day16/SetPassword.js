/**
 * Created by Ape on 2017/7/23.
 */

import React , {Component}from 'react';
import {
    Text,
    View,
    StyleSheet
}from 'react-native';


/*  安装 npm install react-native-gesture-password --save*/
import PasswordGesture from 'react-native-gesture-password';

export default class SetPassword extends Component{

    static propTypes = {
        setPassword: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            message: '设置您的密码',
            status: 'normal',
        };
    }

    onStart() {

        this.setState({
            message: '密码输入中...',
        });
    }

    onEnd(password) {

        this.setState({
            status: 'right',
            message: '您的密码已设置',
        });
        this.props.setPassword(password);

        /*if ( this.state.password === '' ) {
            this.state.password = password;
            this.setState({
                status: 'normal',
                message: '请在输入一次密码',
            });
        }else{
            if ( password === this.state.password ) {
                this.setState({
                    status: 'right',
                    message: '您的密码已设置',
                });
                this.props.setPassword(password);
            }else{
                this.setState({
                    status: 'wrong',
                    message:  '密码错误，请重新输入一遍',
                });
            }
        }*/
    }



    render(){
        return (
            <PasswordGesture
                style = {styles.setPg}
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                allowCross={true}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
            />
        );
    }
};

const styles = StyleSheet.create({
    setPg : {
        backgroundColor:"#012642",
    }
});