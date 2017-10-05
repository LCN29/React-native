/**
 * Created by LCN on 2017/9/29 0029.
 */

import {
    Dimensions,
    PixelRatio
} from 'react-native';

const Screen = {
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height,
    onePixel : 1/PixelRatio.get(),
};

export default Screen;