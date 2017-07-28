/**
 * Created by Ape on 2017/7/28.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';

import ImageModules from './ImageModules';

export default class ImagePicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            img : 'http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg',
        }
    };

    async getImage(){

        try{
            var {
                uri
            }= await ImageModules.pickImage();
            alert(uri);

            //  console.log(uri);

        }catch(e){
            console.log(e);
        }
    }

    getImage2(){
        ImageModules.pickImage()
            .then(
                (str) => {
                    this.setState({
                        img : str,
                    });
                }
            ).catch(
            (code, err) => {
                alert(err)
            }
        )
    }

    render() {
        console.log(this.state.img);

        return (
            <View style={{flex:1,backgroundColor : 'orange'}}>
                <Image
                    source={{uri : this.state.img}}
                    style={styles.img}

                />
                <Text
                    style={styles.btn}
                    onPress={()=>{
                        //  this.getImage();
                        this.getImage2();
                    }}
                > 23423432</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img : {
        width : 400,
        height : 300,
        padding : 10,
        borderRadius : 4,
        borderColor : 'black',
    },
    btn : {
        backgroundColor: 'red',
        width: 140,
    }
});