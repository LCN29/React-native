/**
 * Created by Ape on 2017/7/25.
 */
import React from 'react';

import Poincare from './PoincareScreen';
import Sphere from './SphereScreen';
import Main from './MainScreen';


/*  使用 npm install --save react-navigation*/
import {StackNavigator} from 'react-navigation';

const Day23 = StackNavigator(
    {
        'Main' : {screen : Main},
        'Poincare' : { screen : Poincare},
        'Sphere' : { screen : Sphere},
    }
);

export default Day23;
