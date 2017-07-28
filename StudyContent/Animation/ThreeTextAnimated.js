/**
 * Created by Ape on 2017/7/7.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';

export default class ThreeTextAnimated extends Component{

    constructor(props){
        super(props);
        this.state = {
            anim : [1,2,3].map(()=>new Animated.Value(0))
        }
    }

    componentDidMount(){
        var timing = Animated.timing;
        Animated.sequence([
            Animated.stagger(200,this.state.anim.map((left)=>{
                return timing(left, {
                    toValue: 1,
                });
            }).concat(
                this.state.anim.map(left => {
                    return timing(left, {
                        toValue: 0,
                    });
                })
            )),
            Animated.delay(400), // 延迟400ms，配合sequence使用
            timing(this.state.anim[0],{
                toValue : 1
            }),
            timing(this.state.anim[1],{
                toValue : -1
            }),
            timing(this.state.anim[2],{
                toValue : 0.5
            }),
            Animated.delay(400),

            Animated.parallel(this.state.anim.map((left)=> timing(left,{
                toValue : 0
            }))),

        ]).start();
    }

    render(){

        var views = this.state.anim.map(function(value,i){
           return (
               <Animated.View
                   accessible={true}
                   key={i}
                   style={[styles.common,styles['text'+i],{
                       left : value.interpolate({
                           inputRange : [0,1],
                           outputRange : [100,300]
                       })
                   }]}
               >
                   <Text style={styles.text}>我是第{i + 1}个View</Text>
               </Animated.View>
           );
        });

        return (
            <View style={styles.container}>
                <Text>sequence/delay/stagger/parallel演示</Text>
                {views}
            </View>
        );
    }
};

const styles = StyleSheet.create({

    container :{
        flex :1,
        alignItems : 'center',
        backgroundColor : '#feafda',
        position : 'relative',
    },
    common: {
        marginBottom : 10,
        position : 'absolute',
        top : 100,
        width : '40%',
        height : 20,
    },

    text0 : {
        backgroundColor: '#ffeeaa'
    },
    text1 : {
        backgroundColor: '#aaddea',
        top : 140,
    },
    text2 : {
        backgroundColor: '#00ccaa',
        top : 180,
    },

    text : {
        fontSize: 16,
        textAlign : 'center'
    },

});