/**
 * Created by LCN on 2017/9/30 0030.
 */

import { REQUEST_POSTS, REQUEST_GETSEARCHPRODUCT,REQUEST_FAIL } from '../actions/actionTypes';

let initialState = {
    isFetching: false,
    searchResults: {},
    error: ''
};

const SearchProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case REQUEST_POSTS :
            return{ ...state, isFetching: action.isFetching};
            break;
        case REQUEST_GETSEARCHPRODUCT :
            return { ...state,  searchResults: action.preload, date: action.date, isFetching: action.isFetching };
            break;
        case REQUEST_FAIL :
            return { ...state, error: action.preload, date: action.date, isFetching: action.isFetching };
            break;

        default :
            return state;
            break;
    }

};

export default SearchProductReducer;
