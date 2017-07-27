/**
 * Created by Ape on 2017/7/22.
 */


import React , {Component}from 'react';
import {
    View,
    Image,
    StyleSheet
}from 'react-native';

import Util from '../../utils/Util';

import ReminderContainer from './ReminderContainer';


export default class Day20 extends Component{

    constructor(){
        super();
        this.listData = {
            title:"Development",
            numOfItems:6,
            theme:"#fe952b",
            list:[
                { selected:false, text:"注意事项1",},
                { selected:false, text:"注意事项2",},
                { selected:false, text:"注意事项3",},
                { selected:false, text:"注意事项4",},
                { selected:false, text:"注意事项5",},
                { selected:false, text:"注意事项6",},
            ]
        }
    }



    render(){
        return (
            <View style={styles.container}>
                <Image source={require('./img/desktop.png')} style={styles.container}/>
                <ReminderContainer listData={this.listData}/>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container:{
        height: Util.size.height,
        width: Util.size.width,
    },
});