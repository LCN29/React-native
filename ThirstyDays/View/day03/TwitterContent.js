/**
 * Created by Ape on 2017/7/18.
 */

import React,{ Component } from 'react';
import {
    RefreshControl,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import Util from '../../utils/Util';

export default class TwitterContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing : false
        };
    }

    _onRefresh(){
        this.setState({
            isRefreshing : true,
        });

        setTimeout(()=>{
            this.setState({
                isRefreshing : false,
            });
        },1000);
    }

    render(){
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={()=>this._onRefresh()}
                        tintColor="#ddd"/>}>
                <Image  resizeMode="contain" source={require('./img/day3.png')} style={styles.image}/>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    image : {
        height:Util.size.height-78,
        width: Util.size.width,
        flex : 1,
    }
});