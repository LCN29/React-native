/**
 * Created by LCN on 2017/8/9 0009.
 */

import { Dimensions, Platform, PixelRatio } from 'react-native'

const Screen = {
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height,
    onePixel : 1/PixelRatio.get(),
    statusBarHeight : (Platform.OS === 'ios' ? 20 : 0)
};

export default Screen;