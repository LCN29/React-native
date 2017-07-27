/**
 * Created by Ape on 2017/7/23.
 */

import React , {Component}from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
}from 'react-native';

import Util from '../../utils/Util'
import Icon from 'react-native-vector-icons/Ionicons';


/*  和 Card 的布局一样 ，不同的时  Card 里面的 card 有个绝对定位，此处不可以有
 *   此处需要一个 ID的值，card 不需要
 * */
export default class SCard extends Component{

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        top: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired,
    };

    render(){
        return (
            <View key={this.props.id} style={[styles.scard,{top:this.props.top,width:this.props.width}]}>
                <Image style={{height:350,width:this.props.width-2,resizeMode:'contain'}} source={{uri : this.props.img}}/>
                <View style={styles.cardInfo} >
                    <View style={styles.cardName}>
                        <Text style={styles.cardText}> {this.props.name},very old</Text>
                        <Icon name="ios-checkmark-circle" size={18}  color="#208bf6" />
                    </View>

                    <View style={styles.cardIcon}>
                        <View style={styles.cardIconContainer}>
                            <Icon name="ios-people" size={25} color="#fc6b6d" />
                            <Text style={[styles.cardIconText,{color:"#fc6b6d"}]}>0</Text>
                        </View>

                        <View style={styles.cardIconContainer}>
                            <Icon name="ios-book" size={25} color="#cecece" />
                            <Text style={[styles.cardIconText,{color:"#cecece"}]}>0</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({

    scard:{
        height:400,
        borderRadius:5, borderWidth:1, borderColor:"#e1e1e1",
        width:Util.size.width-20,
        backgroundColor : '#fff'
    },

    cardInfo : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        height:60,
        paddingLeft:20,
        paddingRight:5,
    },
    cardIcon : {
        flexDirection: 'row',
    },
    cardIconContainer : {
        flexDirection : 'row',
        width:50,
    },
    cardName : {
        flexDirection : 'row',
        alignItems: 'center'
    },
    cardText : {
        fontSize:20,
        fontWeight:"500",
        color:"#423e39",
        marginRight : 10,
    },
    cardIconText : {
        paddingLeft:5,
        fontWeight:"500",
        fontSize:16
    },
});