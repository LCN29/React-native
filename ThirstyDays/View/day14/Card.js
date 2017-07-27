/**
 * Created by Ape on 2017/7/22.
 */

import React , {Component}from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
}from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Util from '../../utils/Util'



export default class Card extends Component{

    static propTypes = {
        top: React.PropTypes.number.isRequired,
        left: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired,
    };

    render(){
        return (
            <View style={[styles.card,{top:this.props.top,width:this.props.width,left:this.props.left}]} >
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
    card:{
        height:400,
        borderRadius:5, borderWidth:1, borderColor:"#e1e1e1",
        width:Util.size.width-20,
        backgroundColor:"#fff",
        position : 'absolute',
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