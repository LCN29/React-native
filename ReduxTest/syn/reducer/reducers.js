/**
 * Created by LCN on 2017/9/10 0010.
 */

import { combineReducers } from 'redux';
import { INCREASE ,DECREASE, RESET } from '../action/actions';

const defaultState = {
    count: 5,
};

function counter(state = defaultState, action) {
    switch (action.type){
        case INCREASE :
            return { ...state, count : state.count+1};
            break;
        case DECREASE :
            return { ...state, count : state.count-1};
            break;
        case RESET :
            return { ...state, count : 0};
            break;
        default :
            return state;
            break;
    }
}

const reducers = combineReducers({
    counter
});

export default  reducers;



