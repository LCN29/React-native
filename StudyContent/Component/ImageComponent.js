/**
 * Created by Ape on 2017/7/2.
 */


/*
* resizeMode : 'contain' 将图片的高或宽其中一个放大或缩小到 image 的高宽， 另一个 等比例缩小或扩大
*               ‘cover’ 默认值， 原大小显示，超出则减掉
*               ‘stretch’  拉伸 填满父级
* */


/*
*   Image 加载图片的三种方式
*   1，加载本地的图片   source={require('./图片路径')}；
*   2，加载网络图片    source={{uri : ‘图片的地址’}}  加载网络图片时，必须给Image 设定好宽高，否则无法显示
*   3，加载工程的图片  既加载android/app/src/res/drawable图片  source={{uri : ‘图片名字’}}  不用加后缀，
* */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


var imgUrl = [
    'http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg',
    'http://img06.tooopen.com/images/20161128/tooopen_sy_188180739118.jpg'
];

export default class ImageComponent extends Component {

    constructor(props){
        super(props);
        var imgs = imgUrl;

        this.state = {
            count : 0,
            imgs : imgs,
        }
    };

    goPreview(count){
        count -- ;

        if(count<0){
           count = this.state.imgs.length-1;
        }

        this.setState({
            count : count,
        });
    };

    goNext(count){
        count++;

        if(count === this.state.imgs.length){
            count =0;
        }

        this.setState({
            count : count,
        });
    };

    render(){

        return (
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image
                        style={styles.img}
                        source={{uri : this.state.imgs[this.state.count]}}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity onPress={()=>{this.goPreview(this.state.count);}}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>{this.goNext(this.state.count);}}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    flex : {
        flex : 1,
        alignItems : 'center'
    },
    image : {
        width : 200,
        height : 300,
        borderWidth : 1,
        borderRadius : 5,
        borderColor : '#ccc',
        justifyContent : 'center',
        alignItems : 'center',
    },
    img : {
        height :150,
        width : 200,
    },
    btns : {
        flexDirection : 'row',
        justifyContent: 'center',
        marginTop : 20,
    },
    btn : {
        width :60,
        height : 30,
        borderColor: '#9900fe',
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius: 3,
        marginRight : 20
    }
});