/**
 * Created by Ape on 2017/7/17.
 */


import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Util from '../../utils/Util';

import  EntranceAnimation from './EntranceAnimation';
import TwitterFooter from './TwitterFooter';
import TwitterHeader from './TwitterHeader';

export default class Day03 extends Component{

    constructor() {
        super();
        this.state = {
            show:true
        };
    }

    _hideEntrance() {
        this.setState({
            show:false
        })
    }

    render (){

        let entrance = this.state.show? <EntranceAnimation hideThis={()=> this._hideEntrance()}/> : null ;

        return (
            <View style={styles.twitterContainer}>
                <TwitterHeader/>
                <TwitterFooter/>
                {entrance}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    twitterContainer:{
        width: Util.size.width,
        height: Util.size.height,
    },
});