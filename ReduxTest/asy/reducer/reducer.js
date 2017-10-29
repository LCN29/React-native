/**
 * Created by LCN on 2017/9/10 0010.
 */

import { combineReducers } from 'redux';
import {  FETCHING,FETCH_SUCCESS , FETCH_FAILURE  } from '../action/actions';

const defaultState = {
    hint : '当前无任何操作',
    data : {},
    isGet : false,
};

function fetchReducer( state = defaultState , action ){
    switch (action.type){
        case FETCHING :
            return { ...state, hint :' 正在请求中',data :{}, isGet : false};
            break;
        case FETCH_SUCCESS :
            return { ...state, hint : '请求成功',data : action.data, isGet: true };
            break;
        case FETCH_FAILURE :
            return { ...state, hitn : '请求失败',data :{}, isGet : false};
            break;
        default :
            return state;
            break;
    }
}


const reducers = combineReducers({
    fetchReducer
});

export default reducers;
