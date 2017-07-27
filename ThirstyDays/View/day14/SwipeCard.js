/**
 * Created by Ape on 2017/7/23.
 */

import React , {Component}from 'react';
import {
    View,
    Image,
    StyleSheet,
}from 'react-native';

import Util from '../../utils/Util';


/*  导入 npm install --save react-native-swipe-cards */
import SwipeCards from 'react-native-swipe-cards';
import SCard from "./SCard";

export default  class SwipeCard extends Component{
    constructor() {
        super();
        const names = ["Stuart","LAN","李云","MaYa","Lucy"];
        const imgs = ['img01','img02','img03','img04','img05'];

        const cards = imgs.map((elem,index)=>{
            return {id : "sc"+index, img : imgs[4-index], name : names[4-index], top:8-index*3, width:Util.size.width-22-index*4};
        });

        this.state ={
            cards,
        }
    }

    handleYup() {
        this.props.next();
    }

    handleNope() {
        this.props.next();
    }

    render(){
        return (
            <SwipeCards
                cards={this.state.cards}
                showYup={false}
                showNope={false}
                handleYup={() => this.handleYup()}
                handleNope={() => this.handleNope()}
                renderCard={(cardData) => <SCard key={cardData.id} {...cardData} />}
            />
        );
    }
}