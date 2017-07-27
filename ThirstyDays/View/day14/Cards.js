/**
 * Created by Ape on 2017/7/22.
 */

import React , {Component}from 'react';
import {
    View,
    StyleSheet,
}from 'react-native';

import Card from './Card';

import Util from '../../utils/Util'
import SwipeCard from './SwipeCard';


export default class Cards extends Component{

    constructor(){
        super();
        /*  将一个数组直接放到state时 ， 数组名 就是他的key*/
        const names = ["Stuart","LAN","李云","MaYa"];
        const imgs = ['img01','img02','img03','img04'];
        this.state = {
            imgs,
            names
        }
    }

    _next() {
        const imgs = this.state.imgs;
        imgs.pop();
        this.setState({imgs,});
    }


    render(){
        const cards = this.state.imgs.map((elem, index)=>{
            return <Card key={index} id={"sc"+index} name={this.state.names[index]} img={elem} top={20-index*4} width={Util.size.width-38+index*4} left={18-index*2}/>
        });
        return (
            <View style={styles.container}>
            {/*    {cards}*/}
                <SwipeCard next={() => this._next()}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
});
