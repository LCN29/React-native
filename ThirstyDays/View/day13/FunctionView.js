/**
 * Created by Ape on 2017/7/22.
 */


import React ,{Component} from 'react';



import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Image,
    CameraRoll
}from 'react-native';

import Util from '../../utils/Util';
import Icon from 'react-native-vector-icons/Ionicons';


export default class FunctionView extends Component{

    static propTypes = {
        numOfText : React.PropTypes.number.isRequired,
        click : React.PropTypes.func.isRequired,
    };

    constructor(){
        super();
        this.state = {
            image : [],
        };
    }

    componentDidMount() {
        /* first : 最近的4张照片*/
        const fetchParams = { first : 4};
        CameraRoll.getPhotos(fetchParams).done((data)=>this.getImages(data), (error)=> this.logError(error))
    }

    getImages(data){
        const assets = data.edges;
        const images = assets.map((asset)=>asset.node.image);
        this.setState({
            image : images,
        });
    }

    logError(error){
        console.log(error);
        alert(error);
    }

    _click(){
        // 子级调用父级的事件
        if(this.props.click!==null){
            this.props.click();
        }
    }

    render(){
        return (
            <View style={styles.functionContainer}>
                <View style={styles.functionIconContainer}>
                    <View style={styles.functionIcon}>
                        <Icon name="ios-pin" size={23} color="#8899a5" />
                        <Icon name="md-camera" size={23} color="#8899a5" />
                        <Icon name="md-image" size={23} color="#8899a5" />
                        <Icon name="md-pie" size={23} color="#8899a5" />
                    </View>
                    <View style={styles.functionBtn}>
                        <Text style={styles.text}>{ 140 - this.props.numOfText}</Text>
                        <TouchableHighlight style={ this.props.numOfText===140? styles.unactivatedBtn :styles.activeBtn} onPress={()=>{this._click()}}>
                            <Text style={ this.props.numOfText===140? styles.unactivatedText : styles.activeText}>发推</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.imageGrid}>
                    <View style={styles.imageIcon}>
                        <Icon name="ios-camera" size={80} color="#2aa2ef"/>
                    </View>
                    <View style={styles.imageIcon}>
                        <Icon name="ios-videocam" size={80} color="#2aa2ef"/>
                    </View>

                    {this.state.image.map((image,index)=> <View key={index} style={styles.imageIcon}><Image style={styles.image} source={{ uri: image.uri }}/></View>)}

                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({

    functionContainer:{
        height:275,
        width : Util.size.width ,
        borderTopWidth:1, borderTopColor:"#a0adb7",
    },
    functionIconContainer : {
        height:50,
        flexDirection : 'row',
        alignItems:"center",
        borderBottomWidth:1, borderBottomColor:"#ccd6dd",
        /* 3个时 ，2个在左右，1个在中间 ，2个时一左一右*/
        justifyContent:"space-between",
    },
    functionIcon : {
        flexDirection: 'row',
        width:210,
        justifyContent: 'space-around'
    },
    functionBtn : {
        width:110,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems : 'center'
    },
    activeBtn:{
        height:35,
        width:60,
        borderRadius:6,
        backgroundColor:"#2aa2ef",
        alignItems:"center",
        justifyContent:"center",
    },
    unactivatedBtn : {
        height:35,
        width:60,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:6,
        borderColor:"#ccd6dd", borderWidth:1
    },

    activeText : {
        color:"#fff",
        fontSize:14
    },
    unactivatedText :{
        color:"#ccd6dd",
        fontSize:14
    },
    text:{
        color:"#ccd6dd",
        fontSize:18
    },
    imageGrid:{
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    imageIcon : {
        width: Util.size.width/3,
        height:113,
        alignItems:"center",
        justifyContent:"center",
        borderRightColor:"#ddd", borderRightWidth:1,
        borderBottomColor:"#ddd",borderBottomWidth:1,
    },
    image:{
        width: Util.size.width/3,
        height:113,
        resizeMode : 'stretch'
    },

});