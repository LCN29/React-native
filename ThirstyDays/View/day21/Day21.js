/**
 * Created by Ape on 2017/7/25.
 */


import React , {Component}from 'react';
import {
    View,
    Image,
    StyleSheet,
    LayoutAnimation,
    TouchableHighlight
}from 'react-native';

import Util from '../../utils/Util';
import ReminderContainer from './ReminderContainer';

export default class Day21 extends Component{

    constructor() {
        super();
        this.listData = [
            { title:"Scheduled", numOfItems:0,theme:"#979797", list:[] },
            { title:"Movie", numOfItems:0,theme:"#cb7adf", list:[] },
            { title:"Work", numOfItems:0,theme:"#f9005f", list:[] },
            { title:"Home", numOfItems:0,theme:"#00a8f4", list:[] },
            { title:"Reminder", numOfItems:0,theme:"#68d746", list:[] },
            { title:"Development", numOfItems:2,theme:"#fe952b", list:[{ selected:false, text:"day20",},{selected:false, text:"day21",}] }
        ];

        this.animations = {
            duration : 200,
            create : {
                type : LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update : {
                type : LayoutAnimation.Types.linear,
                springDamping : 0.7
            }
        };

        this.state = {
            isOn: this.isOn,
            init: true,
        };
    }

    _switch(index){
        const isOn = this.listData.map(() => {
            return false;
        });
        isOn[index] = true;
        this.setState({
            isOn,
            init:false
        });
        LayoutAnimation.configureNext(this.animations);
    }

    _reset(){
        const isOn = this.listData.map(() => {
            return false;
        });
        this.setState({
            isOn,
            init:true
        });
        LayoutAnimation.configureNext(this.animations);
    }

    render(){

        const len = this.listData.length;
        const lists = this.listData.map((elem,index)=>{
            return <ReminderContainer key={"list"+index} ref={"list"+index} listData={elem} switch={()=>{this._switch(index)}} listStyle={this.state.init?{top:20+index*65}:{top:this.state.isOn[index]? 20:Util.size.height+5*index-5*len}}/>
        });
        return (
            <View>
                <Image source={require('./img/desktop.png')} style={styles.container}/>
                {lists}
                <TouchableHighlight underlayColor="transparent" style={styles.reset} onPress={() => this._reset()}>
                    <View/>
                </TouchableHighlight>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container:{
        height: Util.size.height,
        width: Util.size.width,
    },
    reset:{
        height:30,
        width:Util.size.width,
        position:"absolute",
        bottom: 20,
        left:0,
    }
});