/**
 * Created by LCN on 2017/8/27 0027.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';

import Screen from '../../util/Screen';

export default class AreaItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        let data = this.props.data;

        let items = data.data.map((elem, index)=>{
            return (
                <TouchableWithoutFeedback key={index} onPress={()=>{this.item(elem.name)}}>
                    <View style={styles.contentItem} >
                        <Image  style={styles.contentImg} source={{ uri : elem.img}}/>
                        <Text style={styles.contentFont} >{elem.name}</Text>
                        <Text style={styles.contentFont} >{elem.update}</Text>
                        <Text style={styles.contentFont} >{elem.num}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        });

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{ this.titleEvent(data.title)}} underlayColor='#6f6f6f' style={{ marginTop : 18,marginBottom : 18 }}>
                    <View style={styles.title}>
                        <Image source={data.icon} style={styles.icon} />
                        <Text style={styles.font}>{data.title}</Text>
                        <View style={styles.more}>
                            <Text style={styles.font}>查看全部</Text>
                            <Image source={require('../../img/ChaseDrama/arrow.png')}/>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.contentContainer}>
                    {items}
                </View>
                {
                    data.additional === undefined ?
                        null
                    :
                        <TouchableHighlight onPress={()=>{ this.additionEvent(data.additional.title)}} style={styles.additionContainer} underlayColor='#6f6f6f'>
                            <View>
                                <Image source={{uri : data.additional.img}} style={styles.additionImg}/>
                                <Text style={styles.additionTitle}>{data.additional.title}</Text>
                                <Text style={styles.additionContent}>{data.additional.content}</Text>
                            </View>
                        </TouchableHighlight>

                }
            </View>
        );
    }

    titleEvent( title){
        alert(title);
    }

    item(name){
        alert(`点击了${name}`);
    }

    additionEvent(title){
        alert(title);
    }
};

const styles = StyleSheet.create({
    container :{
        backgroundColor : '#373737',
        marginTop : 10,
        paddingRight : 18,
        paddingBottom : 16,
    },
    title : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingLeft : 18,
    },
    icon : {
        height : 23,
        width : 23,
        marginRight : 6,
    },
    font : {
        color : '#9b9b9b',
        fontSize : 13,
    },
    more : {
        flexDirection: 'row',
        alignItems : 'center',
        flex : 1,
        justifyContent : 'flex-end'
    },
    contentContainer : {
        flexDirection : 'row',
    },
    contentItem : {
        width : (Screen.width-72)/3,
        marginLeft : 18,
    },
    contentImg : {
        width : (Screen.width-72)/3,
        height : (Screen.width-72)/9*4,
        borderRadius : 4,
        marginBottom : 10,
    },
    contentFont : {
        color : '#989898',
        fontSize : 12,
        lineHeight : 14,
    },
    additionContainer : {
        marginLeft : 18,
        marginTop : 18,
    },
    additionImg : {
        width : Screen.width-36,
        height : 100,
        borderRadius: 4,
    },
    additionTitle : {
        color : '#989898',
        fontSize : 13,
        lineHeight : 13,
        marginTop : 10,
        marginBottom : 10,
        paddingLeft : 10,
    },
    additionContent : {
        color : '#989898',
        fontSize : 12,
        lineHeight : 14,
        paddingLeft : 10,
    }
});


