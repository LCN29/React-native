/**
 * Created by LCN on 2017/9/30 0030.
 */

import { REQUEST_POSTS, REQUEST_GETDETAIL,REQUEST_FAIL } from '../actions/actionTypes';

let initialState = {
    isFetching: false,
    detail: {},
    error: ''
};

const ProductDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case REQUEST_POSTS :
                return{ ...state, isFetching: action.isFetching};
            break;
        case REQUEST_GETDETAIL :
                return { ...state,  detail: action.preload, date: action.date, isFetching: action.isFetching };
            break;
        case REQUEST_FAIL :
                return { ...state, error: action.preload, date: action.date, isFetching: action.isFetching };
            break;

        default :
                return state;
            break;
    }

};

export default ProductDetailReducer;
