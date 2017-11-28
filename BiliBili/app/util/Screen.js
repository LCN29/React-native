/**
 * Created by LCN on 2017/8/18 0018.
 */

import React  from 'react';
import {
    Dimensions,
    PixelRatio,
    Platform,
} from 'react-native';


const Screen = {
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height,
    onePixel : 1/PixelRatio.get(),
    statusBarHeight : (Platform.OS === 'ios' ? 20 : 0),
    drawerWidth : Dimensions.get('window').width*0.8,
} ;

export default  Screen ;
