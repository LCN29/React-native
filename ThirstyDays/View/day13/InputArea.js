/**
 * Created by Ape on 2017/7/22.
 */

import React ,{Component} from 'react';

import {
    StyleSheet,
    Image,
    TextInput,
    View,
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../../utils/Util'

export default class InputArea extends Component{

    static propTypes = {
        textEvent : React.PropTypes.func.isRequired,
    };

    constructor(){
        super();
        this.state ={
            textContent : '',
        };
    }

    _updateTextNum(text) {
        this.setState({
            textContent: text,
        });
        let remain = text.length;
        this.props.textEvent(remain);
    }

    // 清空内容
    clearContent(){
        this.setState({
            textContent : ''
        });
    }

    render(){
        return (
            <View style={{ height: Util.size.height-275}}>
                <View style={styles.iconContainer}>
                    <Image style={styles.img} source={require('./img/icon.png')}/>
                    <Icon name="md-close" color="#2aa2ef" size={25}/>
                </View>
                <TextInput
                    style={styles.textArea}
                    placeholder="有什么新鲜事？"
                    maxLength={140}
                    multiline={true}
                    value={this.state.textContent}
                    placeholderTextColor="#ced8de"
                    selectionColor="#2aa2ef"
                    underlineColorAndroid='transparent'
                    onChangeText={(text)=>{this._updateTextNum(text)}}
                    textAlignVertical="top"
                />
            </View>
        );
    }
};
const styles = StyleSheet.create({
    img : {
        width:30,
        height:30,
        borderRadius:5,
    },
    iconContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingLeft:15, paddingRight:15,
        marginTop : 10,
    },
    textArea : {
        fontSize:20,
        margin : 0,
        padding : 15,
        height : 278,
    }
});