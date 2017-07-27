/**
 * Created by Ape on 2017/7/21.
 */

import React ,{Component} from 'react';

import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Slider,
}from 'react-native';

import { Surface } from "gl-react-native";


import Util from '../../utils/Util';
import HelloGL from  './HelloGL';
import Saturation from './Saturation';
import PieProgress from './PieProgress';

export default class Day11 extends Component{

    constructor(){
        super();
        this.state = {
            value : 0,
            saturationFactor : 1,
            progress:0
        }
    }


    render(){
        let {value , saturationFactor , progress} = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}><Text style={styles.text}>Gradients:</Text></View>
                <Slider
                    maximumValue = {1}
                    value = {0}
                    onValueChange={(value)=>{ this.setState({value : value})}}
                />
                <Surface width={Util.size.width} height={200}>
                    <HelloGL value={value}/>
                </Surface>


                <View style={styles.titleContainer}><Text style={styles.text}>Satuation:</Text></View>
                <Slider
                    maximumValue = {5}
                    value = {1}
                    onValueChange={(value) => this.setState({saturationFactor: value})} />
                <Surface width={Util.size.width} height={200}>
                    <Saturation
                        factor={saturationFactor}
                        image={{ uri: 'http://img.kutoo8.com/upload/thumb/432096/b2f4863b540305b5cb0f343870cb5551_960x540.jpg'}}
                    />
                </Surface>

                {/* 此处好像有bug ，运行不起来*/}

                {/*<View style={styles.titleContainer}><Text style={styles.text}>Progress Pie:</Text></View>
                <Slider
                    maximumValue = {1}
                    value = {0}
                    onValueChange={(value) => this.setState({progress: value})} />

                <Surface width={Util.size.width} height={200} backgroundColor="transparent">
                    <PieProgress
                        width={256}
                        height={180}
                        colorInside={[0,0,0,0]}
                        colorOutside={[0,0,0,0.5]}
                        radius={0.4}
                        progress={progress}
                    />
                </Surface>*/}


            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        marginTop: 63,
        backgroundColor:"#ffffff"
    },
    titleContainer:{
        alignItems:"center",
        borderTopWidth: Util.pixel,
        borderTopColor: "#aaa",
        borderBottomWidth: Util.pixel,
        borderBottomColor: "#aaa",
        paddingTop:5,
        paddingBottom:5
    },
    text:{
        fontSize:16,
    },
});
