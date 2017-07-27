/**
 * Created by Ape on 2017/7/16.
 */


import React, { Component } from 'react';
import Weather from './Weather';

export default class Day02 extends Component{

    _back() {
        alert("点击事件");
    }

    render(){
        return <Weather back={()=>this._back()}/>;
    }
};
