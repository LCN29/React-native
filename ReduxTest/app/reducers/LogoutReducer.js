/**
 * Created by LCN on 2017/9/9 0009.
 */

import { LOGOUT } from '../actions/actions';

let initialState = {
    test : '',
};

const logoutReducers = (state = initialState, action)=>{
    switch (action.type){
        case  LOGOUT :
            return Object.assign({},state,{
                new_data : ''
            });
            break;
    }
};

export default logoutReducers;
