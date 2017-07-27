/**
 * Created by Ape on 2017/7/15.
 */


import React,{ Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';


import Util from '../../utils/Util';

export default class WatchControl extends Component{

    static propTypes = {
        stopWatch: React.PropTypes.func.isRequired,
        clearRecord: React.PropTypes.func.isRequired,
        startWatch: React.PropTypes.func.isRequired,
        addRecord: React.PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            startBtnText : '启动',
            stopBtnText : '计次',
            startBtnColor: "#60B644",
            underlayColor:"#fff",
            watchOn : false,
        }
    }

    _startWatch(){
        if(!this.state.watchOn){
            this.props.startWatch();
            this.setState({
                startBtnText: "停止",
                startBtnColor: "#ff0044",
                stopBtnText: "计次",
                underlayColor:"#eee",
                watchOn: true
            })
        }else{
            this.props.stopWatch();
            this.setState({
                startBtnText: "启动",
                startBtnColor: "#60B644",
                stopBtnText: "复位",
                underlayColor:"#eee",
                watchOn: false
            })
        }
    }

    _stopWatch(){
        if (this.state.watchOn) {
            this.props.addRecord();
        }else{
            this.props.clearRecord();
            this.setState({
                stopBtnText: "计次"
            })
        }
    }

    render(){
        return (
            <View style={styles.watchControlContainer}>
                {/*按钮1*/}
                <View style={{flex: 1, alignItems : 'flex-start'}}>
                    <TouchableHighlight
                        style={styles.btnStop}
                        underlayColor='#eee'
                        onPress={()=>{this._stopWatch()}}>
                        <Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
                    </TouchableHighlight>

                </View>
                {/*按钮2*/}
                <View style={{flex: 1,alignItems : 'flex-end'}}>
                    <TouchableHighlight
                        style={styles.btnStart}
                        underlayColor="#eee"
                        onPress={()=>{this._startWatch()}} >
                        <Text style={[styles.btnStartText,{color: this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    watchControlContainer:{
        width: Util.size.width,
        height: 100,
        flexDirection : 'row',
        backgroundColor: '#f3f3f3',
        paddingLeft: 60, paddingRight:60,
        alignItems : 'center'
    },

    btnStop:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor : '#fff',
        alignItems:"center",
        justifyContent:"center"
    },
    btnStart:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    btnStopText:{
        fontSize:14,
        backgroundColor:"transparent",
        color:"#555"
    },
    btnStartText:{
        fontSize:14,
        backgroundColor:"transparent"
    },

});