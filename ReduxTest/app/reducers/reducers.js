/**
 * Created by LCN on 2017/9/9 0009.
 */

import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import LogoutReducer from './LogoutReducer';


const reducers = combineReducers({
    login : LoginReducer,
});

export default reducers;
