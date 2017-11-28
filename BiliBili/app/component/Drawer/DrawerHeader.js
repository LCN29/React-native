/**
 * Created by LCN on 2017/8/18 0018.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import Screen from '../../util/Screen';
import Config from '../../util/Config';

import CircularIcon from './CircularIcon';

export default class DrawerHeader extends Component {

    constructor(props){
        super(props);
        this.state={
            headerIcon : 'http://i2.hdslb.com/bfs/face/80bc5c8f7b92bec67e5de2a6be327d2185a66816.jpg@152w_152h_1e_1c.webp'
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../../img/Drawer/small_tv.png')} style={styles.backgroundIcon}/>
                <View style={styles.mask}/>
                <View style={styles.info}>
                    <View style={styles.iconRow}>
                        <TouchableWithoutFeedback onPress={()=>alert(123)} >
                            <Image style={styles.headerIcon} source={{ uri : this.state.headerIcon}}/>
                        </TouchableWithoutFeedback>
                        <View style={{flexDirection:'row'}}>
                            <CircularIcon source={require('../../img/Drawer/purse.png')} style={{width : 16,height : 12 }} right={15} onPress={()=>{ alert('点击了钱包')}} />
                            <CircularIcon source={require('../../img/Drawer/QR_code.png')} right={18} onPress={()=>{ alert('点击了二维码')}}  />
                        </View>
                    </View>
                    <View style={styles.viewContainer}>
                            <Text style={styles.name}>低调之忍</Text>
                            <Text style={styles.level}>LV5</Text>
                            <TouchableWithoutFeedback onPress={()=>{alert('点击了正式会员')}}>
                                <View>
                                    <Text style={styles.member}>正式会员</Text>
                                </View>
                            </TouchableWithoutFeedback>
                    </View>

                    <View style={[styles.viewContainer,{marginTop : 10}]}>
                        <Text style={styles.property}>硬币:{'\t'}188.20</Text>
                        <Text style={styles.property}>B币:  0.6</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        height : Screen.height*0.25,
        position : 'relative',
    },
    backgroundIcon : {
        height : Screen.height*0.25,
        width : Screen.height*0.25,
        alignSelf : 'flex-end',
    },
    mask : {
        backgroundColor : Config.themeColor,
        width : Screen.drawerWidth,
        height : Screen.height*0.25,
        position : 'absolute',
        opacity : 0.4,
    },
    info : {
        width : Screen.drawerWidth-10,
        height : Screen.height*0.25-10,
        position : 'absolute', left :10, top : 10,
    },
    iconRow : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    headerIcon : {
        width : 60,
        height : 60,
        borderRadius : 30, borderWidth : 2, borderColor : '#fff',
    },
    viewContainer : {
        marginTop : 12,
        flexDirection : 'row',
        alignItems : 'center'
    },
    name : {
        color : '#fff',fontSize: 14, fontWeight : 'bold',
        marginRight: 10,
    },
    level : {
        height : 15,
        color : '#fff', fontSize : 10,
        borderColor: '#fff', borderWidth: 1, borderRadius: 2,
        paddingLeft : 4, paddingRight : 2,
        marginRight: 10,
    },
    member : {
        height : 15,
        fontSize : 10,
        borderColor: '#fff', borderWidth: 1, borderRadius: 2,
        paddingLeft : 6, paddingRight : 4,
        backgroundColor : '#a8a8a8'
    },
    property : {
        fontSize : 14,color : '#a8a8a8',
        marginRight : 10,
    }
});
