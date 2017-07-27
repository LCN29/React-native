/**
 * Created by Ape on 2017/7/25.
 */

import React , {Component}from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet,
    Image,
    Text
}from 'react-native';

import Util from '../../utils/Util';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainScreen extends Component {

    static navigationOptions = {
        title : 'Main'
    };

    _show(index){

        const {navigate} = this.props.navigation;

        switch(index){
            case 0 :
                navigate('Poincare');
                break;
            case 1 :
                navigate('Sphere');
                break;
        }
    }

    render(){

        const {params} = this.props.navigation.state;

        return (
            <View style={styles.menu}>

                <TouchableHighlight onPress={()=>this._show(0)}>
                    <View style={{position : 'relative'}}>
                        <Image style={styles.img} source={require('./img/poincare.png')}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Poincare</Text>
                            <Icon name="ios-arrow-forward-outline" size={35} style={styles.icon}/>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>this._show(1)}>
                    <View style={{position : 'relative',marginTop: 30}}>
                        <Image style={styles.img} source={require('./img/sphere.jpg')}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Sphere</Text>
                            <Icon name="ios-arrow-forward-outline" size={35} style={styles.icon}/>
                        </View>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    menu : {
        flex : 1,
        marginTop : 20,
    },
    img : {
        width : Util.size.width,
        height : 100,
    },
    textContainer:{
        width : Util.size.width,
        height : 100,
        backgroundColor:"rgba(0,0,0,0.3)",
        justifyContent : 'center',
        position: 'absolute',
        top : 0,
        left : 0,
    },
    text:{
        color:"#fff",
        fontSize:25,
        fontWeight:"500",
        paddingLeft:20,
    },
    icon :{
        color:"#fff",
        position : 'absolute',
        right : 20,
    }

});
