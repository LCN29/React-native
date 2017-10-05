/**
 * Created by LCN on 2017/9/29 0029.
 */

import { NavigationActions } from 'react-navigation';


import { NAVGATION_HOME } from '../actions/actionTypes';
import AppStackNavigator from '../navigators/AppStackNavigator';


const initialNavState =AppStackNavigator.router.getStateForAction(
    NavigationActions.init()
);


const StackReducer = (state = initialNavState, action)=>{
    let nextState;
    switch (action.type){
        case NAVGATION_HOME :
                nextState = AppStackNavigator.router.getStateForAction(
                    NavigationActions.navigate({ routeName: 'Home' }),
                    state
                );
            break;

        default :
                nextState = AppStackNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};

export default StackReducer;
