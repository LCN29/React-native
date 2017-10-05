/**
 * Created by LCN on 2017/9/30 0030.
 */

import React,{ Component }from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';


export default class BottomIndicator extends Component {

    render(){
        const isShow = this.props.show;
        return (
            isShow ?
                <View style={styles.Indicator}>
                    <Image style={styles.IndicatorBg} source={require('../imgs/bg-bottom.png')}/>
                </View>
                :
                null
        );
    }

}

const styles = StyleSheet.create({
    Indicator: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    IndicatorBg: {
        height: 30,
        resizeMode: 'contain'
    }
});
