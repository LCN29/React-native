/**
 * Created by LCN on 2017/9/29 0029.
 */

import { REQUEST_POSTS, REQUEST_GETCATEGORIES,REQUEST_FAIL } from '../actions/actionTypes';

let initialState = {
    isFetching: false,
    categories: {},
    error: ''
};



const CategoriesReducer = (state = initialState, action) => {
    switch (action.type){
        case REQUEST_POSTS :
                return { ...state, isFetching: action.isFetching};
            break;

        case REQUEST_GETCATEGORIES :
                return { ...state, categories: action.preload, date: action.date, isFetching: action.isFetching };
            break;

        case REQUEST_FAIL :
                return { ...state, error: action.preload, date: action.date, isFetching: action.isFetching };
            break;

        default :
                return state;
            break;
    }
};

export default CategoriesReducer;
