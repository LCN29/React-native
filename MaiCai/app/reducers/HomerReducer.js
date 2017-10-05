/**
 * Created by LCN on 2017/9/29 0029.
 */

import { REQUEST_POSTS, REQUEST_GETHOME,REQUEST_FAIL } from '../actions/actionTypes';

let initialState = {
    isFetching: false,
    homeData: {},
    error: ''
};



const HomerReducer = (state = initialState, action) => {
    switch (action.type){
        case REQUEST_POSTS :
                return { ...state, isFetching: action.isFetching};
            break;

        case REQUEST_GETHOME :
                return { ...state, homeData: action.preload, date: action.date, isFetching: action.isFetching, };
            break;

        case REQUEST_FAIL :
                return { ...state, error: action.preload, date: action.date, isFetching: action.isFetching };
            break;

        default :
                return state;
            break;
    }
};

export default HomerReducer;
