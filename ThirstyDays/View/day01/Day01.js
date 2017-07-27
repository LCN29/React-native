/**
 * Created by Ape on 2017/7/15.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform
} from 'react-native';

import WatchFace from './WatchFace';
import WatchControl from './WatchControl';
import WatchRecord from './WatchRecord';

export default class extends Component{

    constructor() {
        super();
        this.state= {
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            recordCounter: 0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            record:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        }
    }

    componentWillUnmount() {
        this._stopWatch();
        this._clearRecord();
    }

    componentDidMount() {
        if(Platform.OS === "ios"){
            StatusBar.setBarStyle(0);
        }
    }

    _startWatch() {
        if (this.state.resetWatch) {
            this.setState({
                stopWatch: false,
                resetWatch: false,
                timeAccumulation:0,
                initialTime: (new Date()).getTime()
            })
        }else{
            this.setState({
                stopWatch: false,
                initialTime: (new Date()).getTime()
            })
        }
        let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
        let interval = setInterval(
            () => {
                this.setState({
                    currentTime: (new Date()).getTime()
                })
                countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
                minute = Math.floor(countingTime/(60*1000));
                second = Math.floor((countingTime)/1000%60);
                milSecond = Math.floor((countingTime%1000)/10);
                seccountingTime = countingTime - this.state.recordTime;
                secminute = Math.floor(seccountingTime/(60*1000));
                secsecond = Math.floor((seccountingTime)/1000%60);
                secmilSecond = Math.floor((seccountingTime%1000)/10);
                this.setState({
                    totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
                    sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
                })
                if (this.state.stopWatch) {
                    this.setState({
                        timeAccumulation: countingTime
                    })
                    clearInterval(interval)
                };
            },50);
    }

    _stopWatch() {
        this.setState({
            stopWatch: true
        })
    }

    _addRecord() {
        let {recordCounter, record} = this.state;
        recordCounter++;
        if (recordCounter<8) {
            record.pop();
        }
        record.unshift({title:"计次"+recordCounter,time:this.state.sectionTime});
        this.setState({
            recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
            recordCounter: recordCounter,
            record: record
        })
    }

    _clearRecord() {
        this.setState({
            stopWatch: false,
            resetWatch: true,
            intialTime: 0,
            currentTime:0,
            recordTime:0,
            timeAccumulation:0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record:[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""}
            ],
        });
    }

    render(){
        return (
            <View style={styles.watchContainer} >
                <WatchFace sectionTime={this.state.sectionTime} totalTime={this.state.totalTime}/>
                <WatchControl
                    addRecord={()=>this._addRecord()}
                    clearRecord={()=>this._clearRecord()}
                    startWatch={()=>this._startWatch()}
                    stopWatch={()=>this._stopWatch()}
                />
                <WatchRecord record={this.state.record} />
            </View>
        );
    }
};

const styles= StyleSheet.create({
    watchContainer : {
        backgroundColor : '#f3f3f3',
        alignItems : 'center'
    },
});