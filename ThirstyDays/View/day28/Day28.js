/**
 * Created by Ape on 2017/7/27.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    TouchableHighlight,
    ScrollView,
    CameraRoll,
    LayoutAnimation
} from 'react-native';

import Util from '../../utils/Util';

import Icon from 'react-native-vector-icons/Ionicons';



export default class Day28 extends Component {

    constructor() {
        super();
        this.state={
            images : [],
            widths : [],
            selected : [],
            showBtn: false,
            active : false,
        };
    }

    _showBtn(){
        this.setState({
            showBtn: true,
        });
    }

    storeImages(data){
        const assets = data.edges;
        const images = assets.map((asset)=> asset.node.image);
        const widths = [];
        const selected = [];
        for (let i = 0; i<images.length; i++){
            Image.getSize(images[i].uri,(w,h)=>{
                console.log((w/h)*130);
                widths.push((w/h)*130);
                selected.push(false);
            })
        }

        this.setState({images,widths,selected});
    }

    logImageError(err){
        console.log("图片获取失败");
        console.log(err);
    }

    _select(index){
        let {selected} = this.state;
        selected[index] = !selected[index];
        this.setState({
            active: true,
            selected,
        });
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    _hideBtn() {
        this.setState({
            showBtn: false,
        });
    }

    componentDidMount() {
        const fetchParams = { first : 10 };
        CameraRoll.getPhotos(fetchParams).done((data)=> this.storeImages(data),(err)=>this.logImageError(err));
    }

    render(){

        let {showBtn,active,widths,selected} = this.state;
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={()=>this._showBtn()}>
                    <Image source={require('./img/bg.png')}/>
                </TouchableWithoutFeedback>
                {showBtn?
                    <View style={styles.drop}>
                        <View style={[styles.btn,{height: active? 315 : 250}]}>

                            <View style={styles.imgContainer}>

                                <ScrollView style={[{height:active? 195:130}]} horizontal={true} showsHorizontalScrollIndicator={false} automaticallyAdjustContentInsets={false}>
                                    <View style={{flexDirection:'row',paddingTop : 2, paddingLeft : 5,}}>
                                        {this.state.images.map((elem,index)=>{
                                            return(
                                                <TouchableWithoutFeedback key={index} onPress={()=>this._select(index)} underlayColor="transparent">
                                                    <View style={{position:'relative'}}>
                                                        <Image style={[styles.image,{height:active? 195:130,width:active? widths[index]*1.5:widths[index]}]} source={{uri : elem.uri}} />
                                                        {active?
                                                            (selected[index]?
                                                                <Icon style={[styles.icon,{top : active ? 165 : 100}]} name="md-checkmark-circle" color="#0089fa" size={25}/>
                                                                :
                                                                <Icon style={[styles.icon,{top : active ? 165 : 100}]} name="ios-checkmark-circle-outline" color="#fff" size={25}/>)
                                                            :
                                                            <View/>
                                                        }
                                                    </View>
                                                </TouchableWithoutFeedback>
                                            );
                                        })}
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={[styles.innderBtn,{borderBottomWidth : Util.pixel,borderBottomColor :'#ddd'}]}>
                                <Text style={styles.btnText}>相册</Text>
                            </View>

                            <View style={[styles.innderBtn]}>
                                <Text style={styles.btnText}>相机</Text>
                            </View>
                        </View>

                        <TouchableHighlight onPress={() => this._hideBtn()}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>取消</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    :
                    null
                }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:"#f9f9f9",
    },
    bg : {
        flex : 1,
        resizeMode : 'stretch'
    },
    drop : {
        height: Util.size.height,
        width: Util.size.width,
        position:"absolute",
        left:0,
        top:0,
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundColor:"rgba(0,0,0,0.2)",
        paddingBottom : 24,
    },
    btn :{
        width: Util.size.width-20,
        height:50,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop:5,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    },
    imgContainer: {
        flex:3,
        width:Util.size.width-20,
    },
    innderBtn:{
        height:50,
        width:Util.size.width-20,
        alignItems:"center",
        justifyContent:"center",
    },
    btnText:{
        color:"#0089fa",
        fontSize:18,
        fontWeight:"500",
    },
    image : {
        height:140,
        width:100,
        marginRight:5,
        alignItems:"flex-end",
        justifyContent:"flex-end",
        paddingBottom:2,
        paddingRight:10,
    },
    icon:{
        position : 'absolute',
        right : 15,
    }
});